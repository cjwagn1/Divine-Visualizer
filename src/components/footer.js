import React from "react";

import "../css/footer.css";

export const Footer = () => {
  return (
    <footer class="footer-basic-centered">
      <p class="footer-company-motto">Carter Wanger</p>

      <p class="footer-links">
        <a href="#">Portfolio Site</a> - <a href="#">GitHub</a> -{" "}
        <a href="#">Linkedin</a>
      </p>
    </footer>
  );
};

export default Footer;
