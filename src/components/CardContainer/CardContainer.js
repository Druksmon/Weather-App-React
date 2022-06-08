import {useContext} from "react";
import './CardContainer.css'
import DataCard from "../DataCard/DataCard";
import ImgCard from "../ImgCard/ImgCard";

import ApiContext from "../Context/ApiContext";

const CardContainer = () => {

    const apiContext = useContext(ApiContext);

    const cityName = apiContext.data?.name;
    const countryName = apiContext.data.sys?.country;
    const loader = apiContext.loader;

    return (
        <div className='card-container'>
            {
                loader ?
                    <h4>Insert a city </h4>
                    :
                    <h4>{`${cityName}, ${countryName}`}</h4>
            }

            <div className="card-grid">
                <DataCard/>
                {/*<ImgCard/>*/}
            </div>

        </div>
    )
}

export default CardContainer