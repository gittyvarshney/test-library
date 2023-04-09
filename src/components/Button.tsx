import React, { useState } from 'react';

export interface ButtonProps {
    backgroundColor?: string,
    color?: string
    children?: React.ReactNode
    style?: React.CSSProperties
    onButtonClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export const Button: React.FC<ButtonProps> = (props) : React.ReactElement => {

    const { children, backgroundColor, color, style, onButtonClick } = props;
    let _style: React.CSSProperties = style || {};

    if(backgroundColor) _style.backgroundColor = backgroundColor;
    if(color) _style.color = color;

    return (
        <button style={_style} onClick={onButtonClick}>{children}</button>
    )
}

export const Counter: React.FC<{}> = (props) => {

    const [count, setCount] = useState<number>(0);

    return(
        <>
        <p> Counter: {count}</p>
        <Button backgroundColor='green' onButtonClick={(e) => { setCount(prev => prev + 1) }}>
            Increment Counter
        </Button >
        <Button backgroundColor='red' onButtonClick={(e) => { setCount(prev => prev - 1) }}>
            Decrement Counter
        </Button>
        </>
    )
}