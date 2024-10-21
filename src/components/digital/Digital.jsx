import "./digital.css";

import { motion } from "framer-motion";

export default function Digital({ timer }) {
    return (
        <motion.section
            className='digital'
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { delay: 0.3 } }}
            exit={{ scale: 0, transition: { duration: 0.3 } }}
        >
            <h2>
                {timer.getTimeValues().minutes.toString().padStart(2, "0")}:
                {timer.getTimeValues().seconds.toString().padStart(2, "0")}
            </h2>
        </motion.section>
    );
}
