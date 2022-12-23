import React, { useState } from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import MobileNavBar from './MobileNavBar';
import NavBarButton from './NavBarButton';

function NavBar() {
  const [showMobile, setShowMobile] = useState(false);

  if (showMobile) {
    return (<MobileNavBar show={showMobile} setShow={setShowMobile} />);
  }

  return (
    <nav className="px-8 py-2 flex flex-col md:flex-row sticky top-0 w-full z-50 bg-white">
      <div className="w-full md:w-auto flex flex-row justify-between items-center">
        <img className="mr-6" alt="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjkiIGhlaWdodD0iNjYiIHZpZXdCb3g9IjAgMCA2OSA2NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTMuMiA3LjhjMCAxLjgtMS41IDMuMy0zLjMgMy4zSDQuNVY0LjVIMTBhMy4zIDMuMyAwIDAgMSAzLjMgMy4zem00LjcgMEE3LjcgNy43IDAgMCAwIDEwLjEgMEgwdjIyLjJoNC41di02LjZoNS42YzQuMyAwIDcuOC0zLjUgNy44LTcuOHptMTIgNDFoMTYuM3YtNC40SDM0LjN2LTMuN2EyNy44IDI3LjggMCAwIDAgNS4zLTEuM2wyLjItLjgtMS42LTQuNC0yLjIuOGEyNC40IDI0LjQgMCAwIDEtMy43IDF2LTQuOGgxMS45di00LjVIMjkuOHY5LjZjLTIuNy0uMy00LjctMS40LTYtMi41LTIuMy0yLTQuNy02LTMtMTMuOWwuNS0yLjMtNC42LTEtLjUgMi4zYy0xLjcgOC0uMSAxNC4zIDQuNSAxOC40YTE0LjcgMTQuNyAwIDAgMCA5LjEgMy42djh6bTM0LjYgNS43YTguOCA4LjggMCAwIDEtLjQgMi44Yy0uMy44LS43IDEuNi0xLjMgMi4yYTUuOCA1LjggMCAwIDEtMiAxLjUgNi42IDYuNiAwIDAgMS01LjEgMCA1LjggNS44IDAgMCAxLTItMS41Yy0uNS0uNi0xLTEuNC0xLjItMi4yYTguOCA4LjggMCAwIDEtLjUtMi44YzAtMSAuMi0yIC41LTIuOC4zLS45LjctMS42IDEuMi0yLjNhNS43IDUuNyAwIDAgMSAyLTEuNSA3IDcgMCAwIDEgNS4yIDAgNS43IDUuNyAwIDAgMSAyIDEuNSA4LjggOC44IDAgMCAxIDEuNyA1em00LjUgMGExMS40IDExLjQgMCAwIDAtMi45LTguMyA5LjggOS44IDAgMCAwLTMuNC0yLjQgMTEgMTEgMCAwIDAtNC40LS45IDExIDExIDAgMCAwLTQuNS45IDkuOCA5LjggMCAwIDAtMy40IDIuNGMtLjkgMS0xLjYgMi4zLTIuMSAzLjctLjUgMS40LS43IDMtLjcgNC42IDAgMS42LjIgMy4yLjcgNC42LjUgMS40IDEuMiAyLjYgMi4xIDMuNmE5LjkgOS45IDAgMCAwIDMuNCAyLjRjMS40LjYgMi45LjkgNC41LjlhMTEgMTEgMCAwIDAgNC40LS45IDEwIDEwIDAgMCAwIDMuNC0yLjRjMS0xIDEuNy0yLjIgMi4yLTMuNi41LTEuNC43LTMgLjctNC42eiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==" />
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={() => setShowMobile((currentShowMobile) => !currentShowMobile)}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
        </button>
      </div>
      <div className="hidden md:flex md:flex-row md:justify-between md:items-center w-full">
        <div className="flex justify-start ">
          <div className="md:flex flex-nowrap space-x-7">
            <NavBarButton text="Product" />
            <NavBarButton text="Why Pleo" />
            <NavBarButton text="Resources" />
            <NavBarButton text="Pricing" />
          </div>
        </div>
        <div className="md:flex space-x-7">
          <button type="submit">Log in</button>
          <button type="submit">Book a demo</button>
          <PrimaryButton text="Get Started" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
