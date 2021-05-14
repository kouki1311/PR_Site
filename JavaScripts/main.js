'use strict'

const item1=document.getElementById("Work1");//作品１
const item2=document.getElementById("Work2");//作品２
const item3=document.getElementById("Work3");//作品３
const item4=document.getElementById("Work4");//作品４
const item5=document.getElementById("Work5");//作品５

const delighted=document.getElementById("Delighted");//得意なこと

const close =document.getElementById('close');//×ボタン
const cover=document.getElementById('cover');//カバー


 const fade=document.getElementsByClassName('fadein');//フェードイン
 const fadeout=document.getElementsByClassName('fadeout');//フェードアウト

 const idTarget = document.getElementById('target');
 const classList = idTarget.classList;


//作品１

const Work1=()=>{
  item1.addEventListener('mouseover',()=>{

  


    item1.className='bigsize';
   
cover.className="menu-open";


})

menu.addEventListener('mouseleave',()=>{

  item1.className="small";
  cover.className="";

 
  });

}

//作品２
const Work2=()=>
{
item2.addEventListener('mouseover',()=>{

    item2.className='bigsize2';
  cover.className='menu-open';
  
});
menu.addEventListener('mouseleave',()=>{

item2.className='small2';
cover.className="";


});
}
const Work3=()=>
{
//作品３
item3.addEventListener('mouseover',()=>{
   
    item3.className='bigsize3';
  cover.className='menu-open';
 

});
menu.addEventListener('mouseleave',()=>{

item3.className='small3';
cover.className="";

});
}

//作品４
const Work4=()=>
{

item4.addEventListener('mouseover',()=>{

    item4.className='bigsize4';
   cover.className='menu-open';

});
menu.addEventListener('mouseleave',()=>{

item4.className='small4';
cover.className="";

});
}

//作品5
const Work5=()=>{

item5.addEventListener('mouseover',()=>{

    item5.className='bigsize5';
  cover.className='menu-open';

});
menu.addEventListener('mouseleave',()=>{
  cover.className="";
item5.className='small5';

});

}
//得意なこと
const Delighted=()=>{
//得意なこと
delighted.addEventListener('mouseover',()=>{

  delighted.className='bigsize6';
cover.className='menu-open';

});
menu.addEventListener('mouseleave',()=>{

delighted.className='small6';
cover.className="";

});
}


//フェイドアウト
const fadeOut=(id, time,callback=null)=>{

  
  const elem = document.querySelector(id)
  let i = 1.0

  const timerid = setInterval( ()=>{
    // 透明度を下げる
    elem.style.opacity = i
    i -= 0.1

    // 完全に透明になったら終了
    if( i <= 0 ){
      clearInterval(timerid)
      if( typeof callback === "function" ){
        callback(elem)
      }
    }
  }, time)
}
//フェードイン
const fadeIn=(id,time,callback=null)=>
{
  const elem = document.querySelector(id)
  let i = 0.0

  const timerid = setInterval( ()=>{
    // 透明度を上げる
    elem.style.opacity = i
    i += 0.1

    // 完全に表示されたら終了
    if( i >= 1.0 ){
      clearInterval(timerid)
      if( typeof callback === "function" ){
        callback(elem)
      }
    }
  }, time)
}



Work1();
Work2();
Work3();
Work4();
Work5();
Delighted();