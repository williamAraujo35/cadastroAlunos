interface BotaoProps {
    //a interrogação demonstra que o atributo cor e OnClick é opcional
    cor?: 'blue' | 'green' | 'yellow';
    children: any;
    onClick?: () => void
}


export default function Botao(props: BotaoProps){

    const cores = {
        blue: 'bg-blue-500 hover:bg-blue-400',
        green: 'bg-green-500 hover:bg-green-400',
        yellow: 'bg-yellow-500 hover:bg-yellow-400'
    };

    const classes = props.cor ? cores[props.cor] : 'bg-gray-500 hover: bg-gray-400';

    return(
            <button onClick={props.onClick} className={`rounded-md p-2 text-white text-base mb-2 mr-1 ${classes} mt-4`}>
            {props.children}
        </button>

    )
}