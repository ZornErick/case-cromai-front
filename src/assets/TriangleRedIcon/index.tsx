import * as React from "react"
import {SVGAttributes} from "react";

interface TriangleRedIconProps extends SVGAttributes<HTMLOrSVGElement> {}

export function TriangleRedIcon(props: TriangleRedIconProps) {
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
                stroke="#E93E3E"
                strokeWidth={4}
                d="M174.844 72.7915L2.02618 176.099"
            />
            <path
                stroke="#E93E3E"
                strokeWidth={4}
                d="M140.162 209.34L174.657 72.018"
            />
            <path
                stroke="#E93E3E"
                strokeWidth={4}
                d="M141.772 211.137L0.670958 175.692"
            />
            <path
                stroke="#E93E3E"
                strokeWidth={4}
                d="M266.585 143.854L124.287 1.41351"
            />
            <path
                stroke="#E93E3E"
                strokeWidth={4}
                d="M125.702 143.485L267.29 143.485"
            />
            <path
                stroke="#E93E3E"
                strokeWidth={4}
                d="M124.351 145.485L124.351 -0.0000152588"
            />
        </svg>
    )
}
