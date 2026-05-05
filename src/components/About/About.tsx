import "./About.css";
import { useState } from "react";
import aboutUsImg from "./../../assets/about-us-img.jpg";
import hairStylingImg from "./../../assets/hair-styling-img.avif";
import hairColorImg from "./../../assets/hair-color-img.png";
import shavingImg from "./../../assets/shaving-img.jpg";
import trimmingImg from "./../../assets/trimming-img.jpg";
import skinCareImg from "./../../assets/skin-care-img.png";
import beardImg from "./../../assets/beard-img.png";
import johnImg from "./../../assets/john-img.jpeg";
import paulImg from "./../../assets/paul-img.avif";
import billImg from "./../../assets/bill-img.jpg";
import locationImg from "./../../assets/location-img.png";

function About() {
  const [activeTab, setActiveTab] = useState("about-us");

  function renderContent() {
    switch (activeTab) {
      case "about-us":
        return (
          <div className="slide" id="about-us-container">
            <div
              id="about-us-img-container"
              style={{ width: "40%", height: "40%" }}
            >
              <img
                src={aboutUsImg}
                alt="Barber with a full beard wearing a gray shirt and cap carefully trims a customer's beard in a modern salon."
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div
              id="about-us-info-container"
              style={{ width: "50%", height: "50%" }}
            >
              <h2
                style={{
                  margin: "0",
                  fontSize: "2rem",
                  lineHeight: "0.8",
                  color: "var(--color-active)",
                }}
              >
                the best barber shop
              </h2>
              <p
                style={{
                  margin: "2rem 0rem",
                  fontSize: "1.2rem",
                  textAlign: "justify",
                  textJustify: "inter-word",
                }}
              >
                At Barber Shop, we believe a great haircut is more than just a
                service, it’s an experience. Our master barbers combine
                traditional techniques with modern styles to ensure you walk out
                looking and feeling your absolute best. From precision fades and
                sharp beard trims to classic hot towel shaves, we take pride in
                the details that set us apart. Step into our relaxed, welcoming
                environment, grab a seat, and let us handle the rest.
              </p>
              <div
                id="about-us-ratings-container"
                style={{ display: "flex", flexDirection: "row", gap: "4rem" }}
              >
                <p>
                  <span style={{ fontSize: "2rem" }}>
                    <span style={{ color: "var(--color-active)" }}>4.5</span>/5
                  </span>
                  <br></br> on trustpilot
                </p>
                <p>
                  <span style={{ fontSize: "2rem" }}>
                    20<span style={{ color: "var(--color-active)" }}>+</span>
                  </span>
                  <br></br>
                  years experience
                </p>
              </div>
            </div>
          </div>
        );
      case "prices":
        return (
          <div>
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              offering the
              <span style={{ color: "var(--color-active)" }}>best prices</span>
            </h2>
            <div className="slide" id="prices-container">
              <div className="prices-panel-container">
                <article className="price-item">
                  <div className="prices-img-container">
                    <img
                      src={hairStylingImg}
                      alt="Man having his hair styled by a barber"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="prices-info-container">
                    <h3>Hair Styling</h3>
                    <p>£20</p>
                  </div>
                </article>
                <article className="price-item">
                  <div className="prices-img-container">
                    <img
                      src={shavingImg}
                      alt="Man having shaving cream applied to his face by a barber"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="prices-info-container">
                    <h3>Shaving</h3>
                    <p>£10</p>
                  </div>
                </article>
                <article className="price-item">
                  <div className="prices-img-container">
                    <img
                      src={skinCareImg}
                      alt="Man about to have a skin care product applied to his face by a barber"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="prices-info-container">
                    <h3>Skin Care</h3>
                    <p>£15</p>
                  </div>
                </article>
              </div>
              <div className="prices-panel-container">
                <article className="price-item">
                  <div className="prices-img-container">
                    <img
                      src={trimmingImg}
                      alt="Man having his hair trimmed by a barber"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="prices-info-container">
                    <h3>Trimming</h3>
                    <p>£15</p>
                  </div>
                </article>
                <article className="price-item">
                  <div className="prices-img-container">
                    <img
                      src={hairColorImg}
                      alt="Man having his hair colored by a barber"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="prices-info-container">
                    <h3>Hair Color</h3>
                    <p>£25</p>
                  </div>
                </article>
                <article className="price-item">
                  <div className="prices-img-container">
                    <img
                      src={beardImg}
                      alt="Man having his beard trimmed by barber"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="prices-info-container">
                    <h3>Beard</h3>
                    <p>£15</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        );
      case "team":
        return (
          <div className="slide">
            <div id="team-container">
              <article className="team-card-container">
                <div className="team-card-img-container">
                  <img
                    src={johnImg}
                    alt="portrait of John with a focused look"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <h3 style={{ color: "var(--color-active" }}>John</h3>
                <p>
                  John brings over 10 years of experience in traditional and
                  modern barbering. He specialises in precision fades, classic
                  scissor cuts, and clean beard shaping. Known for consistency
                  and attention to detail, John focuses on delivering sharp,
                  reliable results every time.
                </p>
              </article>
              <article className="team-card-container">
                <div className="team-card-img-container">
                  <img
                    src={paulImg}
                    alt="portrait of Paul with a focused look"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <h3 style={{ color: "var(--color-active" }}>Paul</h3>
                <p>
                  Paul focuses on contemporary styles, including textured cuts,
                  skin fades, and hair styling. He keeps up with current trends
                  and works closely with clients to find a look that suits their
                  hair type and lifestyle. Strong on both technique and finish.
                </p>
              </article>
              <article className="team-card-container">
                <div className="team-card-img-container">
                  <img
                    src={billImg}
                    alt="portrait of Bill with a focused look"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <h3 style={{ color: "var(--color-active" }}>Bill</h3>
                <p>
                  Bill specialises in beard work, hot towel shaves, and full
                  grooming services. With a background in traditional barbering,
                  he prioritises clean lines and proper skin care. Ideal for
                  clients looking for a polished, well-maintained look.
                </p>
              </article>
            </div>
          </div>
        );
      case "location":
        return (
          <div className="slide">
            <article id="location-container">
              <div id="location-img-container">
                <img
                  src={locationImg}
                  alt="google maps image of barber shop location"
                />
              </div>
              <div id="location-info-container">
                <h3
                  style={{
                    lineHeight: "1",
                    fontSize: "1.5rem",
                    color: "var(--color-active)",
                    margin: "0",
                  }}
                >
                  where to find us...
                </h3>
                <p>
                  42 Fake Street <br></br>Madeupwich<br></br>Nowhereshire
                  <br></br>LOL1 1AB<br></br>United Kingdom
                </p>
              </div>
            </article>
          </div>
        );
      default:
        return null;
    }
  }
  return (
    <section id="about" className="about-section">
      <div id="about-container">
        <div id="about-nav">
          <button
            onClick={() => setActiveTab("about-us")}
            className={activeTab === "about-us" ? "active" : ""}
          >
            About us
          </button>
          <button
            onClick={() => setActiveTab("prices")}
            className={activeTab === "prices" ? "active" : ""}
          >
            Prices
          </button>
          <button
            onClick={() => setActiveTab("team")}
            className={activeTab === "team" ? "active" : ""}
          >
            Team
          </button>
          <button
            onClick={() => setActiveTab("location")}
            className={activeTab === "location" ? "active" : ""}
          >
            Location
          </button>
        </div>

        <hr style={{ width: "30%" }}></hr>

        <div id="about-content">{renderContent()}</div>
      </div>
    </section>
  );
}

export default About;
