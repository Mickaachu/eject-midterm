import Link from 'next/link';
import styles from '../styles/HeroSection.module.css'
import Button from './Button';
const HeroSection = ({current}) => {
    let component;
    switch(current) {
        case 'about':
            component = 
            <div className={styles.containerabout}>
                <div className={styles.overlay} ></div>
                <h1 >About</h1>
            </div>
            break
        case 'careers' :
            component = 
            <div className={styles.containercareers}>
                <div className={styles.overlay} ></div>
                <h1 >Careers</h1>
            </div>
            break
        case 'services' :
            component = 
            <div className={styles.containerservices}>
                <div className={styles.overlay} ></div>
                <h1 >Services</h1>
            </div>
                break
        case 'contact':
            component = 
            <div className={styles.containercontact}>
                <div className={styles.overlay} ></div>
                <h1 >Contact</h1>
            </div>
            break
        default:
                component = 
                <div className={styles.containerHero}>
                    <div className={styles.overlay} >
                    </div>
                    <h1>Committed to People, Committed to the Future.</h1>
                    <h4>Plan.Build.Connect</h4>
                    <Button variant='primary'><Link href='/services'>Get Started Here</Link></Button>
                    
                </div>
    }       
    return component
}
export default HeroSection;