import { useEffect, useState } from "react";
import helloService from "../services/helloService"


const Hello = () =>{
    //Function hooks
    const[hello, setHello] = useState("Walang API, pasensya ka na godbless")
    
    //usestate
    //hooks
    useEffect(()=>{
        helloService.getHello() //promise
        .then(
            response => {
                setHello(response.data);
            }    
        )
        .catch(
            () =>{
                console.log("something went wrong")
            }
        )
    }
    
    )
    return hello;
}

const Hi = () =>{
    const[hi, setHi] = useState([])
    useEffect(()=>{
        helloService.getHi()
        .then(
        response => {
            setHi(response.data);
        }    
        )
    }
    
    )
    return hi;
}


export default Hello;
