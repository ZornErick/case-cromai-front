import * as React from "react"
import {SVGAttributes} from "react";

interface TriangleOrangeIconProps extends SVGAttributes<HTMLOrSVGElement> {}

export function TriangleOrangeIcon(props: TriangleOrangeIconProps) {
    return (
        <svg
            width={268}
            height={214}
            viewBox="0 0 268 214"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                stroke="#FA8E2A"
                strokeWidth={4}
                d="M93.1563 141.036L265.974 37.7285"
            />
            <path
                stroke="#FA8E2A"
                strokeWidth={4}
                d="M127.838 4.48727L93.3426 141.809"
            />
            <path
                stroke="#FA8E2A"
                strokeWidth={4}
                d="M126.228 2.69019L267.329 38.1354"
            />
            <path
                stroke="#FA8E2A"
                strokeWidth={4}
                d="M1.41492 69.9727L143.713 212.414"
            />
            <path
                stroke="#FA8E2A"
                strokeWidth={4}
                d="M142.298 70.3419L0.710144 70.3419"
            />
            <path
                stroke="#FA8E2A"
                strokeWidth={4}
                d="M143.649 68.3419L143.649 213.827"
            />
        </svg>
    )
}
