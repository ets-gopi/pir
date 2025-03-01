import React from "react";
import contactPageStyles from "./contact.module.css";
import Button from "../../Buttons/button";
const ContactPage = () => {
  return (
    <React.Fragment>
      <section id="contact" className={contactPageStyles.contact}>
        <div>
          <header>04.What&rsquo;s Next?</header>

          <h2>Get In Touch </h2>
          <p>
            Although I&rsquo;m not currently looking for any new opportunities,{" "}
            <br />
            my inbox is always open. Whether you have a question or just want to
            <br />
            say hi, I&rsquo;ll try my best to get back to you!
          </p>
          <div>
            <Button value="Say Hello" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactPage;
