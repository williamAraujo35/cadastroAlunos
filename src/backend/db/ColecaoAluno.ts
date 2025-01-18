import firebase from '../config';
import Aluno from '../../components/core/Alunos';
import AlunoRepositorio from '@/components/core/AlunoRepositorio';

export default class ColecaoAluno implements AlunoRepositorio {

    conversor = {
        toFirestore(aluno: Aluno){
            return {
                nome: aluno.getNome(),
                idade: aluno.getIdade(),
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Aluno {
            const dados = snapshot.data(options);
            return new Aluno(dados.nome, dados.idade, snapshot.id)
        }
    }


    async salvar(aluno: Aluno): Promise<Aluno>{
        if(aluno?.getId()){
            await this.colecao().doc(aluno.getId()).set(aluno)
            return aluno
        } else {
            const docRef = await this.colecao().add(aluno)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async excluir(aluno: Aluno): Promise<void>{
        return this.colecao().doc(aluno.getId()).delete()
    }

    async obterTodos(): Promise<Aluno[]>{
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao(){
        return firebase.firestore().collection('alunos').withConverter(this.conversor)
    }
}