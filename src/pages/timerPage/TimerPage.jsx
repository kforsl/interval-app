import "./timerPage.css";

import useTimer from "easytimer-react-hook";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Nav from "../../components/nav/Nav";
import Analog from "../../components/analog/Analog";
import Digital from "../../components/digital/Digital";
import TextTimer from "../../components/textTimer/TextTimer";
import Button from "../../components/button/Button";

import { useTimerStore } from "./../../store/timerStore";

export default function TimerPage() {
    const { startTimer, typeOfTimer, isInterval, isBreak, nmbrOfLoops, incrementNmbrOfLoops } = useTimerStore();
    const navigate = useNavigate();
    const [timer, isTargetAchieved] = useTimer({
        startValues: {
            minutes: startTimer,
        },
        target: {
            minutes: 0,
            seconds: 0,
        },
        countdown: true,
        updateWhenTargetAchieved: true,
    });

    useEffect(() => {
        timer.start();
    }, []);

    useEffect(() => {
        if (isTargetAchieved && isInterval && !isBreak) {
            incrementNmbrOfLoops();
            timer.reset();
        } else if (isTargetAchieved && isInterval && isBreak) {
            timer.off();
            incrementNmbrOfLoops();
            navigate("/break");
        } else if (isTargetAchieved && !isInterval && !isBreak) {
            timer.off();
            navigate("/done");
        }
    }, [isTargetAchieved]);

    return (
        <>
            {
                <motion.section
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%", transition: { duration: 0.3, delay: 0.5 } }}
                    className='timer'
                >
                    <Nav />
                    <h1 className='timer__title'> interval </h1>
                    {isInterval && <h2> Loop: {nmbrOfLoops} </h2>}
                    <AnimatePresence>
                        {typeOfTimer === "analog" ? (
                            <Analog timer={timer} />
                        ) : typeOfTimer === "digital" ? (
                            <Digital timer={timer} />
                        ) : (
                            <TextTimer timer={timer} />
                        )}
                    </AnimatePresence>
                    <Button path='/set' text='Abort Timer' />
                </motion.section>
            }
        </>
    );
}
