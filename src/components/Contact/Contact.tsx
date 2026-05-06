import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <section id="contact">
      <div id="contact-container">
        <h2>Get in touch with us...</h2>
        <div id="main-contact-container">
          <p>email@email.com</p>
          <p>07778466362</p>
        </div>
        <div id="socials-container">
          <a href="https://instagram.com" target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://x.com" target="_blank">
            <FontAwesomeIcon icon={faXTwitter} size="2x" />
          </a>
          <a href="https://tiktok.com" target="_blank">
            <FontAwesomeIcon icon={faTiktok} size="2x" />
          </a>
        </div>
        <div id="review-container">
          <h3>Leave us a review!</h3>
          <a href="https://trustpilot.com" target="_blank">
            Trustpilot
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
