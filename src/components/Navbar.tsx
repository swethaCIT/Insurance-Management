const Nav = () => {
  return (
    <nav className="bg-gray-   w-full px-8 md:px-auto">
      <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        {/* Logo */}
        <div className="text-indigo-500 md:order-1">
          {/* Heroicon - quickie logo */}
          <img src="/logo.png" alt="Logo" className="h-10 w-10" />
        </div>
        <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
          <ul className="flex font-semibold justify-between">
            <li className="md:px-4 md:py-2 text-indigo-500">
              <a href="#" id="home">
                Home
              </a>
            </li>
            <li className="md:px-4 md:py-2 hover:text-indigo-400">
              <a href="#features">Features</a>
            </li>
            <li className="md:px-4 md:py-2 hover:text-indigo-400">
              <a href="#contribute">Contribute</a>
            </li>
            <li className="md:px-4 md:py-2 hover:text-indigo-400">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="order-2 md:order-3">
          <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
            {/* Heroicons - Login Solid */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Login</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;