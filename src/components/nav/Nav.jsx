import "./nav.css";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SvgLogo from "../../svgComponents/svgLogo/SvgLogo";

import { useTimerStore } from "./../../store/timerStore";

const container = {
    hidden: { opacity: 0, x: "-100%" },
    open: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
    close: {
        opacity: 0,
        x: "-100%",
        transition: {
            duration: 0.5,
            delay: 0.4,
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { y: -20, opacity: 0 },
    open: {
        y: 0,
        opacity: 1,
    },
    close: {
        y: 20,
        opacity: 0,
    },
};

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const { changeTypeOfTimer } = useTimerStore();

    return (
        <>
            <figure
                className='nav__button'
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <SvgLogo cssClass={isOpen ? "icon-open" : "icon-close"} />
            </figure>
            <AnimatePresence>
                {isOpen && (
                    <nav className='nav'>
                        <motion.ul
                            variants={container}
                            initial='hidden'
                            animate='open'
                            exit='close'
                            className='nav__list'
                        >
                            <motion.li
                                variants={item}
                                className='nav__list-item'
                                onClick={() => {
                                    changeTypeOfTimer("analog");
                                    setIsOpen(false);
                                }}
                            >
                                Analog Timer
                            </motion.li>
                            <motion.li
                                variants={item}
                                className='nav__list-item'
                                onClick={() => {
                                    changeTypeOfTimer("digital");
                                    setIsOpen(false);
                                }}
                            >
                                Digital Timer
                            </motion.li>
                            <motion.li
                                variants={item}
                                className='nav__list-item'
                                onClick={() => {
                                    changeTypeOfTimer("text");
                                    setIsOpen(false);
                                }}
                            >
                                Text Timer
                            </motion.li>
                        </motion.ul>
                    </nav>
                )}
            </AnimatePresence>
        </>
    );
}
