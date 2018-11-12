// set inital conditions of object to start game

 var readyGame = {
     playerOne : {
        wins: 0,
        loses: 0,
        name = '',
        letWinner = false,
     },
     playerTwo : {
         wins: 0,
         loses: 0,
         name = '',
         letWinner = false,
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
  
  if (snap.val()) {
      var con = connectionsRef.push(true);
      //remove user from connections when they disconnect
      con.onDisconnect().remove();
  }; 
  $("#submitBtn").on("click", function(){

  })
  //updates page when playerOne info has changed
  database.ref("/playerOne").on("value", function(snapshot){
      if (snapshot.child("name").exists()) {
        name = snapshot.val().name;
      }
  })

