import React, { useState } from "react";
import "../css/SettingsButton.css"; // Assuming your styles are defined here

const SettingsButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <label class="burger" for="burger">
      <input type="checkbox" id="burger" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default SettingsButton;
