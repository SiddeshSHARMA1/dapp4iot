import axios from 'axios';

const url = 'http://localhost:3000';
export const isHyperledgerActive = async (cb) => {
    try {
        const response = await axios.get(url);
        cb(null, response)
    } catch (error) {
         cb(error, null)      
    }
}