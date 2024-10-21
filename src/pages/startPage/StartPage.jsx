import "./startPage.css";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import SvgLogo from "../../svgComponents/svgLogo/SvgLogo";

export default function StartPage() {
    return (
        <motion.section className='start' exit={{ x: "-100%", transition: { duration: 0.3 } }}>
            <Link className='link' to='/set'>
                <SvgLogo cssClass='svg-logo' />
                <motion.h1
                    initial={{ opacity: 0.5, scale: 0 }}
                    animate={{ opacity: 1, scale: [0, 1.2, 1] }}
                    transition={{
                        duration: 0.5,
                    }}
                >
                    INTERVAL
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, x: "-100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: 0.6,
                        duration: 0.5,
                    }}
                >
                    For all your timing needs
                </motion.h2>
            </Link>
        </motion.section>
    );
}
