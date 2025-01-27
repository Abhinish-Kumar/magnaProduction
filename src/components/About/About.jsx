import "./About.css"
import aboutImage from "./about.jpg"

function About() {
            return <>
            <div id="imageContainerAbout">
            <img src={aboutImage} alt="event image" data-aos="zoom-in"/>
            <h2 className="slim-text " >ABOUT US </h2>
            </div>
            <div id="contactAbout" >
<p >SPEAK TO US TODAY</p>
<p>TE:  +1 604 653 9000</p>
            </div>
            <div id="welcomeAbout">
    <p id="welcomeTitle" className="slim-text" data-aos="slide-right">WELCOME TO</p>
    <p id="mainTitle" className="slim-text" data-aos="slide-right">MAGNA PRODUCTION</p>
    <p id="tagline" data-aos="slide-right">Tried. Trusted. Inspired</p>
    
    <div className="blog-post"  data-aos="zoom-in">
        <p>Magna Production is a forward thinking and innovative AV Company. With over 30 years of experience in the forever changing and fast paced nature of the events and entertainments industry, we've always prided ourselves on delivering spectacular and high quality shows, whilst always keeping in mind the importance of outstanding customer service.</p>
    </div>
    
    <div className="blog-post " data-aos="zoom-in">
        <p>What started as a passion and two turntables has evolved into one of the most influential and
pioneering events and entertainment companies within its respected field. Established in 1986,
Paragon over the past 36 years has been trusted with

monumental events such as birthdays, weddings, fashion shows and celebratory corporate
functions. We try to make each and every one of our customers feel welcomed and at ease so they
that they can have the best experience possible when working with us.</p>
    </div>
    
    <div className="blog-post" data-aos="zoom-in">
        <p>As industry leaders our mission is to make our customers dreams a reality. Our experience, paired
with our exceptional staffing and trusted legacy, means customers can have complete confidence to
partner the success of their vision with us and our passion to deliver.</p>
    </div>
    
    <div className="blog-post" data-aos="zoom-in">
        <p>We are renowned for our award winning DJs and their undeniable talent and passion to cater
towards any event. This includes all backgrounds, cultures and purposes, no matter what it is, we've
got you covered! As a family run business, we cherish the importance of making memories that last a
lifetime. Our attention to detail and love for the industry makes us a standout choice for your big
event.</p>
    </div>
</div>

            </>;
          }
          
          export default About;
          