import { CSSProperties } from "react";

const COLOR_PRESETS = {
    official: {
        background: 'linear-gradient(59deg, rgba(21,87,194,1) 0%, rgba(76,116,203,1) 52%, rgba(61,135,162,1) 100%)'
    },
    v2support: {
        background: 'linear-gradient(60deg, rgba(26,162,97,1) 0%, rgba(33,175,53,1) 52%, rgba(63,186,90,1) 100%)'
    },
    outdated: {
        background: 'linear-gradient(40deg, rgba(255,0,0,1) 0%, rgba(255,75,40,1) 50%, rgba(203,68,30,1) 100%)'
    }
}

export const Badge = ({children, color}) => {
    const style: CSSProperties = {
        borderRadius: '4px',
        color: '#fff',
        padding: '0.15rem 0.4rem',
    };
    if (color in COLOR_PRESETS) {
        style.background = COLOR_PRESETS[color].background;
    } else {
        style.backgroundColor = color;
    }
    return (
        <span style={ style }>
        { children }
    </span>
    )
};