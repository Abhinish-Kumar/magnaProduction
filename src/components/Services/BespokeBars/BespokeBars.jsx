

function BesPokeBars() {
            const lightServices = [
              {
                title: "Lighting Production",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis obcaecati magnam ipsam id cumque numquam soluta culpa harum explicabo. Amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis obcaecati magnam ipsam id cumque numquam soluta culpa harum explicabo. Amet.",
                imageUrl: "https://www.microhire.com.au/wp-content/uploads/2017/01/vjp-5.jpg"
              },
              {
                title: "Lighting Production",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis obcaecati magnam ipsam id cumque numquam soluta culpa harum explicabo. Amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis obcaecati magnam ipsam id cumque numquam soluta culpa harum explicabo. Amet.",
                imageUrl: "https://th.bing.com/th/id/OIP.VdfXjW7byeqEgIlcu1ubAgHaE8?rs=1&pid=ImgDetMain"
              },
              {
                title: "Lighting Production",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis obcaecati magnam ipsam id cumque numquam soluta culpa harum explicabo. Amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis obcaecati magnam ipsam id cumque numquam soluta culpa harum explicabo. Amet.",
                imageUrl: "https://th.bing.com/th/id/R.fd56bd7558b1e32a040b89fb406a45e7?rik=dqluT4FUjSyjjg&riu=http%3a%2f%2fwww.lightmotif.co.uk%2fwp-content%2fuploads%2f2015%2f11%2fLMotifStonewall1500-109.jpg&ehk=UUdI2%2b6FnaVRrdfI0wFeDBGPwmaKkBr7LX%2bOC1cRRtU%3d&risl=&pid=ImgRaw&r=0"
              },
              {
                title: "Lighting Production",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis obcaecati magnam ipsam id cumque numquam soluta culpa harum explicabo. Amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis obcaecati magnam ipsam id cumque numquam soluta culpa harum explicabo. Amet.",
                imageUrl: "https://th.bing.com/th/id/OIP.MNn4MHJFBHwie9MtglbsQQHaE8?rs=1&pid=ImgDetMain"
              },
              {
                title: "Lighting Production",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis obcaecati magnam ipsam id cumque numquam soluta culpa harum explicabo. Amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis obcaecati magnam ipsam id cumque numquam soluta culpa harum explicabo. Amet.",
                imageUrl: "https://th.bing.com/th/id/R.1a0431770e26b04181f1d021509aaaea?rik=yrVrKIKkt7fHIw&riu=http%3a%2f%2fdesignedeventproduction-tsnd.temp-dns.com%2fwp-content%2fuploads%2f2020%2f01%2fawards-lighting.jpg&ehk=FWddYt9DsCc1kdT47%2bmEyLm7Ost9DWtmtw%2fMVeddfQ0%3d&risl=&pid=ImgRaw&r=0"
              }
            ];
          
            return (
              <>
                <div id="imageContainerAbout">
                  <img src="https://th.bing.com/th/id/OIP.s0VhtBwsAt-78cap347EtgHaE8?rs=1&pid=ImgDetMain" alt="event image" data-aos="zoom-in" />
                  <h2 className="slim-text">BARS</h2>
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
          
          export default BesPokeBars;
          