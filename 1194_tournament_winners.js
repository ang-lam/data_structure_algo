//my solution
function tournamentWinner(competitions, results) {
	let currentLead = ''
	const scores = {}
	for (let i=0; i < competitions.length; i++){
		const [homeTeam, awayTeam] = competitions[i]
		const winner = results[i] === 1 ? homeTeam : awayTeam
		winner in scores ? scores[winner] += 3 : scores[winner] = 3
		if (currentLead === ''){
			currentLead = winner
		}
		else {
			scores[winner] > scores[currentLead] ? currentLead = winner : null
		}
	}
  return currentLead;
}

//algoexpert solution
// function tournamentWinner(competitions, results) {
// 	let currentLead = ''
// 	const scores = {}
// 	for (let i=0; i < competitions.length; i++){
// 		const [homeTeam, awayTeam] = competitions[i]
// 		const winner = results[i] === 1 ? homeTeam : awayTeam
// 		winner in scores ? scores[winner] += 3 : scores[winner] = 3
// 		if (currentLead === ''){
// 			currentLead = winner
// 		}
// 		else {
// 			scores[winner] > scores[currentLead] ? currentLead = winner : null
// 		}
// 	}
//   return currentLead;
// }