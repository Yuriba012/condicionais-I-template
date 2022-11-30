// const boolean1 = false
// const boolean2 = true

// if(boolean1){
//     alert("Boolean é verdadeiro")
// }else{
//     alert("Boolean é falso")
// }

// const idade = 24

// if((idade >= 16 && idade < 18)||(idade >= 60)){
//     alert("Voto facultativo")
// }else if(idade >= 18 && idade < 60){
//     alert("Voto obrigatório")
// }else if(idade > 0 && idade < 16){
//     alert("Não pode votar")
// }else{
//     alert("Valor inválido")
// }

let alunos = []

const aluno1 = {
    nome: "Fulano",
    notas: [8, 9, 4, 6]
}
const aluno2 ={
    nome: "Ciclano",
    notas: [8, 9, 10, 5]
}
const aluno3 ={
    nome: "Beltrano",
    notas: [8, 5, 9, 8.5]
}

alunos.push(aluno1, aluno2, aluno3)

const media = (notas) => {
    let soma = 0;
    const quantNotas = notas.length
    notas.forEach(function(nota){
        soma += nota
    })
    return soma/quantNotas
}

const nomePesq = prompt("Qual aluno você deseja pesquisar?")

let alunoEscolhido = null

alunos.forEach(function(aluno){
    if((aluno.nome === nomePesq)||(aluno.nome.toLowerCase() === nomePesq)||(aluno.nome.toUpperCase() === nomePesq)){
        alunoEscolhido = {...aluno}
    }
})

if(alunoEscolhido != null){
    alert(`Nome do aluno: ${alunoEscolhido.nome}\nMédia de notas: ${media(alunoEscolhido.notas)}`)
}else{
    alert("O aluno não existe")
}