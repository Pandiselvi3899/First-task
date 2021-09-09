
var  request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
var data=JSON.parse(request.response);
console.log(data);
var result=data.reduce((acc,ele)=>acc+ele.population,0);
console.log(result);
}
