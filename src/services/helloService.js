//npm install axios helps us call http calls
import httpCommon from "../commons/http-common";

const getHello = () =>{
    //gets the api hello
    return httpCommon.get('greet/hello');
}

const getHi = () =>{
    //gets the api hi
    return httpCommon.get('greet/hi');
}

export default {getHello, getHi};