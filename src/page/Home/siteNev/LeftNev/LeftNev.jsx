import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navber from "../../../shared/navber/Navber";

const LeftNev = () => {
    
    const [catagorys, setCatagorys]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/catagory')
        .then(res => res.json())
        .then(data=> setCatagorys(data))
    },[])
    return (
        <div className="mt-2">
            <h2 className="w-75 px-3 ">National News</h2>

            <div className="px-4">
                {
                    catagorys.map(catagory => <div key={catagory.id}> 

                            <Link to={`/catagory/ ${catagory.id}`} className=""><p>{catagory.name}</p></Link>

                    </div>)
                }
            </div>
        </div>
    );
};

export default LeftNev;