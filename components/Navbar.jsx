import Link from 'next/link'
import { useEffect, useState } from 'react';
import style from "../styles/Navbar.module.css"
const Navbar = () => {
    const [windowHeight, setWindowHeight] = useState("");
    const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);

    const scrollHandler = () => {
        setWindowHeight(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler)
    });
    useEffect(() => {
        let varTransparacy = windowHeight/240;
        setBackgroundTransparacy(varTransparacy)
    }, [windowHeight]);
    return(
        <div 
        style={
            {
                background:`rgb(255,255,255,${backgroundTransparacy})`,
                color: '#000',
                position: 'fixed',
                top: '0',
                width:'100%',
                padding: '10px 50px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'

            }
        }>
            <Link href="/">
                <img src="logo.png" alt="EJEC"/>
                
            </Link>
            <div
             style={
                {
                    display:'flex',
                    gap: '40px',
                    fontSize: '18px'
                }
            }>
                <Link href="/">
                    Home
                </Link>
                <Link href="/careers">
                    Careers
                </Link>
                <Link href="/about">
                    About
                </Link>
                <Link href="/services">
                    Services
                </Link>
                <Link href="/contact">
                    Contact
                </Link>
                
            </div>
        </div>
    )
};
export default Navbar;
