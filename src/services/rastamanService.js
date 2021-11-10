import httpCommon from "../commons/http-common";

const getRastaman = () =>{
    return httpCommon.get('/rastaman');
}

export default {getRastaman};