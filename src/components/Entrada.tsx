interface EntradaProps {
    //atributo tipo é opcional
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    //atributo abaixo é opcional conforme mostra o acento de interrogação
    somenteLeitura?: boolean
    valorMudou?: (valor: any) => void
}

/*O operador ?? é utilizado para verificar se o props.tipo é nulo ou não. Se for nulo o valor padrão será 'text' para o type do input */

export default function Formulario(props: EntradaProps){
    return(
        <div className="flex flex-col">
            <label>
                {props.texto}
            </label>
            <input 
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => props.valorMudou?.(e.target.value)}
                className="border border-blue-700 rounded-md p-1 text-gray-400"
            />
        </div>
    )
}