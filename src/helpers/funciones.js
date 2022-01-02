import {useState,useEffect} from 'react';
import axios from 'axios'

export const UnirAPI_PUBLIC_API_LOCAL = () => {
    const [state, setState] = useState([]);
    const axiosGet = async () => {
        let  responseA = await axios.get('https://apiliteflix.herokuapp.com/api/liteflix/movies');
        let  responseB = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20');
        const newresponseB = responseB.data?.results.map(b=>( {
                title:b.original_title,
                movie:`https://image.tmdb.org/t/p/w400${b.backdrop_path}`,
            }))


        setState([...responseA.data,...newresponseB ]);
    };
    
    useEffect(() => {
        axiosGet();
      }, []);

return state
}
