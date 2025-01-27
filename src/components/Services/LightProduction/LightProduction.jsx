import "./LightProduction.css";

function LightProduction() {
  const lightServices = [
    {
      title: "Lighting Production",
      description: "Lighting sets the atmosphere and complements your theme. We specialize in custom lighting shows using Avolites-certified technicians to ensure perfect synchronization and safety.",
      imageUrl: "https://www.microhire.com.au/wp-content/uploads/2017/01/vjp-5.jpg"
    },
    {
      title: "Ceiling Rigged Lighting",
      description: "Two truss lines with 22 fixtures each are mounted to the ceiling, creating an immersive atmosphere throughout the room for your event.",
      imageUrl: "https://th.bing.com/th/id/OIP.VdfXjW7byeqEgIlcu1ubAgHaE8?rs=1&pid=ImgDetMain"
    },
    {
      title: "Ground Rigged Lighting",
      description: "Ideal for venues without ceiling rigging points, this setup uses four truss pillars with 22 fixtures to create an immersive light experience.",
      imageUrl: "https://th.bing.com/th/id/R.fd56bd7558b1e32a040b89fb406a45e7?rik=dqluT4FUjSyjjg&riu=http%3a%2f%2fwww.lightmotif.co.uk%2fwp-content%2fuploads%2f2015%2f11%2fLMotifStonewall1500-109.jpg&ehk=UUdI2%2b6FnaVRrdfI0wFeDBGPwmaKkBr7LX%2bOC1cRRtU%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      title: "Wall Lighting",
      description: "Wall lighting paired with dynamic shows adds intensity and a rock star vibe, amplifying your event atmosphere.",
      imageUrl: "https://th.bing.com/th/id/OIP.MNn4MHJFBHwie9MtglbsQQHaE8?rs=1&pid=ImgDetMain"
    },
    {
      title: "Mood Lighting",
      description: "Wireless Up-Lighting changes the venue's color, while Projection Mapping creates magical visual effects or personalized projections to match your theme.",
      imageUrl: "https://th.bing.com/th/id/R.1a0431770e26b04181f1d021509aaaea?rik=yrVrKIKkt7fHIw&riu=http%3a%2f%2fdesignedeventproduction-tsnd.temp-dns.com%2fwp-content%2fuploads%2f2020%2f01%2fawards-lighting.jpg&ehk=FWddYt9DsCc1kdT47%2bmEyLm7Ost9DWtmtw%2fMVeddfQ0%3d&risl=&pid=ImgRaw&r=0"
    }
  ];
  

  return (
    <>
      <div id="imageContainerAbout">
        <img src="https://hire4event.com/blogs/wp-content/uploads/2020/01/LED-Lights.jpg" alt="event image" data-aos="zoom-in" />
        <h2 className="slim-text">Light Production</h2>
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

export default LightProduction;
