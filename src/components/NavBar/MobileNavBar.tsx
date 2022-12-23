import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import NavBarButton from './NavBarButton';

interface MobileNavBarProps {
  show: boolean,
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

function MobileNavBar(props: MobileNavBarProps) {
  const {
    show, setShow,
  } = props;

  const classNames = !show ? 'hidden' : '';
  return (
    <nav className={`${classNames} px-8 py-2 flex flex-col md:flex-row top-0 fixed w-full z-50 h-screen bg-white`}>
      <div className="w-full md:w-auto flex flex-row justify-end items-center">
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={() => setShow((currentShow) => !currentShow)}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
        </button>
      </div>
      <div className="flex flex-col space-y-8 w-full grow items-start">
        <div className="flex flex-col grow-0 space-y-4 items-start ">
          <NavBarButton text="Product" />
          <NavBarButton text="Why Pleo" />
          <NavBarButton text="Resources" />
          <NavBarButton text="Pricing" />
        </div>
        <div className="flex flex-col grow justify-between items-start w-full">
          <div className="flex flex-col space-y-4 items-start">
            <button type="submit">Log in</button>
            <button type="submit">Book a demo</button>
          </div>
          <PrimaryButton text="Get Started" className="w-full rounded" />
        </div>
      </div>
    </nav>
  );
}

export default MobileNavBar;
