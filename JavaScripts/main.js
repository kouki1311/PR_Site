'use strict'

const item1=document.getElementById("Work1");//作品１
const item2=document.getElementById("Work2");//作品２
const item3=document.getElementById("Work3");//作品３
const item4=document.getElementById("Work4");//作品４
const item5=document.getElementById("Work5");//作品５

const delighted=document.getElementById("Delighted");//得意なこと

const close =document.getElementById('close');//×ボタン
const cover=document.getElementById('cover');//カバー





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

Work1();
Work2();
Work3();
Work4();
Work5();
Delighted();