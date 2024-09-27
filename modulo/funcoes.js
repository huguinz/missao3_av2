/*********************************************
 * Objetivo:Criar um sistema que gerencie as médias escolares de uma universidade
 * Data: 20/09/2024
 * Autor: Hugo Lopes
 * Versão: 1.0
 *********************************************/

function validarDados (nomealuno, nomeprofessor, sexoprofessor, nomecurso, nomedisciplina){
    let na = nomealuno
    let np = nomeprofessor
    let sp = sexoprofessor
    let nc = nomecurso
    let nd = nomedisciplina 
    let resultado = ''
    
    if (na == ''){
        resultado += 'É obrigatório inserir o nome do aluno.\n'
    
    }if (np == ''){
        resultado += 'É obrigatório inserir o nome do professor(a).\n'
    
    }if (sp == ''){
        resultado += 'É obrigatório inserir o sexo do professor(a).\n'
    
    }if (nc == ''){
        resultado += 'É obrigatório inserir o nome do curso.\n'

    }if (nd == ''){
        resultado += 'É obrigatório inserir o nome da disciplina.\n' 

    }
    return resultado
}

function validarNotas (nota1, nota2, nota3, nota4){
    let n1 = nota1
    let n2 = nota2
    let n3 = nota3
    let n4 = nota4
    let resultado = ''
    let notaresultado = (n1 + n2 + n3 + n4) / 4

    if (isNaN(n1)){
        resultado = 'É obrigatório apenas a entrada de numeros'
        return resultado
    }else if (n1 <0 || n1 >100){
        resultado = 'É obrigatório a entrada de números entre 0 e 100'
        return resultado
    
    }if (isNaN(n2)){
        resultado = 'É obrigatória apenas a entrada de numeros'
        return resultado
    }else if (n2 <0 || n2 >100){
        resultado = 'É obrigatória a entrada de números entre 0 e 100'
        return resultado
    
    }if (isNaN(n3)){
        resultado = 'É obrigatória apenas a entrada de numeros'
        return resultado
    }else if (n3 <0 || n3 >100){
        resultado = 'É obrigatória a entrada de números entre 0 e 100'
        return resultado
    
    }if (isNaN(n4)){
        resultado = 'É obrigatória apenas a entrada de numeros'
        return resultado
    }else if (n4 <0 || n4 >100){
        resultado = 'É obrigatória a entrada de números entre 0 e 100'
        return resultado

    }else{
        notaresultado
     }
return notaresultado
}

function resultadoBoletim(mediaFinal, exame, sexoprofessor) {
    let mediaF = mediaFinal
    let exa = exame
    let resultado = ''
    let resultadoS = ''

    // Definindo o sexo do professor
    if (sexoprofessor === 'M') {
        resultadoS = 'Professor'
    } else if (sexoprofessor === 'F') {
        resultadoS = 'Professora'
    } else {
        resultadoS = 'Professor(a) desconhecido(a)' // Tratamento para caso não seja M ou F
    }

    // Verificando a média final
    if (mediaF >= 70) {
        resultado = `O aluno [ xxxxxx ] foi Aprovado na disciplina [******]
Curso: xxxxxxxx
${resultadoS}: xxxxxxxx
Notas do aluno: Nota1, Nota2, Nota3, Nota4, Nota do Exame
Média Final: ${mediaF}
Média final do Exame: NA`
    } else if (mediaF < 50) {
        resultado = `O aluno [ xxxxxx ] foi Reprovado na disciplina [******]
Curso: xxxxxxxx
${resultadoS}: xxxxxxxx
Notas do aluno: Nota1, Nota2, Nota3, Nota4, Nota do Exame
Média Final: ${mediaF}
Média final do Exame: NA`
    } else if (mediaF >= 50 && mediaF <= 69) {
        let exameF = (exa + mediaF) / 2
        if (exameF >= 60) {
            resultado = `O aluno [ xxxxxx ] foi Aprovado na disciplina [******]
Curso: xxxxxxxx
${resultadoS}: xxxxxxxx
Notas do aluno: Nota1, Nota2, Nota3, Nota4, Nota do Exame
Média Final: ${mediaF}
Média final do Exame: ${exa}`
        } else {
            resultado = `O aluno [ xxxxxx ] foi Reprovado na disciplina [******]
Curso: xxxxxxxx
${resultadoS}: xxxxxxxx
Notas do aluno: Nota1, Nota2, Nota3, Nota4, Nota do Exame
Média Final: ${mediaF}
Média final do Exame: ${exa}`
        }
    }

    return resultado
}

// Testando a função
console.log(resultadoBoletim(71, 0, 'F')); 



