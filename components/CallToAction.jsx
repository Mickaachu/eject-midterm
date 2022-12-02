import Button from "./Button";
import Link from "next/link";
import styles from "../styles/CallToAction.module.css"
const CallToAction = () => {
  return (
    <div className={styles.container}>
        <div className={styles.overlay}></div>
        <div className={styles.ctacontent}>
            <h3>
                Learn more about us
            </h3>
            <h5>
                Learn how we connect people throught our services
            </h5>
            
        </div>
        <div className={styles.ctacontent}>
            <Button variant='primary' ><Link href='/contact'>Contact Us</Link></Button>
        </div>
       

    </div>
  )
}

export default CallToAction