import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

type NavBarButtonProps = {
  text: string;
};

function NavBarButton(props: NavBarButtonProps) {
  const { text } = props;
  return (
    <button type="submit" className="flex flex-row items-center border-0 bg-white">
      {text}
      <FontAwesomeIcon icon={faAngleDown} className="ml-2 text-sm text-slate-400" />
    </button>
  );
}

export default NavBarButton;
