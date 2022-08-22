import InfoCard from "../components/InfoCard";

import { Button } from "antd";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

const Child= [{
    name: "Birsen",
    address: "0x9e5bF30a29560166fD47D461Dd1201a3bF56CEF4",
    age: 345200000,
    addr1: {
        eth: 10.2665,
        usd: 1026.65,
    },
    addr2: {
        eth: 20.365,
        usd: 244.38,
    },
},{
    name: "Murat",
address: "0x9e5bF30a29560166fD47D461Dd1201a3bF56CEF4",
age: 345200000,
addr1: {
    eth: 10.2665,
    usd: 1026.65,
},
addr2: {
    eth: 20.365,
    usd: 244.38,
},
},{
    name: "Mert",
address: "0x9e5bF30a29560166fD47D461Dd1201a3bF56CEF4",
age: 345200000,
addr1: {
    eth: 10.2665,
    usd: 1026.65,
},
addr2: {
    eth: 20.365,
    usd: 244.38,
},
},{ 
    name: "Ömer",
    address: "0x9e5bF30a29560166fD47D461Dd1201a3bF56CEF4",
    age: 345200000,
    addr1: {
        eth: 10.2665,
        usd: 1026.65,
    },
    addr2: {
        eth: 20.365,
        usd: 244.38,
    },
},{
    name: "Berkay",
    address: "0x9e5bF30a29560166fD47D461Dd1201a3bF56CEF4",
    age: 345200000,
    addr1: {
        eth: 10.2665,
        usd: 1026.65,
    },
    addr2: {
        eth: 20.365,
        usd: 244.38,
    },
},{
    name: "Berk",
    address: "0x9e5bF30a29560166fD47D461Dd1201a3bF56CEF4",
    age: 345200000,
    addr1: {
        eth: 10.2665,
        usd: 1026.65,
    },
    addr2: {
        eth: 20.365,
        usd: 244.38,
    },
},{
    name: "Ezgi",
    address: "0x9e5bF30a29560166fD47D461Dd1201a3bF56CEF4",
    age: 345200000,
    addr1: {
        eth: 10.2665,
        usd: 1026.65,
    },
    addr2: {
        eth: 20.365,
        usd: 244.38,
    },
},{
    name: "Eren",
    address: "0x9e5bF30a29560166fD47D461Dd1201a3bF56CEF4",
    age: 345200000,
    addr1: {
        eth: 10.2665,
        usd: 1026.65,
    },
    addr2: {
        eth: 20.365,
        usd: 244.38,
    },
},{
    name: "Ramazan",
    address: "0x9e5bF30a29560166fD47D461Dd1201a3bF56CEF4",
    age: 345200000,
    addr1: {
        eth: 10.2665,
        usd: 1026.65,
    },
    addr2: {
        eth: 20.365,
        usd: 244.38,
    },
},{
    name: "Beyza",
    address: "0x9e5bF30a29560166fD47D461Dd1201a3bF56CEF4",
    age: 345200000,
    addr1: {
        eth: 10.2665,
        usd: 1026.65,
    },
    addr2: {
        eth: 20.365,
        usd: 244.38,
    },
}];

const ParentDeposit=()=> {
    return <>
    <div style={{
        marginLeft: "12%",
        marginRight: "12%",
        marginTop: "1rem",
        display:"flex",
        justifyContent:"right"
    }}>
    <Button    >ÇOCUK EKLE</Button>
    </div>
    
     <div 
    style={{
        marginLeft: "12%",
        marginRight: "12%",
        marginTop: "5rem",
       
    }}
> 
        
        <Slider {...settings}> 
          
          {Child.map((child) => <div>
          <InfoCard person={child} buttons/> 
          </div>)}

          </Slider> 
        
    </div>
    </>



};
export default ParentDeposit;