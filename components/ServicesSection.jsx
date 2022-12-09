import styles from '../styles/ServicesSection.module.css';
import Link from 'next/link';
const ServiceSection = () => {
    return(
        <div className={styles.container}>
            <h2>OUR SERVICES</h2>
            <div className={styles.cards}>
                <Link href='/'>
                    <div className={styles.card1}>
                        <h4>Computer Services</h4>
                        <div className={styles.overlay}></div>
                    </div>
                </Link>
                <Link href='/'>
                    <div className={styles.card2}>
                        <h4>Graphic Designer</h4>
                        <div className={styles.overlay}></div>

                    </div>
                </Link>
                
                
            </div>
            <div className={styles.cards}>
                <Link href='/'>
                    <div className={styles.card3}>
                        <h4>Photography</h4>
                        <div className={styles.overlay}></div>

                    </div>
                </Link>
                
                <Link href='/'>
                    <div className={styles.card4}>
                        <h4>Web Solutions</h4>
                        <div className={styles.overlay}></div>

                    </div>
                </Link>
                
            </div>
        </div>
    )
}
export default ServiceSection;