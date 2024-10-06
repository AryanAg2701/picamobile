
import styles from './LandingPage.module.css';
import image1 from "./images/image1.png";
import image2 from './images/image2.svg';
import image3 from './images/image3.svg';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';
import image7 from './images/image7.png';
import image8 from './images/image8.svg';
import image9 from './images/image9.png';
import image9a from './images/image9(1).png';
import image9b from './images/image9(2).png';
import image10 from './images/image10.png';
import image11 from './images/image11.png';
import image12 from './images/image12.png';
import image12a from './images/image12(1).png';
import image12b from './images/image12(2).png';
import image13 from './images/image13.png';
import image13a from './images/image13(1).png';
import image13b from './images/image13(2).png';
import image14 from './images/image14.png';
import image15 from './images/image15.svg';
import image16 from './images/image16.png';
import image17 from './images/image17.svg';
import image18 from './images/image18.svg';
import image19 from './images/image19.svg';
import image20 from './images/image20.svg';
import image21 from './images/image21.png';
import image22 from './images/image22.svg';
import image23 from './images/image23.png';
import image24 from './images/image24.svg';
import image25 from './images/image25.png';
import image26 from './images/image26.png';
import image27 from './images/image27.svg';
import image28 from './images/image28.svg';
import image29 from './images/image29.svg';
import image30 from './images/image30.png';
import image31 from './images/image31.png';
import image32 from './images/image32.png';
import image32a from './images/image32(1).png';
import image33 from './images/image33.svg';
import image34 from './images/image34.svg';
import image35 from './images/image35.svg';
import image36 from './images/image36.svg';
import image37 from './images/image37.svg';
import image38 from "./images/image38.png";
import i1 from "./images/1.svg";
import i2 from "./images/2.svg";
import i3 from "./images/3.svg";
import dash from "./images/dashes.png";

function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src={image1} alt="Company logo" className={styles.logo} />
          <img src={image2}alt="Brand name" className={styles.brand} />
        </div>
        <img src="http://b.io/ext_37-" alt="User profile" className={styles.profile} />
      </header>

      <main>
        <section className={styles.hero}>
          <p className={styles.subtitle}>Save More with</p>
          <h1 className={styles.title}>Picapool</h1>
          <p className={styles.subtitle}>Pool offers for cabs, pizzas, clothes, and more...</p>
          <img src={image6}alt="Hero illustration" className={styles.img6} />
          <img src={image7}alt="Hero illustration" className={styles.img7} />

          <p className={styles.downloadText}>Download the App and start pooling :)</p>
          <div className={styles.appDownload}>
            <a href="#" className={styles.downloadButton}>
              <img src={image4}alt="Download on App Store" className={styles.downloadImage} />
            </a>
            <a href="#" className={styles.downloadButton}>
              <img src={image5} alt="Get it on Google Play" className={styles.downloadImage} />
            </a>
          </div>
        </section>

        <section className={styles.whyPicapool}>
        <img src={image8} alt="Get it on Google Play" className={styles.img8} />
          <h2 className={styles.sectionTitle}>

            <span className={styles.highlight}>Why</span> Picapool?
          </h2>
          <img src={image8} alt="Get it on Google Play" className={styles.img8} />
        </section>

        <section className={styles.featureSection}>
          <h2 className={styles.title}>Share a Ride and Save!</h2>
          <div className={styles.underline} />
          <p className={styles.description}>
            Share your journey, cut your costs! Find fellow travelers heading your way. Easily connect with others to split the fare and make commuting fun.
          </p><img src={image10}alt="Share a Ride and Save!" className={styles.img10} />
          <img src={image9}alt="Share a Ride and Save!" className={styles.img9} />
          <img src={image9a}alt="Share a Ride and Save!" className={styles.img9a} />
          <img src={image9b}alt="Share a Ride and Save!" className={styles.img9b} />

        </section>

        <section className={styles.featureSection}>
          <h2 className={styles.title}>Slice the Price of Your Pizza!</h2>
          <div className={styles.underline} />
          <p className={styles.description}>
            Double the toppings, half the price! Pool your pizza order and enjoy more. Team up with nearby pizza lovers for a delicious deal.
          </p>
          <img src={image11} alt="Slice the Price of Your Pizza!" className={styles.img11} />
            <img loading="lazy" src={image12} className={styles.img12} />
            <img loading="lazy" src={image12a} className={styles.img12a} />
            <img loading="lazy" src={image12b} className={styles.img12b} />
        </section>

        <section className={styles.featureSection}>
          <h2 className={styles.title}>Create Your Own Pool</h2>
          <div className={styles.underline} />
          <p className={styles.description}>
            Got a great deal? Snap a picture and find someone nearby to share it with. Whether it's a sale, a special offer, or a unique find, create a pool and enjoy the savings together.
          </p>
          
          <img src={image14} alt="Create Your Own Pool" className={styles.img14} />
            <img loading="lazy" src={image13} className={styles.img13} />
            <img loading="lazy" src={image13b} className={styles.img13b}/>
            <img loading="lazy" src={image13a} className={styles.img13a} />
        </section>

        <button className={styles.moreButton}>
          And many More
          <img src={image18} alt="" className={styles.img18} />
        </button>

        <h2 className={styles.howItWorksTitle}>
          <span className={styles.highlight}>How does it </span>Work?
        </h2>

        <div className={styles.howItWorksImages}>
          <img src="http://b.io/ext_43-" alt="Step 1" className={styles.stepImage} />
          <img src="http://b.io/ext_44-" alt="Step 2" className={styles.stepImage} />
          <img src="http://b.io/ext_45-" alt="Step 3" className={styles.stepImage} />
        </div>

        <section className={styles.videoGuide}>
          <h2 className={styles.title}>
            <span className={styles.highlight}>Video</span> Guide
          </h2>
          <div className={styles.videoWrapper}>
              <iframe loading="lazy" src="https://www.youtube.com/embed/VIDEO_ID"  className={styles.img26} ></iframe>

          </div>
        </section>

        <section className={styles.awardSection}>
          <img src={image27} alt="Award icon" className={styles.img27} />
          <h2 className={styles.title}>We are</h2>
          <h3 className={styles.subtitle}>
            <span>Suzuki</span> Innovation Bootcamp<span> Winner</span>
          </h3>
          <p className={styles.description}>
            Winning the Suzuki Innovation Bootcamp validated our unique approach. This prestigious recognition reinforced our belief in using technology to empower users. It showcased our potential to revolutionize traditional savings methods. Our innovative approach is now industry-recognized and celebrated.
          </p>
          <div className={styles.imageContainer}>
            <img src={image29} alt="Award illustration" className={styles.image29} />
            <p className={styles.imageCaption}>Relevant image</p>
          </div>
          <button className={styles.readMoreButton}>
            Read More
            <img src={image28} alt="" className={styles.img28} />
          </button>
        </section>

        <section className={styles.getStarted}>
          <h2 className={styles.title}>Get started with Picapool</h2>
          <p className={styles.subtitle}>Download the App Today and Start Saving!</p>
          <div className={styles.column13}>
            <img loading="lazy" src={image32} className={styles.img32} />
            <img loading="lazy" src={image32a} className={styles.img32a} />
          </div>
          <div className={styles.appDownload}>
            <a href="#" className={styles.downloadButton}>
              <img src={image30} alt="Download on App Store" className={styles.img30} />
            </a>
            <a href="#" className={styles.downloadButton}>
              <img src={image31}alt="Get it on Google Play" className={styles.img31} />
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.logoContainer}>
          <img src={image1} alt="Company logo" className={styles.logo} />
          <img src={image33} alt="Brand name" className={styles.brand} />
        </div>
        <p className={styles.slogan}>Redefining the Art of saving</p>
        <h3 className={styles.contactTitle}>Contact us!</h3>
        <div className={styles.contactInfo}>
          <p className={styles.phone}>
            <img src={image34} alt="" className={styles.img34} />
            +91 8917602924
          </p>
          <p className={styles.email}>
            <img src={image35} alt="" className={styles.img35} />
            pranadipan@picapool.com
          </p>
        </div>
        <h3 className={styles.followTitle}>Follow us!</h3>
        <div className={styles.socialIcons}>
          <a href="#" aria-label="Facebook">
            <img src={image36}alt="" className={styles.img36} />
          </a>
          <a href="#" aria-label="Twitter">
            <img src={image37} alt="" className={styles.img37} />
          </a>
          <a href="#" aria-label="Instagram">
            <img src= {image38}alt="" className={styles.img38} />
          </a>
        </div>
        <p className={styles.copyright}>
          © 2024 Picapool, Kandi, Sangareddy, Telangana, India. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
