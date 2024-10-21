import "./svgChevron.css";

export default function SvgChevron({ direction }) {
    return (
        <svg
            width='48'
            height='48'
            viewBox='0 0 48 48'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={`rotation--${direction}`}
        >
            <path
                d='M30.75 10.5L17.25 24L30.75 37.5'
                stroke='#222222'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
