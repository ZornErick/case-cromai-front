import {Calculadora} from "../components/Calculadora";
import {Header} from "../components/Header";

export function Home() {
    return (
        <main className={"h-screen flex flex-col justify-between"}>
            <div>
                <Header />
            </div>
            <Calculadora />
        </main>
    );
}
