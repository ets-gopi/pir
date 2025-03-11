import React from "react";
import certificatesStyles from "./certificate.module.css";

import certificatesData from "./certificatesInfo";
import CertificateItem from "./certificateItem";

const CertificatePage = () => {
  return (
    <React.Fragment>
      <section id="certificates" className={certificatesStyles.certificates}>
        <header>
          <h2>Certificates</h2>
          <div>
            <div></div>
          </div>
        </header>
        <div id={certificatesStyles.certificatesContainer}>
          {certificatesData.map((obj, ind) => {
            return (
              <div className={certificatesStyles.certificatesItem} key={obj.id}>
                <CertificateItem title={obj.title} link={obj.links[0]} />
              </div>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

export default CertificatePage;
