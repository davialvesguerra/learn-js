const elButton = document.querySelector('button');
const elListaProdutos = document.querySelector('#listaProdutos');
const elListaProdutosCarrinho = document.querySelector('#listaProdutosCarrinho');
const addItemCarrinho = document.querySelector('button')
const resultadoFinal = document.querySelector('#resultadoFinal')


let itensLista = []
localStorage.setItem('itemLista', JSON.stringify(itensLista))


const checkProdutoLista = (listaProduto, idProduto) =>{
   return(
      listaProduto.reduce((acc, actualProd)=>{
         if(actualProd.idProduto === idProduto) acc = true 
         return acc
            
      }, false)
   ) 
}



const pegarItem = evt => {

   if (evt.target.nodeName === "BUTTON") {
       const li = evt.target.parentNode;

       const idProduto = li.id
       const nomeProduto = li.querySelector('p').textContent
       const quantidadeProduto = li.querySelectorAll('input')[1].value
       const valorProduto = li.querySelectorAll('input')[0].value

      return {
              'idProduto': idProduto,
              'nomeProduto': nomeProduto,
              'quantidadeProduto': quantidadeProduto,
              'valorProduto': valorProduto
            }
   }
}

const adicionarItemCarrinho = evt =>{
   if(evt.target.nodeName === "BUTTON"){
      const {idProduto, nomeProduto, quantidadeProduto, valorProduto} = pegarItem(evt)
      
   

      if(checkProdutoLista(itensLista, idProduto)){
         const produto = document.querySelector(`#${idProduto}Carrinho`)
         const quantidadeProdutoCarrinho = parseFloat(produto.querySelectorAll('th')[1].innerHTML)
         const valorProdutoCarrinho = parseFloat(produto.querySelectorAll('th')[2].innerHTML)
         
         // console.log(produto.querySelectorAll('th'))

         produto.querySelectorAll('th')[1].innerHTML = parseFloat(quantidadeProduto) + quantidadeProdutoCarrinho
         produto.querySelectorAll('th')[2].innerHTML = (parseFloat(valorProduto))*(parseFloat(quantidadeProduto) + quantidadeProdutoCarrinho)

         itensLista = itensLista.map(produto=>{
            if(produto.idProduto === idProduto){
               produto.quantidadeProduto = parseFloat(quantidadeProduto) + quantidadeProdutoCarrinho
               produto.valorProduto = (parseFloat(valorProduto))*(parseFloat(quantidadeProduto) + quantidadeProdutoCarrinho)
            }

            return produto
         })

     
         
      }else{
         const listaProdutosCarrinho = document.querySelector(`#listaProdutosCarrinho`)
         listaProdutosCarrinho.innerHTML += `
         <tr id="${idProduto}Carrinho">
         <th>${nomeProduto}</th>
         <th>${quantidadeProduto}</th>
         <th>${valorProduto}</th>
         <th><button>Remover do carrinho</button></th>
         </tr>
         `
   
         itensLista.push(pegarItem(evt))
      }
      atualizaResultadoFinalCarrinho()
   }

   

}

const removerItemCarrinho = evt => {
    if (evt.target.nodeName === "BUTTON") {
        const th = evt.target.parentNode.parentNode;
        const nomeProduto = th.querySelectorAll('th')[0].innerHTML

        itensLista = itensLista.filter(produto => produto.nomeProduto != nomeProduto)

        th.remove();
        
        atualizaResultadoFinalCarrinho()
    }
}

const atualizaResultadoFinalCarrinho = ()=>{
   const quantidadeTotal = itensLista.reduce((acc, produto)=>{
      acc += parseInt(produto.quantidadeProduto)
      
      return acc
   },0)
   
   const valorTotal = itensLista.reduce((acc, produto)=>{
      acc += parseFloat(produto.valorProduto)
      
      return acc
   },0)

   const resultadoFinalHTML = document.querySelector('#resultadoFinal').querySelectorAll('tr > th')
   resultadoFinalHTML[3].innerHTML = valorTotal
   resultadoFinalHTML[2].innerHTML = quantidadeTotal
   
}
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




elListaProdutos.addEventListener('click', adicionarItemCarrinho);
elListaProdutosCarrinho.addEventListener('click', removerItemCarrinho);



elListaProdutos.focus();