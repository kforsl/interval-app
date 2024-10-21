import { useEffect, useState } from "react";
import { useTimerStore } from "../../store/timerStore";
import "./analog.css";

import { motion, useTransform, motionValue } from "framer-motion";

export default function Analog({ timer }) {
    const { startTimer } = useTimerStore();
    const [elapsedTime, setElapsedTime] = useState(0);

    const rotateMin = useTransform(motionValue(elapsedTime), [startTimer * 60, 0], [0, 360], {
        clamp: false,
    });
    const rotateSec = useTransform(motionValue(elapsedTime), [60, 0], [0, 360], {
        clamp: false,
    });

    useEffect(() => {
        setElapsedTime(timer.getTotalTimeValues().seconds);
    }, [timer.getTimeValues().seconds]);

    return (
        <>
            <motion.section
                className='analog'
                initial={{ y: "-200%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-200%", opacity: 0 }}
            >
                <motion.figure className='analog__min' style={{ rotate: rotateMin }} id='minArm'></motion.figure>
                <motion.figure className='analog__sec' style={{ rotate: rotateSec }} id='secArm'></motion.figure>
                <figure className='analog__center'></figure>
            </motion.section>
        </>
    );
}
