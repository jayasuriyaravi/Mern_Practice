import { useState,useEffect } from "react"

function DigitalClock(){

    const [time, settime] = useState(new Date());

    useEffect(() => {
        const interValid = setInterval(() => {
            settime(new Date());
        }, 1000);

        return () => {
            clearInterval(interValid);
        }
    }, []);

    function formatTime() {
        let hour = time.getHours;
        const min = time.getMinutes;
        const sec = time.getSeconds;

        return `${hour} : ${min} :${sec}`
    }

    return(
        <div className="clock_con">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );

}
export default DigitalClock