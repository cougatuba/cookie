  var fans = 0;
  var rocCount = 0;
  var rocCost = 10;
  var tailCount = 0;
  var tailCost = 100;
  var seasonCount = 0;
  var seasonCost = 500;
  var tvCount = 0;
  var tvCost = 1000;
  var espnCount = 0;
  var espnCost = 5000;
  var incCount = 0;
 
  function increment(){
    fans+= 1;
    document.getElementById('click').style.display = "none";
    document.getElementById('number').innerHTML = parseInt(fans);
    bgColor();
   }
 
  function save(){
    document.cookie = fans + ',' + rocCount + ',' + rocCost + ',' + tailCount + ',' + tailCost + ',' + seasonCount + ',' + seasonCost + ',' + tvCount + ',' + tvCost + ',' + espnCount + ',' + espnCost;   
    console.log(document.cookie)
    document.getElementById('info').value =  "Game Saved";
  } 

  function checkCookie(){
    var beg = 0;
    var cookie = document.cookie;
    console.log(cookie);
    var arr = cookie.split(',');
    console.log(arr);
    console.log(arr.length);
    fans = parseInt(arr[0]);
    rocCount = parseInt(arr[1]);
    rocCost = parseInt(arr[2]);
    tailCount = parseInt(arr[3]);
    tailCost = parseInt(arr[4]);
    seasonCount = parseInt(arr[5]);
    seasonCost = parseInt(arr[6]);
    tvCount = parseInt(arr[7]);
    tvCost = parseInt(arr[8]);
    espnCount = parseInt(arr[9]);
    espnCost = parseInt(arr[10]);
	
    document.getElementById('rocCount').innerHTML = parseInt(rocCount);
    document.getElementById('rocCost').innerHTML = parseInt(rocCost);
    document.getElementById('tailCount').innerHTML = parseInt(tailCount);
    document.getElementById('tailCost').innerHTML = parseInt(tailCost);
	document.getElementById('seasonCount').innerHTML = parseInt(seasonCount);
    document.getElementById('seasonCost').innerHTML = parseInt(seasonCost);
	document.getElementById('tvCount').innerHTML = parseInt(tvCount);
    document.getElementById('tvCost').innerHTML = parseInt(tvCost);
	document.getElementById('espnCount').innerHTML = parseInt(espnCount);
    document.getElementById('espnCost').innerHTML = parseInt(espnCost);
    document.getElementById('number').innerHTML = fans;
	bgColor();
  }

  function erase(){
    document.getElementById('number').innerHTML = 0;
    document.cookie = 0;
    fans = 0;
    rocCount = 0;
    rocCost = 10;
    tailCount = 0;
    tailCost = 100;
    seasonCount = 0;
    seasonCost = 500;
    tvCount = 0;
    tvCost = 1000;
    espnCount = 0;
    espnCost = 5000;
    incCount = 0;

    document.getElementById('rocCount').innerHTML = 0;
    document.getElementById('rocCost').innerHTML = 10;
    document.getElementById('tailCount').innerHTML = 0;
    document.getElementById('tailCost').innerHTML = 100;
    document.getElementById('seasonCount').innerHTML = 0;
    document.getElementById('seasonCost').innerHTML = 500;
    document.getElementById('tvCount').innerHTML = 0;
    document.getElementById('tvCost').innerHTML = 1000;
    document.getElementById('espnCount').innerHTML = 0;
    document.getElementById('espnCost').innerHTML = 5000;
    document.getElementById('info').value =  "Save has been Erased";
    save();
  }


  var incTimer = setInterval(function() {
   if(incCount >= 1){
     increment();
     incCount -= 1;
   }
  }, 10);

  var roctimer = setInterval(function() {
    for(i = 0; i < rocCount; i++){
      incCount += .01;
    }
  }, 100);

  var tailtimer = setInterval(function() {
    for(i = 0; i < tailCount; i++){
      incCount += .1;
    }
  }, 100);
  
  var seasontimer = setInterval(function() {
    for(i = 0; i < seasonCount; i++){
      incCount += 1;
    }
  }, 100);
  
  var tvtimer = setInterval(function() {
    for(i = 0; i < tvCount; i++){
      incCount += 10;
    }
  }, 100);
   
  var espntimer = setInterval(function() {
    for(i = 0; i < espnCount; i++){
      incCount += 100;
    }
  }, 100);
  
  function addOneRoc(){
    if(fans < rocCost){
      document.getElementById('info').value = "Not enough fans";
    } else {
    fans = fans - Math.round(rocCost);
    document.getElementById('number').innerHTML = fans;
    rocCount+= 1;
    document.getElementById('rocCount').innerHTML = parseInt(rocCount);
    rocCost += Math.floor(rocCount * 1.6);
    document.getElementById('rocCost').innerHTML = parseInt(rocCost);    
    document.getElementById('info').value = "Roc Pass purchased";
    bgColor();
    }
  }

  function addOneTail(){
    if(fans < tailCost){
      document.getElementById('info').value = "Not enough fans";
    }  else {
      fans = fans - Math.round(tailCost);
      document.getElementById('number').innerHTML = fans;
      tailCount += 1;
      document.getElementById('tailCount').innerHTML = parseInt(tailCount);
    tailCost += Math.floor(tailCount * 4.8);
    document.getElementById('tailCost').innerHTML = parseInt(tailCost);
    document.getElementById('info').value = "Tailgate Party purchased";
    bgColor();
    }
  }

  function addOneSeason(){
    if(fans < seasonCost){
      document.getElementById('info').value = "Not enough fans";
    }  else {
      fans = fans - Math.round(seasonCost);
      document.getElementById('number').innerHTML = fans;
      seasonCount += 1;
      document.getElementById('seasonCount').innerHTML = parseInt(seasonCount);
    seasonCost += Math.floor(seasonCount * 10.8);
    document.getElementById('seasonCost').innerHTML = parseInt(seasonCost);
    document.getElementById('info').value = "Season Tickets purchased";
    bgColor();
    }
  }  
  
  function addOneTv(){
    if(fans < tvCost){
      document.getElementById('info').value = "Not enough fans";
    }  else {
      fans = fans - Math.round(tvCost);
      document.getElementById('number').innerHTML = fans;
      tvCount += 1;
      document.getElementById('tvCount').innerHTML = parseInt(tvCount);
    tvCost += Math.floor(seasonCount * 16.8);
    document.getElementById('tvCost').innerHTML = parseInt(tvCost);
    document.getElementById('info').value = "BYU TV subscription purchased";
    bgColor();
    }
  }    
  
  function addOneEspn(){
    if(fans < espnCost){
      document.getElementById('info').value = "Not enough fans";
    }  else {
      fans = fans - Math.round(espnCost);
      document.getElementById('number').innerHTML = fans;
      espnCount += 1;
      document.getElementById('espnCount').innerHTML = parseInt(espnCount);
    espnCost += Math.floor(espnCount * 22.8);
    document.getElementById('espnCost').innerHTML = parseInt(espnCost);
    document.getElementById('info').value = "ESPN deal purchased";
    bgColor();
    }
  }    
  
  function bgColor(){
    if(rocCost > fans){
      document.getElementById('rocButton').style.backgroundColor = "#453E2C";
      document.getElementById('rocImg').style.opacity = ".4";
	  document.getElementById('rocButton').style.color = "gray";
    } else {
      document.getElementById('rocButton').style.backgroundColor = "#C5AF7D";
      document.getElementById('rocImg').style.opacity = "1";
	  document.getElementById('rocButton').style.color = "white";
    }
    if(tailCost > fans){
      document.getElementById('tailButton').style.backgroundColor = "#453E2C";
      document.getElementById('tailImg').style.opacity = ".4";
	  document.getElementById('tailButton').style.color = "gray";
    } else {
      document.getElementById('tailButton').style.backgroundColor = "#C5AF7D";
      document.getElementById('tailImg').style.opacity = "1";
	  document.getElementById('tailButton').style.color = "white";
    }
	if(seasonCost > fans){
      document.getElementById('seasonButton').style.backgroundColor = "#453E2C";
      document.getElementById('seasonImg').style.opacity = ".4";
	  document.getElementById('seasonButton').style.color = "gray";
    } else {
      document.getElementById('seasonButton').style.backgroundColor = "#C5AF7D";
      document.getElementById('seasonImg').style.opacity = "1";
	  document.getElementById('seasonButton').style.color = "white";
    }
	if(tvCost > fans){
      document.getElementById('tvButton').style.backgroundColor = "#453E2C";
      document.getElementById('tvImg').style.opacity = ".4";
	  document.getElementById('tvButton').style.color = "gray";
    } else {
      document.getElementById('tvButton').style.backgroundColor = "#C5AF7D";
      document.getElementById('tvImg').style.opacity = "1";
	  document.getElementById('tvButton').style.color = "white";
    }
	if(espnCost > fans){
      document.getElementById('espnButton').style.backgroundColor = "#453E2C";
      document.getElementById('espnImg').style.opacity = ".4";
	  document.getElementById('espnButton').style.color = "gray";
    } else {
      document.getElementById('espnButton').style.backgroundColor = "#C5AF7D";
      document.getElementById('espnImg').style.opacity = "1";
	  document.getElementById('espnButton').style.color = "white";
    }

  }
