import "./button.css";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Button({ path, text, modifier, onClick }) {
    return (
        <Link to={path} className={modifier === "big" ? "" : "button__link"} onClick={onClick}>
            <motion.button
                whileTap={{ scale: 0.9, opacity: 1, rotateZ: "-1deg" }}
                className={modifier ? `button button--${modifier}` : "button"}
            >
                {text}
            </motion.button>
        </Link>
    );
}
