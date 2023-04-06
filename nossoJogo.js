
                                      //! PROJETO BLACKJACK !\\         
                                       //! CÓDIGO ABAIXO 👇🏻 !\\


console.log ("Boas vindas ao jogo de BlackJack")

if (confirm("Deseja jogar uma partida? \n'OK' para SIM e 'CANCEL' para NÃO")) {

   let isOk = false
   let userCard = []
   let computerCard = []

   while (!isOk) {
      userCard.push (comprarCarta())
      userCard.push (comprarCarta())
      computerCard.push (comprarCarta())
      computerCard.push (comprarCarta())
      if (userCard[0].valor === 11 && userCard[1].valor === 11 || computerCard[0].valor === 11 && computerCard[1].valor === 11) {
         userCard = []
         computerCard = []
      } else {
         isOk = true
      }
   } 

   let userScore = userCard[0].valor + userCard[1].valor
   let computerScore = computerCard[0].valor + computerCard[1].valor

   console.log(`Usuário: ${userCard[0].texto}, ${userCard[1].texto}  = ${userScore} `)
   console.log(`Computador: ${computerCard[0].texto}, ${computerCard[1].texto} = ${computerScore}`)
   
   if (userScore > computerScore){
      console.log("Parabéns, você venceu!")
   } else if (computerScore > userScore) {
      console.log("O computador venceu, que pena!")
   } else if (userScore === computerScore) {
      console.log("A rodada terminou em empate!")
   }
 } else { 
   console.log("Obrigado pela presença, volte outra vez caso deseje jogar BlackJack!")
 } 

