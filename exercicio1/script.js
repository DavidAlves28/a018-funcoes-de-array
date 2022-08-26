const astro = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}
//-----1-) PROPRIEDADES EM CAIXA ALTA
const caixaAlta = (objeto) => {
    const novoObjeto = { ...objeto }
    for (let i in objeto) {
        novoObjeto[i] = objeto[i].toUpperCase()
    }
    return novoObjeto
}
console.log(caixaAlta(astro))

//------ 2) TEXTO CORRIDO

const retornaTexto = (objeto) => {
    let textoF = ``
    for (let i in objeto) {
        textoF = textoF + objeto[i]
    }
    console.log(textoF)
    return textoF
}
console.log(retornaTexto(astro));

// 3 ) funcao com callback

const recebeCallback = (parametro1, callback) => {
    const response = callback(parametro1)
    return response
}

// a = callback com a funcao 1
console.log(`callback funcao 1:`, recebeCallback(astro, caixaAlta))

// b = callback com a funcao 2
console.log(`callback funcao 2:`, recebeCallback(astro, retornaTexto))

