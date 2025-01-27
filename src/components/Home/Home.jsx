import "./Home.css"
import Mlogo from "../Images/Magna_logo.png";
import Video from "../Videos/bgVideo.mp4";
import imageUrl from "./Card/CardImages/R1.jpg";
import imageUrl2 from "./Card/CardImages/R2.jpg";
import imageUrl3 from "./Card/CardImages/R3.jpg";
import imageUrl4 from "./Card/CardImages/R4.jpg";
import imageUrl5 from "./Card/CardImages/R5.jpg";
import Card from "./Card/Card"
import SplitScreen from "./SplitScreen/Split";
import VideoCard from "./VideosCard/VideoCard";
import StarRating from "./StarRating/StarRating";
import Form from "./Form/Form"
import {Link} from "react-router-dom";

function Home() {
  return <>
 
<div id="video">
<img src={Mlogo} alt="videoLogo" data-aos="fade-up"/>
 
  <video src={Video} autoPlay loop muted/>
  </div>
  <div id="imageContainer">
   
   
  <Card imageUrl={imageUrl} textOne="DJ" textTwo="PACKAGES"/>
  <Link to="/lightProduction">
  <Card imageUrl={imageUrl2} textOne="LIGHTING" textTwo="PRODUCTION"/>
  </Link>
  <Link to="/baspakeStaging">
  <Card imageUrl={imageUrl3} textOne="BESPOKE" textTwo="STAGING"/>
  </Link>
  

 
  <Card imageUrl={imageUrl4} textOne="MEET" textTwo="THE TEAM"/>
  <Link to="/danceFloor">
  <Card imageUrl={imageUrl5} textOne="DANCE" textTwo="FLOORS"/>
  </Link>
  <Link to="/Bars">
  <Card imageUrl={imageUrl} textOne="BESPOKE" textTwo="BARS"/>
  </Link>
 
  </div>
 <SplitScreen/>
 <div id="videos" >
 <VideoCard/>
 <VideoCard/>
 <VideoCard/>
 <VideoCard/>
 <VideoCard/>
 <VideoCard/>
 </div>

 <div id="callUs">
  <p>CALL US +1 778 325 1800</p>
 </div>
 <StarRating/>
 <Form/>
  </>
}

export default Home;
