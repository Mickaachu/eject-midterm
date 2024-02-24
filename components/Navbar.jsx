import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import styling from '../styles/BurgerMenu.module.css';
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
    var styles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          right: '36px',
          top: '25px'
        },
        bmBurgerBars: {
          background: '#000000'
        },
        bmBurgerBarsHover: {
          background: '#5F0D65'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%'
        },
        bmMenu: {
          background: '#5F0D65',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em',
          
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#b8b7ad',
          padding: '0.5em'
        },
        bmItem :{
            paddingTop: '10px'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      }
    
    return(
        <div>
            <div  
            style={{
                background:`rgb(255,255,255,${backgroundTransparacy})`,
                color: '#000',
                position: 'fixed',
                top: '0',
                width:'100%',
                zIndex:'1000',
                
                

            }}>
                <div style={
                        {
                            display:'flex',
                            justifyContent:'space-between',
                            width:'100%',
                            padding: '10px 50px',
                            
                            alignItems: 'center',
                        }
                    }>
                    <Link href="/">
                       <Image src="/Logo.png" alt="EJEC"/>
                        
                    </Link>
                    <div 
                         className='hidden md:flex gap-8'
                    >
                        <Link href="/">
                            Home
                        </Link>
                        <Link href="/careers">
                            Careers
                        </Link>
                        <Link href="/about">
                            About
                        </Link>
                        
                        <Link href="/contact">
                            Contact
                        </Link>
                        
                    </div>
                </div>
               
                    
            
            </div>
             <div className='flex md:hidden'>
                    <Menu width={258} right styles={styles} >
                        <Link href="/" >
                            Home
                        </Link>
                        <Link href="/careers">
                            Careers
                        </Link>
                        <Link href="/about">
                            About
                        </Link>
                       
                        <Link href="/contact">
                            Contact
                        </Link>
                    </Menu>
                </div>
        </div>
    )
};
export default Navbar;
