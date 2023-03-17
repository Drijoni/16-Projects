window.onload = function(){
    dog();
}

var btn = document.getElementById('generate');
var API = "https://api.thedogapi.com/v1/images/search";


async function dog(){
    var res = await fetch(API);
    var data = await res.json();
    var image = data[0].url;
    console.log(data);
   document.getElementById('image').src = image;
}


