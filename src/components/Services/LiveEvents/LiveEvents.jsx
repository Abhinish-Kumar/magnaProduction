import { useState } from "react";
import video from "./video2.mp4"
import "./LiveEvents.css"; // Make sure to keep your existing CSS styling

const LiveEvents = () => {
            const eventData = [
                        {
                          title: "Lorem Event 1",
                          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio quos ipsam placeat ratione, suscipit perferendis nam saepe! Blanditiis, aperiam?",
                          videoUrl: video, // Replace with your actual video paths
                          imageUrl: "https://th.bing.com/th/id/OIP.V2isBE4Pbji-IPWg4fPKfgHaFj?rs=1&pid=ImgDetMain" // Replace with the image URL
                        },
                        {
                          title: "Lorem Event 2",
                          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio quos ipsam placeat ratione, suscipit perferendis nam saepe! Blanditiis, aperiam?",
                          videoUrl: video,
                          imageUrl: "https://th.bing.com/th/id/OIP.W2giC8TjletygTa_fV67_AHaE8?rs=1&pid=ImgDetMain" // Replace with the image URL
                        },
                        {
                          title: "Lorem Event 3",
                          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio quos ipsam placeat ratione, suscipit perferendis nam saepe! Blanditiis, aperiam?",
                          videoUrl: video,
                          imageUrl: "https://th.bing.com/th/id/OIP.NBqak85nyXgS6zh4GB-nTAHaE8?w=900&h=601&rs=1&pid=ImgDetMain" // Replace with the image URL
                        },
                        {
                          title: "Lorem Event 4",
                          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio quos ipsam placeat ratione, suscipit perferendis nam saepe! Blanditiis, aperiam?",
                          videoUrl: video,
                          imageUrl: "https://th.bing.com/th/id/OIP.HIWttgMKq9m-8SGEbo-7eAHaE8?w=940&h=628&rs=1&pid=ImgDetMain" // Replace with the image URL
                        },
                        {
                          title: "Lorem Event 5",
                          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio quos ipsam placeat ratione, suscipit perferendis nam saepe! Blanditiis, aperiam?",
                          videoUrl: video,
                          imageUrl: "https://thumbs.dreamstime.com/b/exit-music-festival-david-gueta-main-stage-novi-sad-july-crowd-front-gig-july-novi-sad-petrovaradin-fortress-83293484.jpg" // Replace with the image URL
                        },
                        {
                          title: "Lorem Event 6",
                          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio quos ipsam placeat ratione, suscipit perferendis nam saepe! Blanditiis, aperiam?",
                          videoUrl: video,
                          imageUrl: "https://th.bing.com/th/id/OIP.lk4z1O9op667AGcCHcHUQAHaE8?w=1000&h=667&rs=1&pid=ImgDetMain" // Replace with the image URL
                        }
                      ];
                      

  const [showVideo, setShowVideo] = useState(false);
  const [videoSource, setVideoSource] = useState(null);

  const openVideo = (videoUrl) => {
    setVideoSource(videoUrl);
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
    setVideoSource(null);
  };

  return (
    <div id="events">
      <div id="liveEventHeader">
        <h1>Live Events</h1>
        <h2>Take a look at our spectacular LED WALL EVENTS</h2>
      </div>

      <div id="liveEvent">
  {eventData.map((event, index) => (
    <div className={`eventWrapper ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
      <div className="eventImage">
        <a href="#" onClick={(e) => { e.preventDefault(); openVideo(event.videoUrl); }}>
          {/* Use the dynamic image URL from event.imageUrl */}
          <img src={event.imageUrl} alt={event.title} />
          <div className="playIcon">&#9658;</div>
        </a>
      </div>
      <div className="eventContent">
        <h2>{event.title}</h2>
        {/* <p>{event.description}</p> */}
      </div>
    </div>
  ))}
</div>

      {/* Video Modal */}
      {showVideo && (
        <div className="videoModal" style={modalStyless}>
          <div className="videoModalContent" style={modalContentStyless}>
            <button onClick={closeVideo} className="closeButton" style={closeButtonStyless}>X</button>
            <video controls autoPlay style={videoStyless}>
              <source src={videoSource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

// Styling for modal
const modalStyless = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const modalContentStyless = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const closeButtonStyless = {
  position: "absolute",
  top: 20,
  right: 20,
  backgroundColor: "transparent",
  border: "none",
  color: "white",
  fontSize: "30px",
  cursor: "pointer",
  zIndex: 1000,
};

const videoStyless = {
  maxWidth: "100%",
  maxHeight: "90vh",
  objectFit: "contain",
};

export default LiveEvents;
