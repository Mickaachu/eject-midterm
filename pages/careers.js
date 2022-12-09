import { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import Image from 'next/image';
import Button from '../components/Button';
import styles from '../styles/Career.module.css'
import CallToAction from '../components/CallToAction';
const Careers = () => {
    const [data,setData]=useState([]);
    const [search, setSearch] = useState('')
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  const truncate = (str,n) =>{
    return (str.length > n) ? str.slice(0, n-1) + '...' : str;
  }
    return(
        <div>
            <HeroSection current='careers'/>
            <div className={styles.joinTeamContainer}>
              <Image src='/Vector.png' width='1017' height='616' className={styles.vector}/>
              <Image src='/JoinNow.jpg' width='576' height='384' className={styles.joinnow}/>
              <div>
                <h2>JOIN OUR TEAM</h2>
                <p>
                  Join our team to gain experience and explore the digital space
                <br/>
                  We gladly hire and help you with your career. In Ejec you can develop your skills and gain more knowledge.
                </p>
                <Button variant='primary'> See Job Openings</Button>
              </div>
            </div>
            <CallToAction/>
            <div className={styles.jobs} >
              <form>
                <input onChange={(e) => setSearch(e.target.value)} placeholder='Search Position'/>
              </form>
              <ul>
              {
                  data.filter((item) =>{
                    return search.toLocaleLowerCase() === "" 
                    ? item :
                    item.position.toLocaleLowerCase().includes(search);
                  })
                  .map((item)=>
                  <li key={item.id}>
                    <div>
                      <h4>{item.position}</h4>
                      
                      <p>{truncate(item.about,250)}</p>
                    </div>
                    <Button variant='primary'>Learn More</Button>
                  </li>
                )
               
              }
              </ul>
            </div>
        </div>
    )
}
export default Careers;