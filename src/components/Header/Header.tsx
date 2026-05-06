import "./Header.css";

function Header() {
  return (
    <header>
      <div id="logo-container">
        <p>
          <span style={{ color: "#e79e17" }}>Barber</span>Shop
        </p>
      </div>
      <nav id="header-nav">
        <ul>
          <li>
            <a href="#landing-hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#">Book</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
