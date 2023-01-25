import * as React from "react"
import {SVGAttributes} from "react";

interface CalculadoraIconProps extends SVGAttributes<HTMLOrSVGElement> {}

export function CalculadoraIcon(props: CalculadoraIconProps) {
    return (
        <svg
            width={132}
            height={132}
            viewBox="0 0 132 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M78.3 34.635L39.383 45.062l5.214 19.459 38.917-10.428L78.3 34.635z"
                stroke="#fff"
                strokeWidth={5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M107.783 92.777L88.665 21.43a3.357 3.357 0 00-4.112-2.374L26.177 34.697a3.358 3.358 0 00-2.374 4.112l19.118 71.348a3.357 3.357 0 004.112 2.374l58.376-15.642a3.357 3.357 0 002.374-4.112z"
                stroke="#fff"
                strokeWidth={5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M53.054 83.11a5.036 5.036 0 10-2.607-9.729 5.036 5.036 0 002.607 9.73zM69.269 78.765a5.036 5.036 0 10-2.607-9.729 5.036 5.036 0 002.607 9.73zM85.484 74.42a5.036 5.036 0 10-2.606-9.729 5.036 5.036 0 002.606 9.73zM57.399 99.326a5.036 5.036 0 10-2.607-9.73 5.036 5.036 0 002.607 9.73zM73.614 94.98a5.036 5.036 0 10-2.607-9.728 5.036 5.036 0 002.607 9.729zM89.83 90.636a5.036 5.036 0 10-2.608-9.73 5.036 5.036 0 002.607 9.73z"
                fill="#fff"
            />
        </svg>
    )
}
