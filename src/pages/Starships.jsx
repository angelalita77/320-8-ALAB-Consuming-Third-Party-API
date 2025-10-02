import axios from 'axios';
import { useState, useEffect } from 'react';
import Starship from '../components/Starship';



export default function Starships(){

    const [data, setData] = useState(null);

    let urlStr = 'https://swapi.info/api/starships'

    async function getData(urlStr){
        try {
            let res = await axios.get(urlStr);

            let data = res.data;

            data.length =10;

        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        async function getData(){
            try {
                let res = await axios.get(urlStr);

                res.data.length = 10;

                setData(res.data);

            } catch (err) {
                console.error(err.message);
            }
        }
        getData();

    }, []);

    let loading = () => {return <h1>Loading. . .</h1>};

    let loaded = () => data.map((per, i) => {
        return <Starship key={i}{...per} />;
    });

    return data ? <h1>{loaded()}</h1> : <h1>{loading()}</h1>

}