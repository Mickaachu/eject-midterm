import HeroSection from '../components/HeroSection';
import styles from '../styles/About.module.css';
import Image from 'next/image';
import Button from '../components/Button';
import ContactSection from '../components/ContactSection';
const about = () => {
  return (
    <div>
        <HeroSection current='about'/>
        <div className={styles.missionVision}>
          
          <div className={styles.mission}>
            <div className={styles.missionVisionIMG}>
              <Image src="/mission.png" width="96" height="96" />
            </div>
            <div>
              <h3>Mission</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem 
              </p>
            </div>
          </div>
          
          <div className={styles.vision}>
            <div className={styles.missionVisionIMG}>
              <Image src="/vision.png" width="96" height="96" />
            </div>
            <div>
              <h3>Vision</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem 
              </p>
            </div>
          </div>
        </div>
        <div className={styles.WhoWeAreContainer}>
          <div>
            <h2>WHO WE ARE</h2>
           
            <p>
            EJEC is a freelancing group that will satisfy your needs about Photography, Web Solutions, Graphic Design, Computer Services.
            <br/>
            We partnered with SHIRONEKO STUDIOS to develop and create more design that can satisfy your expectations.
            </p>
          </div>
          <Image src='/who.jpg' width='576' height='384' className={styles.who}/>
        </div>
          <div className={styles.OurTeamContainer}>
              <h1>OUR TEAM</h1>
              
              <div className={styles.members}>
                <div className={styles.card}>
                  <Image src='/worker1.png' width='320' height='359' className={styles.worker1}/>
                  <Button variant="primary" className={styles.button}>Learn More</Button>
                </div>
                <div className={styles.card}>
                  <Image src='/worker2.png' width='320' height='359' className={styles.worker2}/>
                  <Button variant="primary">Learn More</Button>
                </div>
                <div className={styles.card}>
                  <Image src='/worker3.png' width='320' height='359' className={styles.worker3}/>
                  <Button variant="primary">Learn More</Button>
                </div>
              </div>
              <div className={styles.members}>
               
              
                <div className={styles.card}>
                  <Image src='/worker4.png' width='320' height='359' className={styles.worker4}/>
                  <Button variant="primary">Learn More</Button>
                </div>
                <div className={styles.card}>
                  <Image src='/worker5.png' width='320' height='359' className={styles.worker5}/>
                  <Button variant="primary">Learn More</Button>
                </div>
              </div>
              
        </div>
        <ContactSection/>
    </div>
  )
}
export default about;