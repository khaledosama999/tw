import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import NavBarButton from "./NavBarButton";

type MobileNavBarProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

function MobileNavBar(props: MobileNavBarProps) {
  const { show, setShow } = props;

  const classNames = !show ? "hidden" : "";
  return (
    <nav
      className={`${classNames} fixed top-0 z-50 flex h-screen w-full flex-col bg-white px-8 py-2 md:flex-row`}
    >
      <div className="flex w-full flex-row items-center justify-end md:w-auto">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          onClick={() => setShow((currentShow) => !currentShow)}
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
      <div className="flex w-full grow flex-col items-start space-y-8">
        <div className="flex grow-0 flex-col items-start space-y-4 ">
          <NavBarButton text="Product" />
          <NavBarButton text="Why Pleo" />
          <NavBarButton text="Resources" />
          <NavBarButton text="Pricing" />
        </div>
        <div className="flex w-full grow flex-col items-start justify-between">
          <div className="flex flex-col items-start space-y-4">
            <button type="submit">Log in</button>
            <button type="submit">Book a demo</button>
          </div>
          <PrimaryButton className="w-full rounded">Get Started</PrimaryButton>
        </div>
      </div>
    </nav>
  );
}

export default MobileNavBar;
