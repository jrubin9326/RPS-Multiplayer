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
  
$("#submitBtn").on("click", function(event){
    event.preventDefault();
    name = $("#name-input").val().trim(); 
    console.log(name); 
    $("#playerOne").text(name); 

//   database.ref("/RPSgame").on("value", function(snapshot){
//       if (snapshot.child("playerOne").exists() && snapshot.child("pick").exists()) {
//         name = snapshot.val().name;
//         pick = snapshot.val().pick; 
//         //change the HTML to reflect local values
//         $("#playerOne").text(name);
      

}); 