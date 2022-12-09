import styles from '../styles/ContactSection.module.css';
import Button from './Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactSection = () => {
    const notify = (event) => {
        event.preventDefault();
        toast(`

            Name :${event.target.name.value}
            Phone:${event.target.phone.value}
            Email:${event.target.email.value}
            Message:${event.target.message.value}
            
        `)
        
    }
    return (
        <div style={
            {
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center'
            }
        }>
             <iframe className={styles.Gmap} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61854.923469667105!2d120.93162992438013!3d14.315340935979354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d5c84cfd23a7%3A0x2fe4aaac204eee50!2sDasmarinas%20City%2C%20Cavite!5e0!3m2!1sen!2sph!4v1669753280276!5m2!1sen!2sph"></iframe>
             <div className={styles.ContactInfo}>
                <h2>Contact Us</h2>
                <p>You can contact us via phone, email, or form. We look forward to hearing from you and answering any questions you may have.</p>
                <form onSubmit={notify} method="POST">
                    <input  className={styles.Textboxes} type="text" id="name" name="name" placeholder="Name"></input>
                    <input className={styles.Textboxes} type="tel" id="phone" name="phone" placeholder="Phone"></input>
                    <input className={styles.Textboxes} type="email" id="email" name="email" placeholder="Email"></input>
                    <textarea className={styles.MessageBox} id="message" name="message" placeholder="Message"></textarea>
                    <Button variant='primary'>Send</Button>
                </form>
              
            </div>
        </div>
    )
}
export default ContactSection;