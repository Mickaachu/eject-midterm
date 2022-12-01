import Image from "next/image"
import Button from "../components/Button"
import HeroSection from "../components/herosection"
import styles from "../styles/Contact.module.css"

export default function Contact() {
    return (
        <div>
          <HeroSection current='contact'/>
            
            <iframe className={styles.GMap} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61854.923469667105!2d120.93162992438013!3d14.315340935979354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d5c84cfd23a7%3A0x2fe4aaac204eee50!2sDasmarinas%20City%2C%20Cavite!5e0!3m2!1sen!2sph!4v1669753280276!5m2!1sen!2sph"></iframe>
            <div className={styles.ContactInfo}>
                <h2>Contact Us</h2>
                <p>You can contact us via phone, email, or form. We look forward to hearing from you and answering any questions you may have.</p>
                <form>
                    <input className={styles.Textboxes} type="text" id="FullName" name="FullName" placeholder="Name"></input>
                    <input className={styles.Textboxes} type="tel" id="Phone" name="Phone" placeholder="Phone"></input>
                    <input className={styles.Textboxes} type="email" id="Email" name="Email" placeholder="Email"></input>
                    <textarea className={styles.MessageBox} id="Message" name="Message" placeholder="Message"></textarea>
                </form>
                <button><Button variant='primary'>Send</Button></button>
            </div>
        </div >
    )
}