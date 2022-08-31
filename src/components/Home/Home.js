import {useContext} from "react";
import './Home.css'
import CardContainer from "../CardContainer/CardContainer";
import defaultBackground from "../../images/background.jpg"
import arrows from "../../images/three-dots.svg"

import ApiContext from "../Context/ApiContext";

const Home = () => {

    const apiContext = useContext(ApiContext);
    const handleKeyDown = apiContext.handleKeyDown;
    let imgBack;

    const loader = apiContext.loader;

    if (loader === true) {
        imgBack = defaultBackground;
    } else {
        imgBack = apiContext.imgBackground
    }

    return (
        <div className='container-home'>

            <img src={imgBack} alt="background" className='dynamic-background-home'/>

            <div className="container-title">
                <div className="box-title">
                    <h1> Weather <br/>
                        <span>app</span>
                    </h1>
                </div>
                {/*<div className="custom-shape-divider-bottom-1653861607">*/}
                {/*    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"*/}
                {/*         preserveAspectRatio="none">*/}
                {/*        <path*/}
                {/*            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"*/}
                {/*            className="shape-fill"*/}
                {/*        />*/}
                {/*    </svg>*/}
                {/*</div>*/}
            </div>
            <div className="container-data">
                <div className="search-box">
                    <h3>Search</h3>
                    <input type='text' onChange={event => apiContext.setLocation(event.target.value)}
                           onKeyDown={handleKeyDown}
                           placeholder=' Search'/>
                    <div>
                        <button onClick={apiContext.callApi}>Search</button>
                        {loader && (<img className='home-loader' src={arrows} alt=""/>)}
                    </div>

                </div>

                <CardContainer/>

            </div>
        </div>
    )
}

export default Home