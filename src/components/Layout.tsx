"use client";
import Titulo from "./Titulo";

/*RECURSO DO TYPESCRIPT PARA DEFINIR OS PARÂMETROS ESPERADO DO PROPS DO COMPONENTE LAYOUT*/
interface LayoutProps {
    titulo: string
    children: any
}

export default function Layout(props: LayoutProps) {
    return(
        <div className="flex flex-col w-2/3 bg-white text-gray-800 rounded-md text-xl">
                <Titulo>
                    {props.titulo}
                </Titulo>
                <div className="p-8">
                    {props.children}
                </div>
        </div>
    )
}