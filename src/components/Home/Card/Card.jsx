
import "./Card.css"
function Card({imageUrl,textOne,textTwo}){
            return <div className="Card" data-aos="flip-left">
            <img src={imageUrl}/>
            <div>
                     <h2>{textOne}</h2>   
                     <h2>{textTwo}</h2>   
                    
            </div>
            </div>
}

export default Card;