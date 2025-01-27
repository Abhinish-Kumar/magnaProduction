import "./Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div id="imageContainerAbout">
        <img
          src="https://th.bing.com/th/id/OIP.5Cw8mrHX8AUHI9K4oCJ7kQAAAA?rs=1&pid=ImgDetMain"
          alt="event image"
          data-aos="zoom-in"
        />
        <h2 className="slim-text">SERVICES</h2>
      </div>
      <div id="servicesBg">
        <div id="ServicesList">
          <Link to="/liveEvents">
            <div>
              <img
                src="https://infinitymediaproduction.com/uploads/3/4/7/1/34710004/img-0804_1_orig.jpg"
                alt="Live events"
              />
              <h2>Live Events</h2>
              <button>View Project &rarr;</button>
            </div>
          </Link>
          <Link to="/lightProduction">
            <div>
              <img
                src="https://technologywire.net/wp-content/uploads/2019/10/Equinox-led-wall-01.jpg"
                alt="Light production"
              />
              <h2>Light Production</h2>
              <button>View Project &rarr;</button>
            </div>
          </Link>
          <Link to="/danceFloor">
            <div>
              <img
                src="https://th.bing.com/th/id/OIP.KV7-L5GX5gkG2TAmT9OcOgHaE8?rs=1&pid=ImgDetMain"
                alt="Dance floor"
              />
              <h2>Dance Floor</h2>
              <button>View Project &rarr;</button>
            </div>
          </Link>
          <Link to="/ledWalls">
            <div>
              <img
                src="https://i.pinimg.com/originals/bb/12/61/bb1261a577231c9df189c749d4178ef7.jpg"
                alt="LED Walls"
              />
              <h2>LED Walls</h2>
              <button>View Project &rarr;</button>
            </div>
          </Link>
          <Link to="/baspakeStaging">
            <div>
              <img
                src="https://th.bing.com/th/id/OIP.YgutNuTVRiPJu3pGy2FJwAHaE7?rs=1&pid=ImgDetMain"
                alt="Bespoke Staging"
              />
              <h2>Bespoke Staging</h2>
              <button>View Project &rarr;</button>
            </div>
          </Link>
          <Link to="/Bars">
            <div>
              <img
                src="https://th.bing.com/th/id/OIP.sWxRxODqtvkK1s7uso-I1AAAAA?rs=1&pid=ImgDetMain"
                alt="Bespoke Bars"
              />
              <h2>Bespoke Bars</h2>
              <button>View Project &rarr;</button>
            </div>
          </Link>
        </div>
      </div>
      <div id="contactAbout"  style={{backgroundColor:"grey",marginBottom: "-2rem"}} >
<p >SPEAK TO US TODAY</p>
<p>TE:  +1 604 653 9000</p>
            </div>
    </>
  );
};

export default Services;
