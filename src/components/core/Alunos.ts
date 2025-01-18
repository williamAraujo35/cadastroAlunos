export default class Aluno {
    //definindo atributos privados. A partir da versão do Ecma Script 2015 não é necessário utilizar a palavra 'private' e sim apenas o '#'
    private id: string | null;
    private nome: string
    private idade: number
    
    constructor(nome: string, idade: number, id: string | null = null) {
        this.nome = nome;
        this.idade = idade;
        this.id = id;
    }

    static vazio() {
        return new Aluno('', 0, null)
    }


    getId(){
        return this.id
    }

    getNome(){
        return this.nome
    }

    getIdade(){
        return this.idade
    }

}