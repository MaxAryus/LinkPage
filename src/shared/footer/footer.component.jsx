import React from "react";

import "./../footer/footer.component.css";

const Footer = () => {
  return (
    <div className="container-fluid p-0 m-0">
      <div className="row">
        <div className="col-md-12">
          <div className="footer-copyright text-center py-3">
            <p className="m-0 mb-3">
              <a href="https://a-sites.de/impressum/">Impressum</a>
            </p>
            <p>
              © 2022 Copyright
              <a href="https://www.a-sites.de">
                <br />
                a-sites
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
