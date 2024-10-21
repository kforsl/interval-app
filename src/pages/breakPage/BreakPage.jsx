import "./breakPage.css";
import { motion } from "framer-motion";

import { useTimerStore } from "./../../store/timerStore";
import SvgPause from "../../svgComponents/svgPause/SvgPause";
import useTimer from "easytimer-react-hook";
import { useEffect } from "react";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

export default function BreakView() {
    const { breakTime } = useTimerStore();
    const navigate = useNavigate();
    const [breaktimer, isTargetAchieved] = useTimer({
        startValues: {
            minutes: breakTime,
        },
        target: {
            minutes: 0,
            seconds: 0,
        },
        countdown: true,
        updateWhenTargetAchieved: true,
    });
    breaktimer.start();

    useEffect(() => {
        if (isTargetAchieved) navigate("/timer");
    }, [isTargetAchieved]);

    return (
        <motion.article
            className='break-view'
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%", transition: { duration: 0.3, delay: 0.5 } }}
        >
            <section className='break-view__center-container'>
                <SvgPause />
                <motion.h1
                    initial={{
                        scale: 1,
                        opacity: 1,
                    }}
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.9, 1, 0.9],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "backInOut",
                    }}
                >
                    Pause & breath
                </motion.h1>
                <h2 className='break-view__timer'>
                    {breaktimer.getTimeValues().minutes.toString().padStart(2, "0")}:
                    {breaktimer.getTimeValues().seconds.toString().padStart(2, "0")}
                </h2>
            </section>
            <Button path='/timer' text='NO PAUSE, GO NOW!' modifier='light' />
        </motion.article>
    );
}
