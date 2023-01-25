import {CalculadoraIcon} from "../../assets/CalculadoraIcon";

export function Header() {
    return (
        <header className={"flex justify-start items-center lg:mx-48"}>
            <CalculadoraIcon />
            <div className={"flex flex-col lg:items-center"}>
                <h1 className={"text-white text-lg font-bold"}>Teorema de</h1>
                <h1 className={"text-white text-lg font-bold"}>Pitágoras</h1>
            </div>
        </header>
    );
}
