import "./svgLogo.css";

export default function SvgLogo({ cssClass }) {
    return (
        <svg className={`${cssClass}`} width='36' height='35' viewBox='0 0 36 35' xmlns='http://www.w3.org/2000/svg'>
            <rect x='35.5' y='35' width='12' height='35' transform='rotate(-180 35.5 35)' />
            <rect x='20.5' y='35' width='8' height='35' transform='rotate(-180 20.5 35)' />
            <rect x='9.5' y='35' width='4' height='35' transform='rotate(-180 9.5 35)' />
            <rect x='2.5' y='35' width='2' height='35' transform='rotate(-180 2.5 35)' />
        </svg>
    );
}
