

function BesPokeStaging() {
            const lightServices = [
              {
                title: "Bespoke Staging",
                description: "Every client has a different vision and we try our absolute best to fulfil those visions to the best of our ability. Staging is a very integral part of the event process, without appropriate staging, clients can be restricted in what they’re able to do, staging also creates necessary height so that everyone knows where to look during those important presentations and announcements.",
                imageUrl: "https://www.microhire.com.au/wp-content/uploads/2017/01/vjp-5.jpg"
              },
              {
                title: "Custom Staging",
                description: "If you want a magical staircase leading to an important stage, we’ve got you covered. A high impact and sturdy runway stage did you say? No worries! Or maybe you want an elevated stage so your audience can see you, we can do that too. Staging is so important when looking at the display of brides a grooms, presenters, LED walls, light shows, bands, fashion shows and so much more, we’ve done it all!",
                imageUrl: "https://th.bing.com/th/id/OIP.VdfXjW7byeqEgIlcu1ubAgHaE8?rs=1&pid=ImgDetMain"
              }
             
            ];
          
            return (
              <>
                <div id="imageContainerAbout">
                  <img src="https://th.bing.com/th/id/OIP.s0VhtBwsAt-78cap347EtgHaE8?rs=1&pid=ImgDetMain" alt="event image" data-aos="zoom-in" />
                  <h2 className="slim-text">BESPOKE STAGING</h2>
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
          
          export default BesPokeStaging;
          