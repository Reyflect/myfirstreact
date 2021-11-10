//connects to api
import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:8080/api/v1/greet',
    headers: {
        'Content-Type': 'application/json'
    }
})