'use strict'

const item1=document.getElementById("Work1");//作品１
const item2=document.getElementById("Work2");//作品２
const item3=document.getElementById("Work3");//作品３
const item4=document.getElementById("Work4");//作品４
const item5=document.getElementById("Work5");//作品５

const menu=document.getElementById("menu");//作品集ID
const main=document.getElementById("main");
const close =document.getElementById('close');//×ボタン
item1.addEventListener('click',()=>{

    item1.className='bigsize';
  
});
close.addEventListener('click',()=>{
menu.classList='';

});
