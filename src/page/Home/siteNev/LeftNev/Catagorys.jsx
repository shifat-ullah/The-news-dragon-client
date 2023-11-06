
import { useLoaderData, useParams } from "react-router-dom";
import CatagoryCard from "./CatagoryCard";
import { useEffect } from "react";

const Catagorys = () => {
    const loaderData = useLoaderData();
    
    console.log({loaderData})
    const { id } = useParams()
  const categoryNews = useLoaderData()
console.log({categoryNews,id})

    
    return (
        <div>
            {
                loaderData && <>
                    <h1>the catagory length : {loaderData?.length}</h1>

                    {
                        loaderData?.map(catagory => <CatagoryCard
                            key={catagory._id}
                            catagory={catagory}

                        ></CatagoryCard>)
                    }
                </>
            }
        </div>
    );
};

export default Catagorys;