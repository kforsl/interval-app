import { motion } from "framer-motion";

export default function SvgPause() {
    return (
        <motion.svg
            width='40'
            height='50'
            viewBox='0 0 40 50'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
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
            <rect width='12' height='50' rx='6' fill='white' />
            <rect x='28' width='12' height='50' rx='6' fill='white' />
        </motion.svg>
    );
}
