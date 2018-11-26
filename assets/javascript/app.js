// set inital conditions of object to start game

//  var readyGame = {
//      playerOne : {
//         wins: 0,
//         losses: 0,
//         name : "",
//         pick : "",
//         player: ""
//      },
//      playerTwo : {
//          wins: 0,
//          losses: 0,
//          name : "",
//          pick : "",
//          player :""
//      }
//  }


//global variables
var playerOneChoice ;
var playerOneWin;
var playerTwoWin
var playersInGame; 
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBUzClX_NxCqGXDswwFfk7GuHG719hbxPo",
    authDomain: "rpsgame-31571.firebaseapp.com",
    databaseURL: "https://rpsgame-31571.firebaseio.com",
    projectId: "rpsgame-31571",
    storageBucket: "rpsgame-31571.appspot.com",
    messagingSenderId: "983422850754"
  };
  firebase.initializeApp(config);
// create a reference to firestore
  const db = firebase.firestore();

  db.settings({timestampsInSnapshots: true });

  db.collection("playerOne").get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
          console.log(doc.data()); 
          playerOneName.text(doc.data().name); 
          
      }) 
  })

  db.collection("playerTwo").get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
          console.log(doc.data().name)
          playerTwoName.text(doc.data().name)
      })
  }); 
const playerOneName = $("#playerOne");
const playerTwoName = $("#playerTwo"); 
const playerNameInput = $("#name-input").val().trim()
$("#submitBtn").on("click", function(event){
    event.preventDefault();
    //get name of Player one 
    playerOne = $("#name-input").val().trim(); 
    console.log(playerOne); 
    //set collection to reflect name of player one
    db.collection("playerOne").doc("DbqPsJfxDSqcTL3dlEYs").set({
     name: playerOne,
     choice:"Scissors"
     
 }).then(function() {
    playerOneName.text(doc.data().name); ; 
    console.log("Success")
 }).catch(function(error){
     console.log("Error writing document: ", error); 
 })
 
})

//  user can select rock paper or scissors 
// $(".choices").on("click", ".choice", function(){
//    playerOneChoice = ($(this).text())
//    console.log(playerOneChoice)
   
// })

var playerOne;
var playerTwo; 
$("#submitBtn").on("click", function(event){
    event.preventDefault();
    playerOne = $("#name-input").val().trim(); 
    console.log(playerOne); 
    // $("#playerOne").text(playerOne); 
//    database.ref().set({
//        playerOne
//    })
}); 

// database.ref("/playerOne").on("value", function (snapshot) {
    if (playerOne !== "") {
        playerTwo = $("#name-input").val().trim()
        console.log(playerTwo)
        $("#playerTwo").text(playerTwo);
    // } database.ref().set({
    //     playerTwo:playerTwo
    }
// })
console.log(playerOne, playerTwo)


// database.ref("/playerOne").on("value", function(snapshot){
//     if (Object.keys(snapshot.val().indexOf() === -1)) {
//     playerOne =(childSnapshot.val())
//     playersInGame = 1
    
// } else if (playersInGame === 1){
//        playerTwo = (childSnapshot.val()); 

// // function to handle errors
// }).catch( function(errorObject) {
//     console.log("Errors handled: "+ errorObject.code)
// }); 

// logic behind game 

if (playerOneChoice === 'rock' && playerTwoChoice === 'paper') {
    playerOneWin++
} else if (playerOneChoice === 'paper' && playerTwoChoice === 'rock') {
    playerTwoWin ++
} else if (playerOneChoice === 'scissors'&& playerTwoChoice === 'paper') {
    playerOne ++
} else if (playerOneChoice === 'paper' && playerTwoChoice === 'scissor') {
    playerTwoWin ++
} else if (playerOneChoice === 'paper' && playerTwoChoice === 'paper') {
    console.log("tie")
} else if (playerOneChoice === 'scissor' && playerTwoChoice === 'scissor') {
    console.log("tie") 
} else if (playerOneChoice === 'rock' && playerTwoChoice === 'rock') {
    console.og(tie)
} else if (playerOneChoice === 'rock' && playerTwoChoice === 'scissor') {
    playerOneWin ++

}; 
