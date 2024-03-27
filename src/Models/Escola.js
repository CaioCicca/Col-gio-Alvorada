export default class Escola {
    constructor(id, nome, corPrimaria, corSecundaria, quantidadeFuncionarios, capacidadeAlunosPorAno, quantidadeTurmas, endereco, telefone, email, responsavel) {
        this.id = this.randomID()
        this.nome = nome;
        this.date =  new Date(2024, 2, 18);
        this.corPrimaria = corPrimaria;
        this.corSecundaria = corSecundaria;
        this.quantidadeFuncionarios = quantidadeFuncionarios;
        this.capacidadeAlunosPorAno = capacidadeAlunosPorAno;
        this.quantidadeTurmas = quantidadeTurmas;
        this.endereco = {
            cidade: endereco.cidade,
            estado: endereco.estado,
            rua: endereco.rua,
            numero: endereco.numero
        };
        this.telefone = telefone;
        this.email = email;
        this.responsavel = responsavel;
    }
    randomID() {
        let id = 1;
        return (
            id++
        )
    }
}