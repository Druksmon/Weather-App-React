import './ImgCard.css'
import {useContext} from "react";
import ApiContext from "../Context/ApiContext";

const ImgCard = () => {

    const apiContext = useContext(ApiContext);
    const imgBack = apiContext.imgBackground;


    return (
        <>
            <div className="img-card">


            </div>
        </>
    )
}

export default ImgCard
