import React,{useState,useEffect} from 'react'
import { Corporate } from './corporate/corporate'

import "./plan.css"
import { PriceCard } from './plans-cards/planCards'
export default function Plan(props) {
  const [bundlesData, setBundlesData] = useState([]);
  const [selectedMagazine, setSelectedMagazine] = useState(1);
  const [info,setinfo]=useState([]);
  //text
  const [txt1,settxt1] = useState('');
  const [txt2,settxt2] = useState('');
  const [txt3,settxt3] = useState('');
  //price
    const[price1,setprice1] = useState('');
    const[price2,setprice2] = useState('');
    const[price3,setprice3] = useState('');
  //bullets
    const[bullet1,setbullet1]=useState('');
    const[bullet2,setbullet2]=useState('');
    const[bullet3,setbullet3]=useState('');  
    //info
    const[id1,setid1]=useState('');
    const[id2,setid2]=useState('');
    const[id3,setid3]=useState(''); 


    const handleMagazineSelect = (selectedMagazine) => {
      // Do something with the selected magazine
      setSelectedMagazine(selectedMagazine);
      const iconicBundle = info.find((item) => item.name === "imurs iconic" && item.perMagazine === selectedMagazine);
      const impressionBundle = info.find((item) => item.name === "imurs impression" && item.perMagazine === selectedMagazine);
      const idylicBundle =info.find((item) => item.name === "imurs idylic" && item.perMagazine === selectedMagazine);
      
      if (iconicBundle) {
        settxt1(iconicBundle.discription);
        setprice1(iconicBundle.price);
        setbullet1(iconicBundle.bullets)
        setid1(iconicBundle._id)
      }

      if (impressionBundle) {
        settxt2(impressionBundle.discription);
        setprice2(impressionBundle.price)
        setbullet2(impressionBundle.bullets);
        setid2(impressionBundle._id)
      }
      if (impressionBundle) {
        settxt3(idylicBundle.discription);
        setprice3(idylicBundle.price);
        setbullet3(idylicBundle.bullets);
        setid3(idylicBundle._id)
      }

      
    };



  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL +"api/b2bpricing")
      .then((response) => response.json())
      .then((data) => {

      console.log(process.env.REACT_APP_API_URL +"/api/b2bpricing",data)

        const iconicBundles = data.pricingData.filter((item) => item.name === "imurs iconic");
        const perMagazineValues = iconicBundles.map((bundle) => bundle.perMagazine);
        const sortedPerMagazineValues = perMagazineValues.sort((a, b) => a - b);
        setBundlesData(sortedPerMagazineValues);
        setinfo(data.pricingData);
        const iconicBundle = data.pricingData.find((item) => item.name === "imurs iconic" && item.perMagazine === selectedMagazine);
        const impressionBundle = data.pricingData.find((item) => item.name === "imurs impression" && item.perMagazine === selectedMagazine);
        const idylicBundle =data.pricingData.find((item) => item.name === "imurs idylic" && item.perMagazine === selectedMagazine);
        
        if (iconicBundle) {
          settxt1(iconicBundle.discription);
          setprice1('-');
          setbullet1(iconicBundle.bullets)
          setid1(iconicBundle._id)
        }
  
        if (impressionBundle) {
          settxt2(impressionBundle.discription);
          setprice2('-')
          setbullet2(impressionBundle.bullets);
          setid2(iconicBundle._id)
        }
        if (impressionBundle) {
          settxt3(idylicBundle.discription);
          setprice3('-');
          setbullet3(idylicBundle.bullets);
          setid3(iconicBundle._id)
        }
       
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);



  return (
    <div className='body'>
    <div className="plan-corporate" style={{display:"flex",justifyContent:"center"}}>   <Corporate bundles={bundlesData} onMagazineSelect={handleMagazineSelect} /></div>
    <div className="plan-cards-flex">
  {selectedMagazine ? (
    <>
      <PriceCard out="outerstar.png" in="innerstar.png" text="Iconic" description={txt1} price={price1} bullets={bullet1}   id={id1} value={props.value}/>
      <PriceCard out="sun.png" in="transparent" text="Impression" cardColor="var(--persian-red)" description={txt2} price={price2} bullets={bullet2} id={id2} value={props.value}/>
      <PriceCard out="newstar.png" in="transparent" text="Idyllic" description={txt3} price={price3} bullets={bullet3} id={id3} value={props.value} />
    </>
  ) : null}
</div>

    </div>
  )
}

/*<PriceCard out="outerstar.png" in="innerstar.png" text="Iconic" cardColor="#3c3c3c" flexmargin="12rem"/>
    <PriceCard out="sun.png" in="transparent" text="Impression" cardColor= "var(--persian-red)" flexmargin="4rem"/>
    <PriceCard out="newstar.png" in="transparent" text="Idyllic" cardColor="#3c3c3c" flexmargin="12rem" />*/