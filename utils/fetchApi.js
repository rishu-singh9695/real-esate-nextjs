import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '8ae857c875mshb5400bdc65f1a42p12adb3jsn38d0411c6330',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });
    return data;

}