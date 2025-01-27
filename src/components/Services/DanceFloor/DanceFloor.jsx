import "./DanceFloor.css";

function DanceFloor() {
  const lightServices = [
    {
      title: "Dance Floors",
      description: "The dancefloor is the heart of any event. We offer seamless, high-quality dancefloors in various shapes and designs, tailored to fit your venue and create a perfect space for celebration.",
      imageUrl: "https://www.microhire.com.au/wp-content/uploads/2017/01/vjp-5.jpg"
    },
    {
      title: "High Gloss Floors",
      description: "Elegant high gloss floors with a flawless finish, using heavy-duty panels and precision fitting. Available in black, white, and other colors upon request.",
      imageUrl: "https://th.bing.com/th/id/OIP.VdfXjW7byeqEgIlcu1ubAgHaE8?rs=1&pid=ImgDetMain"
    },
    {
      title: "High Shine Mirror Floors",
      description: "Shiny mirrored floors in silver, gold, and rose gold create a stunning effect by reflecting light, adding a WOW factor to your event.",
      imageUrl: "https://th.bing.com/th/id/R.fd56bd7558b1e32a040b89fb406a45e7?rik=dqluT4FUjSyjjg&riu=http%3a%2f%2fwww.lightmotif.co.uk%2fwp-content%2fuploads%2f2015%2f11%2fLMotifStonewall1500-109.jpg&ehk=UUdI2%2b6FnaVRrdfI0wFeDBGPwmaKkBr7LX%2bOC1cRRtU%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      title: "Bespoke Painted Floors",
      description: "We turn your ideas into custom printed dancefloors, bringing your unique design or logo to life with a personal touch for your event.",
      imageUrl: "https://th.bing.com/th/id/OIP.MNn4MHJFBHwie9MtglbsQQHaE8?rs=1&pid=ImgDetMain"
    },
    {
      title: "Dancefloor Decal",
      description: "Personalize your event with custom decals on your dancefloor, from logos to initials, crafted by our in-house designer to add a unique touch.",
      imageUrl: "https://th.bing.com/th/id/R.1a0431770e26b04181f1d021509aaaea?rik=yrVrKIKkt7fHIw&riu=http%3a%2f%2fdesignedeventproduction-tsnd.temp-dns.com%2fwp-content%2fuploads%2f2020%2f01%2fawards-lighting.jpg&ehk=FWddYt9DsCc1kdT47%2bmEyLm7Ost9DWtmtw%2fMVeddfQ0%3d&risl=&pid=ImgRaw&r=0"
    }
  ];
  
  return (
    <>
      <div id="imageContainerAbout">
        <img src="https://th.bing.com/th/id/OIP.s0VhtBwsAt-78cap347EtgHaE8?rs=1&pid=ImgDetMain" alt="event image" data-aos="zoom-in" />
        <h2 className="slim-text">Dance Floor</h2>
      </div>
      <div id="lightProductionCOntainer">
        {lightServices.map((service, index) => (
          <div className="lightServices" key={index}>
            <div data-aos="slide-right">
              <p>{service.title}</p>
              <p>{service.description}</p>
            </div>
            <div>
              <img src={service.imageUrl} alt={service.title} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DanceFloor;
