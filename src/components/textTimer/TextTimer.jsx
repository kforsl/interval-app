import "./textTimer.css";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const changeNumberToText = (nmnb) => {
    const single = [
        "",
        "Ett",
        "Två",
        "Tre",
        "Fyra",
        "Fem",
        "Sex",
        "Sju",
        "Åtta",
        "Nio",
        "Tio",
        "Elva",
        "Tolv",
        "Tretton",
        "Fjorton",
        "Femton",
        "Sexton",
        "Sjutton",
        "Arton",
        "Nitton",
    ];
    const large = ["Tjugo", "Trettio", "Fyrtio", "Femtio", "Sextio"];

    if (nmnb < 20) {
        return single[nmnb];
    } else if (nmnb <= 60) {
        const firtsNmbr = Number(nmnb.toString()[0] - 2);
        const secondNmbr = Number(nmnb.toString()[1]);
        return large[firtsNmbr] + single[secondNmbr];
    }
};

export default function TextTimer({ timer }) {
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");

    useEffect(() => {
        setMinutes(changeNumberToText(timer.getTimeValues().minutes));
        setSeconds(changeNumberToText(timer.getTimeValues().seconds));
    }, [timer.getTimeValues().toString()]);

    return (
        <motion.article
            className='text-timer'
            initial={{ y: "200%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "200%", opacity: 0 }}
        >
            {timer.getTimeValues().minutes === 1 && timer.getTimeValues().seconds !== 0 ? (
                <>
                    <p> En </p>
                    <p>minut</p>
                    <p>och</p>
                </>
            ) : timer.getTimeValues().minutes > 1 ? (
                <>
                    <p> {minutes} </p>
                    <p>minuter</p>
                    <p>och</p>
                </>
            ) : (
                <></>
            )}
            {timer.getTimeValues().seconds === 0 ? <p> Sextio </p> : <p>{seconds} </p>}
            <p> sekunder </p>
            <p> kvar</p>
        </motion.article>
    );
}
