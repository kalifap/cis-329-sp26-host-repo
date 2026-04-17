import axios from 'axios';

const API = axios.create({}
    //baseURL: 'http://localhost:5000/api/appointment'
    baseURL: 'http://fictional-zebra-appointment-app.fly.dev',
    Headers: { 
        'Content-Type': 'application/json'
    }
});

export default API; 

