
import { useLoaderData, useParams } from "react-router-dom";
import CatagoryCard from "./CatagoryCard";
import { useEffect } from "react";

const Catagorys = () => {
    const loaderData = useLoaderData();
    const { id } = useParams()
    return (
        <div>
           
               {id && <h1>the catagory length : {loaderData?.length}</h1>}

                    {
                        loaderData?.map(catagory => <CatagoryCard
                            key={catagory._id}
                            catagory={catagory}

                        ></CatagoryCard>)
                    }
               
           
        </div>
    );
};

export default Catagorys;