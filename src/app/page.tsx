"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Layout from "@/components/Layout";
import Table from '../components/Tabela';
import Aluno from '../components/core/Alunos';
import Botao from '../components/Botao';
import Formulario from "@/components/Formulario";
import { useEffect, useState } from "react";
import AlunoRepositorio from "@/components/core/AlunoRepositorio";
import ColecaoAluno from "@/backend/db/ColecaoAluno";

export default function Home() {

  const repositorio: AlunoRepositorio = new ColecaoAluno();
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  useEffect(obterTodos, [])

  function obterTodos(){
    repositorio.obterTodos().then(alunos => {
      setAlunos(alunos)
      setVisivel('tabela')
    })
  }


  //Estado para armazenamento de Aluno
  const [aluno, setAluno] = useState<Aluno>(Aluno.vazio())

  //Estado para renderização da Tabela ou do formulário /// O Estado será Tabela e Form, mas por padrão começará como tabela
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')


  /* Estado para gerenciar o ID do aluno */
  const [id, setId] = useState<string | null>(null);

  /*Alunos que serão exibidos na tabela*/
  /*const alunos = [
    new Aluno('Beatriz', 34, '001'),
    new Aluno('Pamela', 30, '002'),
    new Aluno('Jeferson', 43, '003'),
    new Aluno('Amarildo', 58, '004'),
    new Aluno('Gilson', 24, '005')

  ]*/

  function alunoSelecionado(aluno: Aluno){
    setAluno(aluno)
    setId(aluno.getId());
    setVisivel('form')
  }

  async function alunoExcluido(aluno: Aluno){
      await repositorio.excluir(aluno)
      obterTodos()
  }

  async function salvarAluno(aluno: Aluno){
    await repositorio.salvar(aluno);
    obterTodos();
  }

  function novoAluno(){
    setAluno(Aluno.vazio());
    setVisivel('form');
  }

  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-r from-stone-900 to-blue-950`}>
      <Layout titulo="Cadastro Simples">
        
        {visivel === 'tabela' ? (
              <>
              <div className="flex justify-end">
                <Botao cor='green' onClick={novoAluno}>
                  Cadastrar Aluno
                </Botao>
              </div>
              <Table alunos={alunos} alunoSelecionado={alunoSelecionado} alunoExcluido={alunoExcluido}/>
            </>
        ):(
          <Formulario aluno={aluno} alunoMudou={salvarAluno} cancelado={() => setVisivel('tabela')}/>
        )}
      </Layout>
    </div>
  )
}