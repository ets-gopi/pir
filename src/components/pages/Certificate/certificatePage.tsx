import React from "react";
import certificatesStyles from "./certificate.module.css";

import certificatesData from "./certificatesInfo";
import CertificateItem from "./certificateItem";
import DefaultSectionHeader from "../DefaultSectionHeader/defaultSectionHeader";

const CertificatePage = () => {
  return (
    <React.Fragment>
      <section id="certificates" className={certificatesStyles.certificates}>
        <DefaultSectionHeader value="Certificates" />
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
