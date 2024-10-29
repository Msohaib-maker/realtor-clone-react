import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

export default function Header() {

  const [pageState, setPageState] = useState("Sign in");
  const [theme, setTheme] = useState('bg-Dark');
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);

  // Initialize body color on first load
  useEffect(() => {
    document.body.style.backgroundColor = theme === 'bg-Dark' ? 'rgb(39, 39, 39)' : 'rgb(240, 253, 244)';
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'bg-Dark' ? 'bg-Light' : 'bg-Dark'));
  };


  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }


  return (
    <div className={`${theme} border-b shadow-sm sticky top-0 z-40`}>
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-white border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-white border-b-red-500"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                "text-white border-b-red-500"
              }`}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>

            <li className={`cursor-pointer py-3 `}>
            <button
              onClick={() => toggleTheme()}
             
            >
              {/* Render an icon based on the current theme */}
              {theme === 'bg-Dark' ? (
                <SunIcon className="w-5 h-5 text-yellow-500" />
              ) : (
                <MoonIcon className="w-5 h-5 text-gray-800" />
              )}
            </button>
          </li>


          </ul>
        </div>
      </header>
    </div>
  );
}
