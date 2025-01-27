

function LedWalls() {
  const lightServices = [
    {
      title: "LED Walls",
      description: "LED walls offer stunning custom displays of static and moving images with crystal-clear UHD resolution. They come in various sizes and shapes, allowing you to create the perfect show for your event.",
      imageUrl: "https://www.microhire.com.au/wp-content/uploads/2017/01/vjp-5.jpg"
    },
    {
      title: "Sizes",
      description: "We provide LED walls in a wide range of sizes, from 4x2 meters to custom dimensions, all with high-quality finishes and personalized graphics.",
      imageUrl: "https://th.bing.com/th/id/OIP.VdfXjW7byeqEgIlcu1ubAgHaE8?rs=1&pid=ImgDetMain"
    },
    {
      title: "Design",
      description: "Create unique effects with split screens, or even add interactive moving images for a truly immersive experience. Customize the design to match your vision.",
      imageUrl: "https://th.bing.com/th/id/R.fd56bd7558b1e32a040b89fb406a45e7?rik=dqluT4FUjSyjjg&riu=http%3a%2f%2fwww.lightmotif.co.uk%2fwp-content%2fuploads%2f2015%2f11%2fLMotifStonewall1500-109.jpg&ehk=UUdI2%2b6FnaVRrdfI0wFeDBGPwmaKkBr7LX%2bOC1cRRtU%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      title: "Shape",
      description: "Get creative with customized LED panels and CNC cut-outs to mix static fixtures with dynamic graphics. We can even integrate screens into unique locations, like bars.",
      imageUrl: "https://th.bing.com/th/id/OIP.MNn4MHJFBHwie9MtglbsQQHaE8?rs=1&pid=ImgDetMain"
    }
  ];
  
  return (
    <>
      <div id="imageContainerAbout">
        <img src="https://th.bing.com/th/id/OIP.s0VhtBwsAt-78cap347EtgHaE8?rs=1&pid=ImgDetMain" alt="event image" data-aos="zoom-in" />
        <h2 className="slim-text">LED WALLS</h2>
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

export default LedWalls;
