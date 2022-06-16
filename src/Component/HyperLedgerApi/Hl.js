import axios from 'axios';

const url = 'http://localhost:5000';
export const isHyperledgerActive = async (cb) => {
    try {
        const response = await axios.get(url + '/isActive', {headers: {
            'Access-Control-Allow-Origin': '*'
        }});
        console.log(response);
        cb(null, response)
    } catch (error) {
         cb(error, null)      
    }
}