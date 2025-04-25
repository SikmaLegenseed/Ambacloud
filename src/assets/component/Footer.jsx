import { useEffect, useState } from "react";
import scp from "../scp.jpg";
import "../../index.css";

function Footer () {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formattedTime = time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });

    const formattedDate = time.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div id="clock" className="mx-auto p-10 mt-20 bg-slate-500 text-white text-center">
            <h1 className="text-2xl font-semibold">&copy; {time.getFullYear()} Boneka Ambalabu</h1>
            <p>{formattedDate} {formattedTime}</p>
        </div>
    );
}

export default Footer;