import "./timesUpPage.css";

import { motion } from "framer-motion";

import Button from "../../components/button/Button";
import SvgBell from "../../svgComponents/svgBell/SvgBell";

export default function TimesUp() {
    return (
        <article className='times-up'>
            <section className='times-up__center-container'>
                <SvgBell />
                <motion.h1
                    initial={{
                        scale: 1,
                        opacity: 1,
                    }}
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.9, 1, 0.9],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "backInOut",
                    }}
                >
                    Times up!
                </motion.h1>
            </section>
            <Button path='/set' text='set new timer' modifier='light' />
        </article>
    );
}
