import {Calculadora} from "../components/Calculadora";
import {Header} from "../components/Header";
import {Info} from "../components/Info";

export function Home() {
    return (
        <main className={"h-screen flex flex-col justify-between"}>
            <div>
                <Info />
                <Header />
            </div>
            <Calculadora />
        </main>
    );
}
