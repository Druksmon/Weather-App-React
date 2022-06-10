import React, {useEffect, useState} from "react";

const ApiContext = React.createContext()

export const ApiProvider = ({children}) => {

    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    const [imgBackground, setImgBackground] = useState(null);
    const description = data?.weather?.[0].description;
    const icon = data?.weather?.[0].icon;


    let loader = true;

    if (imgBackground === null) {
    } else {
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

    // DYNAMICS BACKGROUNDS
    useEffect(() => {

        let Random = Math.floor(Math.random() * 5);

        if (icon === '01d') {
            const urls =
                ['https://images.unsplash.com/photo-1464278533981-50106e6176b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
                    'https://images.unsplash.com/photo-1614945762401-cd723ad19cd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1520283440659-4438f9c38d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1617141870574-82529c331676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1627759929352-e4ad6ff6d55e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80']
            const url = urls[Random]
            setImgBackground(url)
        } else if (icon === '01n') {
            const urls =
                ['https://images.unsplash.com/photo-1618244627800-aa353e26161c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1554172707-db85d0ac78e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1609609018625-afef0a259159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80',
                    'https://images.unsplash.com/photo-1632660608666-95b815300785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1482977254323-bdef035f8cdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80']
            const url = urls[Random]
            setImgBackground(url)
        } else if (icon === '02d') {
            const urls =
                ['https://images.unsplash.com/photo-1438045809872-34a58ff469f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1998&q=80',
                    'https://images.unsplash.com/photo-1437936251057-dfbf79980ce5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
                    'https://images.unsplash.com/photo-1531171047414-9f2cdc733755?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1506409192306-b368ff0c21eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1464014161740-a4ee1bf0fda6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80']
            const url = urls[Random]
            setImgBackground(url)
        } else if (icon === '02n') {
            const urls =
                ['https://images.unsplash.com/photo-1536183922588-166604504d5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
                    'https://images.unsplash.com/photo-1612928644160-fd93db72c626?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1501418611786-e29f9929fe03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1516166328576-82e16a127024?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1623770091923-b82bddc67fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80']
            const url = urls[Random]
            setImgBackground(url)
        } else if (icon === '03d') {
            const urls =
                ['https://images.unsplash.com/photo-1545278003-7155f8b66fce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1536543411350-41e735c940cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
                    'https://images.unsplash.com/photo-1566010503302-2564ae0d47b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1469365556835-3da3db4c253b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1444090542259-0af8fa96557e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80']
            const url = urls[Random]
            setImgBackground(url)
        } else if (icon === '03n') {
            const urls =
                ['https://images.unsplash.com/photo-1526052480487-251361aad2df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1994&q=80',
                    'https://images.unsplash.com/photo-1612928644160-fd93db72c626?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1501418611786-e29f9929fe03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1516166328576-82e16a127024?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1623770091923-b82bddc67fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80']
            const url = urls[Random]
            setImgBackground(url)
        } else if (icon === '04d') {
            const urls =
                ['https://images.unsplash.com/photo-1599372477648-bc918851435b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1463136536204-685cfa574ab1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1506409192306-b368ff0c21eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1464014161740-a4ee1bf0fda6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1455492240783-79edeb7ce981?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80']
            const url = urls[Random]
            setImgBackground(url)
        } else if (icon === '04n') {
            const urls =
                ['https://images.unsplash.com/photo-1533139834943-68d51caa47a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
                    'https://images.unsplash.com/photo-1517051737587-4bbb98deb1d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
                    'https://images.unsplash.com/photo-1510744470296-be3d387becb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
                    'https://images.unsplash.com/photo-1534862559316-6579e3b7872a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1341&q=80',
                    'https://images.unsplash.com/photo-1511529499252-e93a6b3ffc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80']
            const url = urls[Random]
            setImgBackground(url)
        } else if (icon === '09d') {
            const urls =
                ['https://images.unsplash.com/photo-1521167849934-a9ce4b45f8ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
                    'https://images.unsplash.com/photo-1485797460056-2310c82d1213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1494824789449-08323153c06e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1578653375662-433063752195?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1487762488615-8a011458b53e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80']
            const url = urls[Random]
            setImgBackground(url)
        } else if (icon === '09n') {
            const urls =
                ['https://images.unsplash.com/photo-1501999635878-71cb5379c2d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80',
                    'https://images.unsplash.com/photo-1493314894560-5c412a56c17c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1470432581262-e7880e8fe79a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
                    'https://images.unsplash.com/photo-1624756683696-a31aaec3ee9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
                    'https://images.unsplash.com/photo-1542675159-7b70debb940d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80']
            const url = urls[Random]
            setImgBackground(url)
        } else if (icon === '10d') {
            const urls =
                ['https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1534265854528-0c270f95e0d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
                    'https://images.unsplash.com/photo-1520888993487-5c620eef2205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1507301346373-5b3793bfdfe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1524813445246-21c59abc2517?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80']
            const url = urls[Random]
            setImgBackground(url)
        } else if (icon === '10n') {
            const urls =
                ['https://images.unsplash.com/photo-1596032855412-169ab090dd8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1617869763329-8e8160d32adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1549839731-9652aa56a8cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
                    'https://images.unsplash.com/photo-1536424868245-13b715e11e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1634358615550-a592353e8a36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80']
            const url = urls[Random]
            setImgBackground(url)
        } else if (icon === '11d') {
            const urls =
                ['https://images.unsplash.com/photo-1525897174292-dbe24620b264?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1629800537338-6a082a7aac0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1561266322-ccd177d44cff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80',
                    'https://images.unsplash.com/photo-1631780736179-8e232248bd5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80',
                    'https://images.unsplash.com/photo-1601835378164-dba53431626c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80']
            const url = urls[Random]
            setImgBackground(url)
        } else if (icon === '11n') {
            const urls =
                ['https://images.unsplash.com/photo-1587228270638-2c0ac062c01a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1564343921421-e163972db735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1532974594335-7f1b5d39da93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1636929115482-803b3a721bbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80']
            const url = urls[Random]
            setImgBackground(url)
        } else if (icon === '13d') {
            const urls =
                ['https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1208&q=80',
                    'https://images.unsplash.com/photo-1487383298905-ee8a6b373ff9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1518984211165-a6c9abed630f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
                    'https://images.unsplash.com/photo-1581196607303-95c00f31c676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80']
            const url = urls[Random]
            setImgBackground(url)
        } else if (icon === '13n') {
            const urls =
                ['https://images.unsplash.com/photo-1519552928909-67ca7aef9265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
                    'https://images.unsplash.com/photo-1642510029235-5e0a70c32feb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1560567322-911e17465686?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1520479447767-57476b084b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1517147177326-b37599372b73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1146&q=80']
            const url = urls[Random]
            setImgBackground(url)
        } else if (icon === '50d') {
            const urls =
                ['https://images.unsplash.com/photo-1543968996-ee822b8176ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80',
                    'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
                    'https://images.unsplash.com/photo-1525891618908-24765267dab7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1512923927402-a9867a68180e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1560996025-95b43d543770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80']
            const url = urls[Random]
            setImgBackground(url)
        } else if (icon === '50n') {
            const urls =
                ['https://images.unsplash.com/photo-1505672450728-f972162ebeae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
                    'https://images.unsplash.com/photo-1578254457810-0abd1efb0b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
                    'https://images.unsplash.com/photo-1577695965660-04ded73735fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    'https://images.unsplash.com/photo-1578450284501-fd68f3a79282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
                    'https://images.unsplash.com/photo-1641296769166-b08a0db087fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80']
            const url = urls[Random]
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

