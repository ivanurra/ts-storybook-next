import React from "react";
import { Titulo } from "../interfaces/index";

const Header = ({ titulo }: Titulo) => {
  return (
    <div>
      <a href="#!">{titulo}</a>
    </div>
  );
};

export default Header;
