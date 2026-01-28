import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import {useState} from 'react';
export default function WeatherApp(){

    const [cityInfo,setCityInfo]=useState("")
    return <div>
        <SearchBox  setCityInfo={setCityInfo}/>
        <InfoBox cityInfo={cityInfo} setCityInfo={setCityInfo}/>
    </div>

}