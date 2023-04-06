import { React, useEffect, useState, createContext } from "react";
// import Tapilmadi from "../components/Tapilmadi";
import { Spinner } from "react-bootstrap";
import axios from 'axios';
const movieContext = createContext();
function Datacontext({ children }) {
    const [cdata, setCdata] = useState();
    const [pass, setPass] = useState(false);
    useEffect(() => {
        async function fetchData() {
            axios.get('https://raw.githubusercontent.com/mirafgan/mirafgan-my-json-datas/main/movie.json')
                .then(result => {
                    setCdata(result.data);
                    setPass(true);
                }).catch(res => setPass(false))
        }
        if (!pass) fetchData();
    }, [pass])
    return (
        <>
            {pass ?
                <movieContext.Provider value={cdata} >
                    {children}
                </movieContext.Provider>
                : <div className="d-flex justify-content-center align-items-start vh-100"><Spinner /> </div>}
        </>

    )
}

export { movieContext, Datacontext };
