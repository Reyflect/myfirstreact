import { useEffect, useState } from "react";
import rastamanService from "../services/rastamanService";


const Rasta = () =>{
    const[rastaman, setRastaman] = useState([])
    useEffect(()=>{
        rastamanService.getRastaman()
        .then(
        response => {
            setRastaman(response.data);
        }    
        )
    }
    
    )
    return rastaman;
}


export default Rasta;