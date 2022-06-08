import {useContext} from "react";
import './DataCard.css'
import cloudsIcon from "../../images/CLOUDS_ICON.png"

import ApiContext from "../Context/ApiContext";

const DataCard = () => {

    const apiContext = useContext(ApiContext);
    const loader = apiContext.loader;

    return (
        <div className="data-card">
            <div className="principal-data">
                {
                    loader ?
                        <div>
                            <h1>22°</h1>
                            <p>Clouds</p>
                        </div>
                        :
                        <div>
                            <h1>{`${apiContext.data.main?.temp}`}°</h1>
                            <p>{apiContext.data?.weather?.[0].description}</p>
                        </div>
                }
                <div className='icon-data-box'>
                    {
                        loader ?
                            <img src={cloudsIcon}
                                 alt="icon"/>
                            :
                            <img src={`http://openweathermap.org/img/wn/${apiContext.data?.weather?.[0].icon}@2x.png`}
                                 alt="icon"/>
                    }
                </div>
            </div>
            <div className="extra-data">
                <div className="feels-like">{apiContext.data.main?.feels_like} <p>Feels Like</p></div>
                <div className="wind">{apiContext.data?.wind?.speed} <p>MPH Wind</p></div>
                <div className="humidity">{apiContext.data.main?.humidity}<p>Humidity</p></div>
            </div>
        </div>

    )
}

export default DataCard