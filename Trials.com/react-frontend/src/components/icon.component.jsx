import React from "react";

// get our fontawesome imports
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon() {
  const defaultIcon = <FontAwesomeIcon icon={faUserNinja} />;
  return defaultIcon;
}
