import React, {useEffect, useState} from "react";

const ApiContext = React.createContext()

export const ApiProvider = ({children}) => {

    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    const [imgBackground, setImgBackground] = useState(null);
    const description = data?.weather?.[0].main;


    let loader = true;

    if (imgBackground === null) {}
    else {
        loader = false
    }

    // CALL WAEATHER API
    const callApi = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=09acdfff4fba648aa7f8089f84811cd2`)
            .then(res => res.json())
            .then(res => setData(res))
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            callApi()
        }
    }

    // ADD BACKGROUND
    useEffect(() => {
        if (description === undefined
        ) {
        } else {
            const url = `https://source.unsplash.com/1920x1080/?${location}`
            setImgBackground(url)
        }
    }, [data]);


    // PREVENT UNDEFINED VALUES
    if (description === undefined) {
        loader = true
    } else {
    }

    return (
        <ApiContext.Provider value={{data, setLocation, callApi, handleKeyDown, imgBackground, loader}}>
            {children}
        </ApiContext.Provider>

    )
}

export default ApiContext

