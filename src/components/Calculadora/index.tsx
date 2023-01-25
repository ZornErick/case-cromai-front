import React, {useEffect, useState, useCallback} from "react";
import {TriangleRedIcon} from "../../assets/TriangleRedIcon";
import {TriangleOrangeIcon} from "../../assets/TriangleOrangeIcon";
import {api} from "../../services/api";
import {Input} from "../Input";

interface ICalcularHipotenusa {
    cateto_a: string;
    cateto_b: string;
}

interface ICalcularCateto {
    hipotenusa: string;
    cateto_a: string;
}

interface IResponse {
    hipotenusa?: number;
    cateto?: number;
}

interface IErrorResponse {
    field: string;
    message: string;
}

export function Calculadora() {
    // Variáveis de estado para guardar os valores dos inputs
    const [hipotenusa, setHipotenusa] = useState("");
    const [catetoA, setCatetoA] = useState("");
    const [catetoB, setCatetoB] = useState("");

    // Variáveis de estado para guardar o resultado da requisição e possíveis erros
    const [resultado, setResultado] = useState<IResponse | null>();
    const [error, setError] = useState<IErrorResponse | null>();

    // Variáveis de estado para controlar o estado de desabilitado dos inputs
    const [inputHipotenusaDisabled, setInputHipotenusaDisabled] = useState(false);
    const [inputCatetoADisabled, setInputCatetoADisabled] = useState(false);
    const [inputCatetoBDisabled, setInputCatetoBDisabled] = useState(false);

    const [block, setBlock] = useState<boolean>(true);

    const validarInputs = useCallback(() => {
        /*
        Verifica se existem dois inputs preenchidos, desabilitando o terceiro.
        */

        if(hipotenusa !== "" && catetoA !== "") {
            setInputCatetoBDisabled(true);
        } else {
            setInputCatetoBDisabled(false);
        }
        if(catetoA !== "" && catetoB !== "") {
            setInputHipotenusaDisabled(true);
        } else {
            setInputHipotenusaDisabled(false);
        }
        if(hipotenusa !== "" && catetoB !== "") {
            setInputCatetoADisabled(true);
        } else {
            setInputCatetoADisabled(false);
        }
    }, [hipotenusa, catetoA, catetoB, setInputHipotenusaDisabled, setInputCatetoBDisabled]);

    const descobrirCalculo = () => {
        /*
        Descobre qual cálculo será feito baseado nos dados preenchidos no formulário. Retorna um objeto que
        será enviado para à API.
        */

        if(hipotenusa === "") {
            return {
                cateto_a: catetoA,
                cateto_b: catetoB
            } as ICalcularHipotenusa
        } else {
            return {
                hipotenusa: hipotenusa,
                cateto_a: catetoA !== "" ? catetoA : catetoB
            } as ICalcularCateto
        }
    }

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        /*
        Submete os dados do formulário para a API e atualiza o estado dos componentes conforme o retorno.
        */

        event.preventDefault();
        setResultado(null);
        setError(null);

        const dataForm = descobrirCalculo();
        try {
            const { status: statusCode, data } = await api.post(`/calcular`, dataForm);

            if(statusCode === 200 && data) {
                setResultado(data);
                setBlock(true);
            }
        } catch (e: any) {
            console.log(e.response.data[0])
            setError(e.response.data[0]);
            setBlock(true);
        }
    }

    useEffect(() => {
        validarInputs();
    }, [validarInputs])

    return (
        <section className={"bg-beige-200 flex flex-row max-lg:flex-col justify-between items-center rounded-t-[100px] border-t-2 border-x-2 border-black lg:h-3/5"}>
            <div className={"mx-24 mb-56 max-lg:my-12"}>
                <TriangleOrangeIcon />
            </div>
            <form className={"flex flex-col justify-center items-center gap-4 w-1/2 h-full"} onSubmit={submitForm} onChange={() => setBlock(false)}>
                <Input
                    label={"Hipotenusa"}
                    placeholder={"Informe o comprimento da hipotenusa"}
                    onChange={(event) => setHipotenusa(event.target.value)}
                    disabled={inputHipotenusaDisabled}
                />
                <Input
                    label={"Cateto A"}
                    placeholder={"Informe o comprimento do cateto A"}
                    onChange={(event) => setCatetoA(event.target.value)}
                    disabled={inputCatetoADisabled}
                />
                <Input
                    label={"Cateto B"}
                    placeholder={"Informe o comprimento do cateto B"}
                    onChange={(event) => setCatetoB(event.target.value)}
                    disabled={inputCatetoBDisabled} 
                />
                {resultado?.hipotenusa && (<span className={"text-md text-center font-medium mt-10"}>Hipotenusa: {resultado.hipotenusa}</span>)}
                {resultado?.cateto && (<span className={"text-md text-center font-medium mt-10"}>Cateto: {resultado.cateto}</span>)}
                {error && (<span className={"text-red-700 text-md text-center font-medium mt-10"}>{error.field}: {error.message}</span>)}
                <button
                    className={"bg-green-600 rounded-full text-white text-md font-semibold py-3 px-20 mt-10"}
                    type={"submit"}
                    disabled={block}
                >
                    Calcular
                </button>
            </form>
            <div className={"mx-24 mt-56 max-lg:my-12"}>
                <TriangleRedIcon />
            </div>
        </section>
    );
}
