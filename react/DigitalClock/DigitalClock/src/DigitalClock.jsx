import { useState, useEffect } from "react"

function DigitalClock() {

    const [time, settime] = useState(new Date());

    useEffect(() => {
        const interValid = setInterval(() => {
            settime(new Date());
        }, 1000);

        // return () => {
        //     clearInterval(interValid);
        // }
    }, []);

    function formatTime() {
        let hour = time.getHours();
        const min = time.getMinutes();
        const sec = time.getSeconds();
        const merdien = hour>=12? "PM":"AM";

        return `${Zero(hour)} : ${Zero(min)} : ${Zero(sec)} ${merdien}`
    }

    function Zero(number){
        if(number<10){
            return `0${number}`
        }
        else{
            return `${number}`
        }
    }

    return (
        <div className="clock_con">
            <div className="clock">
                <span>{formatTime()}</span>
                {/* <span> 00 : 00 : 00</span> */}
            </div>
        </div>
    );

}
export default DigitalClock