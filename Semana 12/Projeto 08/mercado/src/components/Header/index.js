import { Heading } from "@chakra-ui/react";

import "./style.css";

const Header = () => {
  return (
    <div className="Header">
      <Heading
        textAlign="center"
        background-color="rgb(91, 108, 255)"
        color="white"
        align="center"
        marginTop="17px">Mercado Otterwise</Heading>
    </div >
  );
};

export default Header;
