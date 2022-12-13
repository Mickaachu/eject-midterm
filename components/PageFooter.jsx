import style from '../styles/Footer.module.css';
const PageFooter = () => {
    return(
        <div className={style.footerContainer}>
            <div className={style.container}>
                <div >
                    <img src="footerLogo.png"/>
                
                    <p>
                        EJEC IS A FREELANCING GROUP THAT CONSIST WITH FIVE(5) RESPECTFULLY MEMBERS THAT HAS DESIGNATED SPECIALTY AREAS.
                    </p>
                    <ul>
                        <li>
                            <img src="facebook.png" alt="" />
                        </li>
                        <li>
                            <img src="instagram.png" alt="" />
                        </li>
                        <li>
                            <img src="twitter.png" alt="" />
                        </li>
                        
                    </ul>
                </div>
                <div>
                    <h6>
                        Contact
                    </h6>
                    <ul>
                        <li>
                            ejectworkgroup@email.com
                        </li>
                        <li>
                            0912-345-6789
                        </li>
                        <li>(02)-1234-5678</li>
                    </ul>
                    <h6>In Partnership with</h6>
                    <img src="sn.png" alt="" />
                </div>
            </div>
            <div>
                <p>© EJEC 2022 | All Rights Reserved</p>
            </div>
            
        </div>
    )
}
export default PageFooter;
