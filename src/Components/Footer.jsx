import React from "react";
import { useEstadosGlobalesContext } from "./utils/global.context";

const Footer = () => {
  const { theme } = useEstadosGlobalesContext();
  return (
    <footer className={theme.color}>
      <p>Powered by</p>
      <img src="./images/DH.png" alt="DH-logo" />
      <img src="./images/ico-facebook.png" alt="Facebook-logo" class="socialNetwork" />
      <img src="./images/ico-instagram.png" alt="Instagram-logo" class="socialNetwork" />
      <img src="./images/ico-tiktok.png" alt="Tiktok-logo" class="socialNetwork" />
      <img src="./images/ico-whatsapp.png" alt="Whatsapp-logo" class="socialNetwork" />
    </footer>
  );
};

export default Footer;
