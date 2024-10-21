import "./setPage.css";

import { motion } from "framer-motion";
import { useTimerStore } from "./../../store/timerStore";

import SvgChevron from "../../svgComponents/svgChevron/SvgChevron";
import Button from "../../components/button/Button";
import { useEffect } from "react";

export default function SetPage() {
    const {
        startTimer,
        increamentTimer,
        decrementTimer,
        isInterval,
        isBreak,
        toggleIsInterval,
        toggleIsBreak,
        resetNmbrOfLoops,
    } = useTimerStore();

    useEffect(() => {
        resetNmbrOfLoops();
    }, []);

    return (
        <>
            <motion.section
                className='set'
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%", transition: { duration: 0.3, delay: 0.5 } }}
            >
                <article className='set__time'>
                    {startTimer > 0 && (
                        <motion.figure className='set__time-arrow' onClick={decrementTimer} whileTap={{ scale: 0.6 }}>
                            <SvgChevron direction='left' />
                        </motion.figure>
                    )}
                    <section className='set__time-section'>
                        <h1 className='set__time-value'> {startTimer} </h1>
                        <h2 className='set__time-unit'> minutes </h2>
                    </section>
                    {startTimer < 60 && (
                        <motion.figure className='set__time-arrow' onClick={increamentTimer} whileTap={{ scale: 0.6 }}>
                            <SvgChevron direction='right' />
                        </motion.figure>
                    )}
                </article>
                <form className='set__form'>
                    <label className='set__form-label'>
                        <input
                            className='set__form-checkbox'
                            id='intervals'
                            type='checkbox'
                            checked={isInterval}
                            onChange={(e) => {
                                toggleIsInterval();
                                if (isBreak && !e.target.checked) toggleIsBreak();
                            }}
                        />
                        intervals
                    </label>
                    <label className='set__form-label'>
                        <input
                            className='set__form-checkbox'
                            id='intervakBreak'
                            type='checkbox'
                            checked={isBreak}
                            onChange={() => {
                                toggleIsBreak();
                                if (!isInterval) toggleIsInterval();
                            }}
                        />
                        5 min break / interval
                    </label>

                    <Button path={startTimer > 0 && "/timer"} text='Start Timer' modifier='big' />
                </form>
            </motion.section>
        </>
    );
}
