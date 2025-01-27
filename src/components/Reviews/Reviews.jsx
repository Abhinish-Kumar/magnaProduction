import Form from "../Home/Form/Form";
import "./Review.css";
import ReviewCard from "./ReviewCard/ReviewCard";

function Reviews() {
  let reviews = [
    {
      para: "The team at Magna Production Music absolutely smashed it at our wedding reception. They fully understood our style and music taste and we were very pleased with how everything turned out on the day! All the guests loved the music and our dance floor was packed all night! They surprised us with an amazing same-day video edit and displayed our photos so professionally and beautifully - you could tell a lot of thought and creativity went into it. They are absolute pros and we’re so happy we chose them for such an important event.",
      person: "Caroleena Bhojwani",
      color: "rgb(250 250 250)"
    },
    {
      para: "DJ MB from Magna Production Roadshow was the DJ for our wedding reception and did a fantastic job! No guest was left sitting in their seat once the music started. We had sent him a few suggestions of the type of music we would like at different points of the evening, and he truly understood the type of music we and our guests would enjoy and there wasn't a single dull moment on the dance floor! Their lighting and LED screens really enhanced our venue as well. The entire Magna Production team are friendly, professional, and truly experts at what they do. Thank you!",
      person: "Karum & Henna B",
      color: "rgb(240 206 209)"
    },
    {
      para: "What can we say but a massive thank you to Jas for making our wedding party truly unforgettable. Travelling out to Hungary to complete an Indian/Hungarian wedding where the couple live in England, and guests from all over the globe was not an easy brief but Jas, the Magna Production Team supported by Elite Drummers demonstrated why they are the cream of the crop when it comes to entertaining a crowd. Jas blended styles and genres to suit guests from all over the globe, transcending across cultural and language barriers and kept the dance floor packed all night. Jas took the time to research traditional Hungarian songs and classics that the home crowd would be familiar with too, extra details like that stand them out from the crowd. So many guests have given us feedback to say they’ve never been to a wedding where the music and entertainment was this good and Jas professionalism to work with a range of suppliers across different language barriers too makes life even easier. Jas continued to gauge our audiences' tastes throughout the night and ensured everyone went away with unforgettable memories. Highly recommend Magna Production and Jas for your wedding or event to make it unforgettable! Thanks again!!!",
      person: "Harmy Mattu",
      color: "rgb(125 170 185)"
    },
    {
      para: "Magna Production are the DJs YOU NEED FOR ALL EVENTS!! From the consultation all the way up to the event day, they were very professional and made it so easy to bring our vision to life! They did everything and we didn't have to worry about a thing! DJ Nilz was just outstanding! Went above and beyond! The night was unforgettable! DJ Nilz and the team were so full of energy and enthusiasm and that rubbed off on their audience, we couldn't have done it without them. Everyone loved the music from the grandparents to the youngsters. Tarran (Groom) absolutely loved the bass speakers! Hotel said they had never seen a wedding reception like it! it was amazing! The Vibe! Hosting! It was just remarkable! You guys smashed it out the park! You made not just our wedding reception an amazing night but all the preceding events leading up to it too! The wedding logo! the dance floor the whole setup looked amazing!",
      person: "Taran & Jashma",
      color: "rgb(240 206 209)"
    },
    {
      para: "Great service from Malkit and the Magna Production team for my wedding, would highly recommend! Guests commented on how good the staging looked as well as how good the set itself was!",
      person: "Kierendeep Dhaliwal",
      color: "rgb(250 250 250)"
    },
    {
      para: "The best decision we made was having Magna Production host our wedding. Taran and Amrit did an amazing job! From the atmosphere and energy they created on the Mic, to the Production and lighting, the music and mixing, and the sound, everything was on point. I've had so much positive feedback from guests! These guys don't just deliver, but they go the extra mile. A special thank you to Amrit who went above and beyond with his support and creativity ensuring that our visions turned into reality.",
      person: "Aaron Banger",
      color: "rgb(250 250 250)"
    },
  ];

  return (
    <>
      <div id="imageContainerAbout">
        <img src="https://i.pinimg.com/originals/4f/e4/72/4fe472a2f5bfef4ffaf88bdab31c8acf.jpg" alt="event image" style={{position:"relative"}} />
        <h2 className="slim-text">REVIEWS</h2>
      </div>
      <div id="contactAbout" data-aos="fade-up">
        <p>SPEAK TO US TODAY</p>
        <p>TE: +1 778 325 1800</p>
      </div>
      <div id="reviewCard">
        {reviews.map((obj, index) => {
          return (
            <ReviewCard key={index} color={obj.color} para={obj.para} person={obj.person} />
          );
        })}
      </div>
      <Form />
    </>
  );
}

export default Reviews;
