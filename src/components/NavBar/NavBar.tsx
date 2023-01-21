import React, { useState } from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import MobileNavBar from "./MobileNavBar";
import NavBarButton from "./NavBarButton";

function NavBar() {
  const [showMobile, setShowMobile] = useState(false);

  if (showMobile) {
    return <MobileNavBar show={showMobile} setShow={setShowMobile} />;
  }

  return (
    <nav className="sticky top-0 z-50 flex w-full flex-col bg-white px-8 py-2 md:flex-row">
      <div className="flex w-full flex-row items-center justify-between md:w-auto">
        <img
          className="mr-6"
          alt=""
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjkiIGhlaWdodD0iNjYiIHZpZXdCb3g9IjAgMCA2OSA2NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTMuMiA3LjhjMCAxLjgtMS41IDMuMy0zLjMgMy4zSDQuNVY0LjVIMTBhMy4zIDMuMyAwIDAgMSAzLjMgMy4zem00LjcgMEE3LjcgNy43IDAgMCAwIDEwLjEgMEgwdjIyLjJoNC41di02LjZoNS42YzQuMyAwIDcuOC0zLjUgNy44LTcuOHptMTIgNDFoMTYuM3YtNC40SDM0LjN2LTMuN2EyNy44IDI3LjggMCAwIDAgNS4zLTEuM2wyLjItLjgtMS42LTQuNC0yLjIuOGEyNC40IDI0LjQgMCAwIDEtMy43IDF2LTQuOGgxMS45di00LjVIMjkuOHY5LjZjLTIuNy0uMy00LjctMS40LTYtMi41LTIuMy0yLTQuNy02LTMtMTMuOWwuNS0yLjMtNC42LTEtLjUgMi4zYy0xLjcgOC0uMSAxNC4zIDQuNSAxOC40YTE0LjcgMTQuNyAwIDAgMCA5LjEgMy42djh6bTM0LjYgNS43YTguOCA4LjggMCAwIDEtLjQgMi44Yy0uMy44LS43IDEuNi0xLjMgMi4yYTUuOCA1LjggMCAwIDEtMiAxLjUgNi42IDYuNiAwIDAgMS01LjEgMCA1LjggNS44IDAgMCAxLTItMS41Yy0uNS0uNi0xLTEuNC0xLjItMi4yYTguOCA4LjggMCAwIDEtLjUtMi44YzAtMSAuMi0yIC41LTIuOC4zLS45LjctMS42IDEuMi0yLjNhNS43IDUuNyAwIDAgMSAyLTEuNSA3IDcgMCAwIDEgNS4yIDAgNS43IDUuNyAwIDAgMSAyIDEuNSA4LjggOC44IDAgMCAxIDEuNyA1em00LjUgMGExMS40IDExLjQgMCAwIDAtMi45LTguMyA5LjggOS44IDAgMCAwLTMuNC0yLjQgMTEgMTEgMCAwIDAtNC40LS45IDExIDExIDAgMCAwLTQuNS45IDkuOCA5LjggMCAwIDAtMy40IDIuNGMtLjkgMS0xLjYgMi4zLTIuMSAzLjctLjUgMS40LS43IDMtLjcgNC42IDAgMS42LjIgMy4yLjcgNC42LjUgMS40IDEuMiAyLjYgMi4xIDMuNmE5LjkgOS45IDAgMCAwIDMuNCAyLjRjMS40LjYgMi45LjkgNC41LjlhMTEgMTEgMCAwIDAgNC40LS45IDEwIDEwIDAgMCAwIDMuNC0yLjRjMS0xIDEuNy0yLjIgMi4yLTMuNi41LTEuNC43LTMgLjctNC42eiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg=="
        />
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          onClick={() => setShowMobile((currentShowMobile) => !currentShowMobile)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="hidden w-full md:flex md:flex-row md:items-center md:justify-between">
        <div className="flex justify-start ">
          <div className="flex-nowrap space-x-7 md:flex">
            <NavBarButton text="Product" />
            <NavBarButton text="Why Pleo" />
            <NavBarButton text="Resources" />
            <NavBarButton text="Pricing" />
          </div>
        </div>
        <div className="space-x-7 md:flex">
          <button type="submit">Log in</button>
          <button type="submit">Book a demo</button>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
