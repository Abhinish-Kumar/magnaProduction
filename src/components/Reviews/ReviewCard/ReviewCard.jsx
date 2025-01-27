import "./ReviewCard.css"
function ReviewCard({color,para,person}) {
            return (
              <div className="reviewCard"  data-aos="fade-up">
                <p data-aos="zoom-in">
                 {para}
                </p>
                <p className="author">{person}</p>
              </div>
            );
          }
          
          export default ReviewCard;
          