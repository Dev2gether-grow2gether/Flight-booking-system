import React, {useEffect, useState} from 'react'
import Header from '../../components/headerComponent/Header'
import Rooms from '../../components/roomComponent/Rooms'
// import SearchBarform from '../../components/SearchBarform';
import "./home.css"
import {useNavigate} from "react-router-dom";
// import Footer from '../../components/foot/Footer'
// import "../../components/roombanner/roombanner.css"
// import channel1 from "../../assets/images/channel1.png";
// import searchIcon from "../../../coolicons.v2.5/coolicons v2.5 SVG/edit/search.svg"
export default function Home({children}) {
    const navigate = useNavigate()
    const [currentTab, setCurrentTab] = useState("ongoing")
    const [data, setData] = useState()
    useEffect(() => {
        fetch("/mockdata/rooms.json")
            .then(res => res.json())
            .then(data => setData(data[currentTab]))
    }, [currentTab])

    return (
        <div id='home-page'>
            <Header tabs={["ongoing", "upcoming"]} setTab={setCurrentTab} currentTab={currentTab}/>
            <section id='rooms-list'>
                {data?.map((data, index) => <Rooms details={data} key={index}
                                                   click={() => navigate("/room_space")}/>)}
            </section>
            {children}
        </div>
    )
}
