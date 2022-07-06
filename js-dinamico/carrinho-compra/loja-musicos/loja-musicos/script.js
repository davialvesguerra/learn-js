// const botaoCadastroMusico = document.querySelector('#botaoCadastrarMusico');
// const botaoBuscarMusico = document.querySelector('#blocoBuscaMusicos');

// const musicosCadastrados = []

// const pegarDadosCadastro = () => {
//     const formCadastro = [...document.querySelectorAll('.campoCadastro')]
//                          .map(form => tratarString(form.value))

//     return({
//         'nome': formCadastro[0],
//         'email': formCadastro[1],
//         'generoMusical': formCadastro[2],
//         'instrumentos': formCadastro[3]
//     })
// }

// const adicionarMusico = dadosCadastro =>{
//     musicosCadastrados.push(dadosCadastro)
// }

// const cadastrarMusico = evt => {
//     if(evt.target.nodeName === "BUTTON"){
//         evt.preventDefault();

//         const dadosCadastro = pegarDadosCadastro()
//         adicionarMusico(dadosCadastro)
//     }
// }

// const buscarMusico = evt =>{
//     if(evt.target.nodeName === "BUTTON"){
//         evt.preventDefault()

//         let filtroBusca = [...evt.target.parentNode.querySelectorAll('.campoBuscarMusico')]
//                           .map(filtro => tratarString(filtro.value))

//         const musicosFiltrados = musicosCadastrados.filter((musico, index)=>{
//             return(
//             (musico.nome === filtroBusca[0]) +
//             (musico.email === filtroBusca[1]) +
//             (musico.generoMusical === filtroBusca[2]) +
//             (musico.instrumentos === filtroBusca[3])
//             )
//         })

//         listarMusicos(musicosFiltrados)                     
//     }
// }

// const listarMusicos = musicos => {
//     const tabelaMusicos = document.querySelector('#listarMusicos tbody')
//     let listaMusicos = document.querySelectorAll('#listarMusicos tbody tr')

//     listaMusicos.forEach(musico=>tabelaMusicos.removeChild(musico))

//     tabelaMusicos.innerHTML = `
//     <table id='#listarMusicos'>
//         <tr>
//             <th>Nome</th>
//             <th>Email</th>
//             <th>Gênero Musical</th>
//             <th>Instrumento</th>
//         </tr>
//     </table>
//     `
    
    
//     musicos.forEach(musico => {
//         tabelaMusicos.innerHTML += `
//         <tr class='musicosListados'>
//             <th>${musico.nome}</th>
//             <th>${musico.email}</th>
//             <th>${musico.generoMusical}</th>
//             <th>${musico.instrumentos}</th>
//         </tr>
//         `
//     })

// }

// const checarStringEhNaoVazia = word => word.length ? word : false

// const tratarString = word => {
//     word = String(word)
//     word = word.toLowerCase()
//     word = checarStringEhNaoVazia(word)

//     return word
// }


// botaoCadastroMusico.addEventListener('click', cadastrarMusico)
// botaoBuscarMusico.addEventListener('click', buscarMusico)