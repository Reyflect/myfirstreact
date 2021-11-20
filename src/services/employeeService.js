import httpCommon from "../commons/http-common";


const getEmployees = () =>{
    //gets the api hi
    return httpCommon.get('employee/employees');
}

export default {getEmployees};