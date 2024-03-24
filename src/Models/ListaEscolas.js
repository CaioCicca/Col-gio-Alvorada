class Lista {
    constructor() {
        this.lista = [];
    }

    adicionarEscola(escola) {
        this.lista.push(escola);
    }

    getLista() {
        return this.lista;
    }


    getEscolaPorId(id) {
        const escola = this.lista.find((escola) => escola.id == id);

        return escola;
    }

    atualizarEscola(id, nome, date, corPrimaria, corSecundaria, quantidadeFuncionarios, capacidadeAlunosPorAno, quantidadeTurmas, endereco, telefone, email, responsavel) {
        const updateEscola = this.getEscolaPorId(id);

        if (updateEscola) {
            updateEscola.nome = nome;
            updateEscola.date = date;
            updateEscola.corPrimaria = corPrimaria;
            updateEscola.corSecundaria = corSecundaria;
            updateEscola.quantidadeFuncionarios = quantidadeFuncionarios;
            updateEscola.capacidadeAlunosPorAno = capacidadeAlunosPorAno;
            updateEscola.quantidadeTurmas = quantidadeTurmas;
            updateEscola.endereco = endereco;
            updateEscola.telefone = telefone;
            updateEscola.email = email;
            updateEscola.responsavel = responsavel;
        }

        return updateEscola;
    }

    deletarEscola(escola) {
        this.lista = this.lista.filter(item =>  item.id === escola.id)
    }
}