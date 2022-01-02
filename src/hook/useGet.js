import {useState,useEffect} from 'react'
import axios from 'axios'
export const useGet = (url) => {
    const [state, setState] = useState([]);
    const axiosGet = async () => {
        let  response = await axios.get(url);
        setState(response);
    };
    
    useEffect(() => {
        axiosGet();
      }, []);
      return [state,axiosGet]
    }