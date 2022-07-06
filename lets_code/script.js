const celulas = document.querySelectorAll('.celula')


let checarTurno = true

const jogadores = [
   {
    'nome': 'jogador_X',
    'objeto':'X',
    'numVitorias': 0
   },

   {
    'nome': 'jogador_O',
    'objeto':'O',
    'numVitorias': 0
 }
]

const celulasPreenchidas = Array(9)

function checkArrayItemsAreEqualToValue(array, value){
      return(!!array.reduce((acc, actual) =>  (actual === value)*acc , true))      
}


function getFeaturesWinner(celulasPreenchidas, jogador){
   const indexPatternWinner = patternToWin.reduce((acc, pattern) => {
      const values = [celulasPreenchidas[pattern[0]],celulasPreenchidas[pattern[1]],celulasPreenchidas[pattern[2]]]

      if(checkArrayItemsAreEqualToValue(values, jogador)){
         acc = pattern
      }

      return acc
   }, -1)
   
   const isWinner =  indexPatternWinner != -1 ? true : false

   return {'indexPattern':indexPatternWinner, 'isWinner':isWinner}
}

const patternToWin = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,4,8],
   [2,4,6],
   [0,3,6],
   [1,4,7],
   [2,5,8],
]



document.addEventListener("click", event =>{
   if(event.target.matches(".celula")){
      let id = event.target.id

      const celula = document.getElementById(id)
      const turno = checarTurno ? jogadores[0].objeto : jogadores[1].objeto
     
      if(!celulasPreenchidas[id-1]){
         celula.textContent = turno
         celulasPreenchidas[id-1] = turno

         checarTurno = !checarTurno
      }
      const featuresPlayer = getFeaturesWinner(celulasPreenchidas, turno)
      
      if(featuresPlayer.isWinner){
         featuresPlayer.indexPattern.forEach(element => {
            let idCelula = document.getElementById(element+1)
            idCelula.style.color = "red"
         }
       )

         const indexWinnerPlayer = jogadores.reduce((acc, jogador, index)=>{
            if(jogador.objeto === turno) acc = index
            return acc

         },'')

         const nameWinnerPlayer = jogadores[indexWinnerPlayer].nome

         jogadores[indexWinnerPlayer].numVitorias += 1
         
         const winnerPlayerHTML = document.getElementById(nameWinnerPlayer)
         winnerPlayerHTML.querySelector('h2').textContent = jogadores[indexWinnerPlayer].numVitorias

         alert(`${nameWinnerPlayer} ganhou essa rodada!`)   
      }
      
   } 

})

