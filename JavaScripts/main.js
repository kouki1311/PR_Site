'use strict'

const item1=document.getElementById("Work1");//作品１
const item2=document.getElementById("Work2");//作品２
const item3=document.getElementById("Work3");//作品３
const item4=document.getElementById("Work4");//作品４
const item5=document.getElementById("Work5");//作品５

const menu=document.getElementById("menu");//作品集ID

const close =document.getElementById('close');//×ボタン
const small=document.getElementById('small');

var width=50;//グリッド横
var Hieght=50;//グリッド縦



//作品１(
item1.addEventListener('click',()=>{

  


    item1.className='bigsize';

     
  cover.className='menu-open';
});
close.addEventListener('click',()=>{
item1.className='';
cover.className='';
});


//作品２
item2.addEventListener('click',()=>{
alert(2);
    item2.className='bigsize';
  cover.className='menu-open';
});
close.addEventListener('click',()=>{
item2.className='';
cover.className='';
});

//作品３
item3.addEventListener('click',()=>{
    alert(3);
    item3.className='bigsize';
  cover.className='menu-open';
});
close.addEventListener('click',()=>{
item3.className='';
cover.className='';
});
//作品４
item4.addEventListener('click',()=>{

    item4.className='bigsize';
  cover.className='menu-open';
});
close.addEventListener('click',()=>{
item4.className='';
cover.className='';
});
//作品5
item5.addEventListener('click',()=>{

    item5.className='bigsize';
  cover.className='menu-open';
});
close.addEventListener('click',()=>{
item5.className='';
cover.className='';
});