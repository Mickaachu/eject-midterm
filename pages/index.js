import HeroSection from "../components/HeroSection";
import styles from '../styles/Home.module.css';
import CallToAction from '../components/CallToAction';
import ContactSection from "../components/ContactSection";
import Button from "../components/Button";
import Image from "next/image";
import ServiceSection from "../components/ServicesSection";

const Home = () => {
  return (
    <div className={styles.container}>
      <HeroSection/>
      <div className={styles.cards}>
        <div className={styles.card}>
          
          <h4>PLAN</h4>
          <p>
            We can create design and concept for you plan ideas
          </p>
        </div>
        <div className={styles.card}>
          <h4>BUILD</h4>
          <p>
            We bring your ideas into real world
          </p>
        </div>
        <div className={styles.card}>
          <h4>CONNECT</h4>
          <p>
            We can help you to connect your ideas and build them from scratch
          </p>
        </div>
      </div>
      <ServiceSection/>
      <div className={styles.whoWeAre}>
          <div>
            <h2>WHO WE ARE</h2>
            <p>
            EJEC is a freelancing group that will satisfy your needs about Photography, Web Solutions, Graphic Design, Computer Services.
            <br/>
            We partnered with SHIRONEKO STUDIOS to develop and create more design that can satisfy your expectations.
            </p>
            <Button>Learn more about us</Button>
          </div>
          <Image src='/who.jpg' width='576' height='384' className={styles.who}/>
      </div>
     
      <CallToAction/>
      <ContactSection/>
    </div>
  )
};
export default Home;