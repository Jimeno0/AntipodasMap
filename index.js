'use strict'

/*var Mad = document.getElementById('btnMad');
Mad.addEventListener('click',function(){

  map.centerAndZoom([-3.688510, 40.453010],5);
  var delay = 1000;
  setTimeout(function(){
  map.centerAndZoom([-3.688510, 40.453010],10);
     }, delay); 
 });


var Bcn = document.getElementById('btnBcn');
Bcn.addEventListener('click',function(){

map.centerAndZoom([-3.688510, 40.453010],5);
  var delay = 1000;
  setTimeout(function(){
  map.centerAndZoom([2.154007, 41.390205],10);
     }, delay); 
 });


var Esp = document.getElementById('btnEsp');
Esp.addEventListener('click',function(){

map.centerAndZoom([-3.688510, 40.453010],4);

 }); */


var BtnStrts = document.getElementById('BtnStrts');
BtnStrts.addEventListener('click',function(){

  map.setBasemap('streets');
 });


var BtnTopo = document.getElementById('BtnTopo');
BtnTopo.addEventListener('click',function(){

map.setBasemap('topo');
 });


var BtnSat = document.getElementById('BtnSat');
BtnSat.addEventListener('click',function(){

map.setBasemap('satellite');
 });


var BtnOcean = document.getElementById('BtnOcean');
BtnOcean.addEventListener('click',function(){

map.setBasemap('oceans');
 });
 
 
/*var btnCoord = document.getElementById('btnCoor');
btnCoord.addEventListener('click',function(){

var long = prompt('introduce longitud');
var lat = prompt('introduce latitud');
map.centerAt([long , lat ]);


 });
 */

//prompt('introduce coordenadas');