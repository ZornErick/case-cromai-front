import * as React from "react"
import {SVGAttributes} from "react";

interface InfoIconProps extends SVGAttributes<HTMLOrSVGElement> {}

export function InfoIcon(props: InfoIconProps) {
    return (
        <svg
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M10.04 37.12c-1.695-1.695-.571-5.25-1.437-7.332-.866-2.082-4.182-3.905-4.182-6.208 0-2.303 3.28-4.053 4.182-6.208.903-2.156-.258-5.637 1.437-7.332 1.695-1.695 5.25-.571 7.332-1.437 2.081-.866 3.905-4.182 6.208-4.182 2.303 0 4.053 3.28 6.208 4.182 2.155.903 5.637-.258 7.332 1.437 1.695 1.695.57 5.25 1.437 7.332.866 2.081 4.181 3.905 4.181 6.208 0 2.303-3.279 4.053-4.181 6.208-.903 2.155.258 5.637-1.437 7.332-1.695 1.695-5.25.57-7.332 1.437-2.082.866-3.905 4.181-6.208 4.181-2.303 0-4.053-3.279-6.208-4.181-2.156-.903-5.637.258-7.332-1.437zM23.58 14.737v10.317"
                stroke="#fff"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M23.58 33.896a2.21 2.21 0 100-4.421 2.21 2.21 0 000 4.421z"
                fill="#fff"
            />
        </svg>
    )
}
