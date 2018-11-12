// set inital conditions of object to start game

 var readyGame = {
     playerOne : {
        wins: 0,
        losses: 0,
        name : "",
        pick : "",
     },
     playerTwo : {
         wins: 0,
         losses: 0,
         name : "",
         pick : "",
         letWinner : false,
     }
 }

//global variables
var playerOneChoice ;
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
// create a reference to firebase
  var database = firebase.database();

  var connectionsRef = database.ref("/connections")

  var connectedRef = database.ref(".info/connected");
  
  //when the user is connected add them to the connections list
  connectedRef.on("value", function(snap){
  if (snap.val()) {
      var con = connectionsRef.push(true);
      //remove user from connections when they disconnect
      con.onDisconnect().remove();
  }; 
}); 
//  user can select rock paper or scissors 
$(".choices").on("click", ".choice", function(){
   playerOneChoice = ($(this).text())
   console.log(playerOneChoice)
   
})


$("#submitBtn").on("click", function(event){
    event.preventDefault();
    readyGame.playerOne.name = $("#name-input").val().trim(); 
    console.log(name); 
   database.ref().push({
       playerOneName:readyGame.playerOne.name,
       playerOneChoice:playerOneChoice
   })
}); 


database.ref().on("child_added", function(childSnapshot){
    playerOne = (childSnapshot.val().name)
    $("#playerOne").text(playerOne)
// function to handle errors
}, function(errorObject) {
    console.log("Errors handled: "+ errorObject.code)
});

