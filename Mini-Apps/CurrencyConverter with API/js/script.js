var select = document.querySelectorAll('select');
var input = document.querySelectorAll('input');
//var API = "https://api.exchangeratesapi.io/latest";
var API = "http://data.fixer.io/api/latest?access_key=6dad5bff24835e236f2b09685ec1a253&format=1";
var tag = '';

/*
We use async function instead of fetch and .this, it's much easier

*/


async function currency() {

const res = await fetch(API);
const data =await res.json();

const arrayKeys = Object.keys(data.rates);
const rates = data.rates;


arrayKeys.map(function(item) {
return tag +=`<option value=${item}>${item}</option>`;
});
for(let i = 0; i<select.length;i++){
    select[i].innerHTML = tag;
}

function convert(i,j){
input[i].value = input[j].value*rates[select[i].value] / rates[select[j].value];
}

input[0].addEventListener('keyup',function(){convert(1,0)});
input[1].addEventListener('keyup',function(){convert(0,1)});

select[0].addEventListener('change',function(){convert(1,0)});
select[1].addEventListener('change',function(){convert(1,0)});
console.log(data);

}



var date = new Date();


document.getElementById('date').innerHTML = "Today: " + date;



function limit(i){
let limit = 8;
if(input[0].value.length>=limit){
input[0].value = input[0].value.slice(0,limit);

}


}








currency();





