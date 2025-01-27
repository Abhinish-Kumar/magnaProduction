import  { useState } from "react";
import video from "./video2.mp4"

function VideoCard() {
  // State to control whether the video modal is shown or not
  const [showVideo, setShowVideo] = useState(false);

  // Function to open the video modal
  const openVideo = () => {
    setShowVideo(true);
  };

  // Function to close the video modal
  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className="videoCard" >
      {/* Image Click triggers opening the video modal */}
      <a href="#" onClick={(e) => { e.preventDefault(); openVideo(); }}>
        <img
          src="https://events.enderuncolleges.com/wp-content/uploads/2019/03/image1-3.jpg"
          alt="Video Thumbnail"
        />
      </a>

      {/* Video modal */}
      {showVideo && (
        <div className="videoModal" style={modalStyles}>
          <div className="videoModalContent" style={modalContentStyles}>
            <button onClick={closeVideo} style={closeButtonStyles}>X</button>
            <video
              controls
              autoPlay
              style={videoStyles}
              onClick={closeVideo} // Close when clicking on the video
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

// Styling for modal
const modalStyles = {
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

const modalContentStyles = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const closeButtonStyles = {
  position: "absolute",
  top: 10,
  right: 10,
  backgroundColor: "transparent",
  border: "none",
  color: "white",
  fontSize: "20px",
  cursor: "pointer",
};

const videoStyles = {
  maxWidth: "100%",
  maxHeight: "90vh",
  objectFit: "contain",
};

export default VideoCard;
