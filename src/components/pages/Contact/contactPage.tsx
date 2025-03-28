import React from 'react';
import contactPageStyles from './contact.module.css';
import Button from '../../Buttons/button';
const ContactPage = () => {
    return (
        <React.Fragment>
            <section id="contact" className={contactPageStyles.contact}>
                <div>
                    <header>04.What&rsquo;s Next?</header>
                    <h2>Get In Touch </h2>
                    <p>
                        Although I&rsquo;m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or
                        just want to say hi, I&rsquo;ll try my best to get back to you!
                    </p>
                    <div>
                        {/* url :https://forms.gle/nJFTGzK8AwnjaCka7 */}
                        <Button value="Say Hello" href="https://forms.gle/nJFTGzK8AwnjaCka7" />
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default ContactPage;
