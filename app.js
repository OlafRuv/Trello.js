const Trello = require("./main");
var trello = new Trello("key", "token");
var cardTitle = `Card Nueva ${new Date()}`;

console.log("Ejecutando!");

trello.addCard(cardTitle, "LaunchX Card Description", "IdList",
  function (error, trelloCard) {
    if (error) {
      console.log('Could not add card:', error);
    }
    else {
      console.log('Added card:', trelloCard);
    }
  });
// require('dotenv').config()

// if(!process.env.TOKEN && !process.env.KEY){
//   throw new Error('No hay configuración con Api Key y con Token')
// }

// let Trello = require("trello");
// let trello = new Trello(process.env.KEY, process.env.TOKEN);

// let cardTitle = `Card Nueva ${new Date()}`

// trello.addCard(cardTitle, "LaunchX Card Description", "627eb22d7bb08a78b5314235",
// 	function (error, trelloCard) {
// 		if (error) {
// 			console.log('Could not add card:', error);
// 		}
// 		else {
// 			console.log('Added card:', trelloCard);
// 		}
// 	});

// trello.addLabelToCard("6296d31df223560be36237d0", cover,
//     function (error, label) {
//         if (error) {
//             console.log('Could not add label:', error);
//         }
//         else {
//             console.log('Added label:', label);
//         }
//     }
// )

// trello.addLabelOnBoard("6296d31df223560be36237d0", label1,
//     function (error, label) {
//         if (error) {
//             console.log('Could not add label:', error);
//         }
//         else {
//             console.log('Added label:', label);
//         }
//     }
// )