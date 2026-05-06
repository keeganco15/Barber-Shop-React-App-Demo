import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div id="author-container">
        <a href="https://github.com/keeganco15" target="_blank">
          @keeganco15 2026
        </a>
      </div>
      <div id="privacy-container">
        <p>Privacy</p>
        <p>Terms</p>
      </div>
      <div id="socials-book-container">
        <a href="https://instagram.com" target="_blank">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://x.com" target="_blank">
          <FontAwesomeIcon icon={faXTwitter} size="2x" />
        </a>
        <a href="https://tiktok.com" target="_blank">
          <FontAwesomeIcon icon={faTiktok} size="2x" />
        </a>
        <a href="#">Book Now</a>
      </div>
    </footer>
  );
}

export default Footer;
