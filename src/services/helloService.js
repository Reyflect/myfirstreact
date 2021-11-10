//npm install axios helps us call http calls
import httpCommon from "../commons/http-common";

const getHello = () =>{
    //gets the api hello
    return httpCommon.get('/hello');
}

export default {getHello};