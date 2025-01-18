import Entrada from './Entrada';
import Aluno from '../components/core/Alunos';
import { useState } from 'react';
import Botao from './Botao';


interface FormularioProps {
    aluno: Aluno;
    alunoMudou?: (aluno: Aluno) => void
    cancelado?: () => void;
}

export default function Formulario(props: FormularioProps){
    const id = props.aluno?.getId() ?? "";
    const [nome, setNome] = useState(props.aluno?.getNome() ?? "");
    const [idade, setIdade] = useState(props.aluno?.getIdade() ?? 0);

    return(
        <div>
            {id && (<div><Entrada somenteLeitura texto='Código' valor={id}/></div>)}
            <div className='mt-8'>
                <Entrada tipo='text' texto='Novo aluno' valor={nome} valorMudou={setNome} />
            </div>
            <div className='mt-8'>
                <Entrada tipo='number' texto='Idade' valor={idade} valorMudou={setIdade} />
            </div>
            <div className="flex flex-row justify-end">
                <Botao cor="blue" onClick={() => props.alunoMudou?.(new Aluno(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor='yellow' onClick={props.cancelado}>
                Cancelar
                </Botao>
            </div>
        </div>
    )
}