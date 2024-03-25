import { v4 as uuidv4, v5 as uuidv5 } from 'uuid';

export default class Escola {
    constructor(nome, corPrimaria, corSecundaria, quantidadeFuncionarios, capacidadeAlunosPorAno, quantidadeTurmas, endereco, telefone, email, responsavel) {
        this.id = uuidv4()
        this.nome = nome;
        this.date =  new Date(2024, 2, 18);
        this.corPrimaria = corPrimaria;
        this.corSecundaria = corSecundaria;
        this.quantidadeFuncionarios = quantidadeFuncionarios;
        this.capacidadeAlunosPorAno = capacidadeAlunosPorAno;
        this.quantidadeTurmas = quantidadeTurmas;
        this.endereco = endereco;
        this.telefone = telefone;
        this.email = email;
        this.responsavel = responsavel;
    }
}