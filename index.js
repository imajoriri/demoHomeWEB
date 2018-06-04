(window.onload = function() {
  var database = firebase.database();
  var test = database.ref("light");
  test.on('value', function(snapshot) {
    if(snapshot.val().isOn === true){
    console.log(snapshot.val());
      $('.filter-img').css('opacity','0.9');
    }else{
    console.log(snapshot.val());
      $('.filter-img').css('opacity','0.3');
    }
  });
})();
