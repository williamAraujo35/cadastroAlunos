"use client";
import Aluno from './core/Alunos';
import { IconeEdicao, IconeLixo } from './Icones';


interface TabelaProps {
    alunos: Aluno[];
    alunoSelecionado?: (aluno: Aluno) => void;
    alunoExcluido?: (aluno: Aluno) => void;
}

export default function Tabela({ alunos, alunoSelecionado, alunoExcluido }: TabelaProps) {
    const exibirAcoes = alunoSelecionado || alunoExcluido;

    return (
        <table className='text-center border-solid border-2 border-blue-600 rounded-xl overflow-hidden w-full'>
            <thead className='border-solid border-2 border-blue-600 bg-gradient-to-r from-stone-900 to-blue-950 text-white'>
                <tr>
                    <th className='p-4'>Código</th>
                    <th className='p-4'>Nome</th>
                    <th className='p-4'>Idade</th>
                    {exibirAcoes && <th className='p-4'>Ações</th>}
                </tr>
            </thead>
            <tbody>
                {alunos.map((aluno, index) => (
                    <tr key={aluno.getId() || index} className={`${index % 2 === 0 ? 'bg-blue-100' : 'bg-blue-200'}`}>
                        <td>{aluno.getId() || 'Sem ID'}</td>
                        <td>{aluno.getNome()}</td>
                        <td>{aluno.getIdade()}</td>
                        {exibirAcoes && (
                            <td className='p-4'>
                                {alunoSelecionado && (
                                    <button onClick={() => alunoSelecionado(aluno)} className='m-2 text-green-600 p-2 rounded-full hover:bg-white'>
                                        {IconeEdicao}
                                    </button>
                                )}
                                {alunoExcluido && (
                                    <button
                                        onClick={() => alunoExcluido(aluno)}
                                        className='m-4 text-red-600 p-2 rounded-full hover:bg-white'>
                                        {IconeLixo}
                                    </button>
                                )}
                            </td>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

