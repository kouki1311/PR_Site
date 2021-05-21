'use strict'

const item1=document.getElementById("Work1");//作品１
const item2=document.getElementById("Work2");//作品２
const item3=document.getElementById("Work3");//作品３
const item4=document.getElementById("Work4");//作品４
const item5=document.getElementById("Work5");//作品５

const delighted=document.getElementById("Delighted");//得意なこと

const close =document.getElementById('close');//×ボタン
const cover=document.getElementById('cover');//カバー5





//作品１

const Work1=()=>{
  item1.addEventListener('mouseover',()=>{

  
  

    item1.className='workbigsize1';
  
cover.className="menu-open";
fade("#Work1",60,()=>{

})


})

item1.addEventListener('mouseleave',()=>{

  item1.className="worksmall1";
  cover.className="";
fade("#Work1",60,()=>{

})
  });

}

//作品２
const Work2=()=>
{
item2.addEventListener('mouseover',()=>{

    item2.className='workbigsize2';
  cover.className='menu-open';
fade("#Work2",60,()=>{
  
})
});
item2.addEventListener('mouseleave',()=>{

item2.className='worksmall2';
cover.className="";

fade("#Work2",60,()=>{

})
});
}
const Work3=()=>
{
//作品３
item3.addEventListener('mouseover',()=>{
   
 
    item3.className='workbigsize3';
  cover.className='menu-open';
  fade("#Work3",60,()=>{
   
  })

});
item3.addEventListener('mouseleave',()=>{

item3.className='worksmall3';
cover.className="";
fade("#Work3",60,()=>{

})
});
}

//作品４
const Work4=()=>
{

item4.addEventListener('mouseover',()=>{


    item4.className='workbigsize4';
   cover.className='menu-open';
  //  fade("#Work4",60,()=>{
 
  // })
});
item4.addEventListener('mouseleave',()=>{

item4.className='worksmall4';
cover.className="";
fade("#Work4",60,()=>{

})
});
}

//作品5
const Work5=()=>{

item5.addEventListener('mouseover',()=>{

    item5.className='workbigsize5';
  cover.className='menu-open';
  // fade("#Work5",60,()=>{
 
  // })
});
item5.addEventListener('mouseleave',()=>{

  cover.className="";
item5.className='worksmall5';
fade("#Work5",60,()=>{
  
})
});

}
//得意なこと
const Delighted=()=>{
//得意なこと
delighted.addEventListener('mouseover',()=>{
  
  delighted.className='delightedbigsize6';
cover.className='menu-open';
// fade("#Delighted",60,()=>{

// })
});
delighted.addEventListener('mouseleave',()=>{

delighted.className='delightedsmall6';
cover.className="";

fade("#Delighted",60,()=>{

})
});
}



/**
 * 要素をフェードする
 *
 * @param {string} id
 * @param {number} time
 * @param {function} [callback]
 */
const fade=(id, time, callback=null)=>{
  const elem = document.querySelector(id)
  let i = 0;//透明は0

  const timerid = setInterval( ()=>{
    // 透明度を上げる
    elem.style.opacity = i;

    
    i += 0.1;//idの取得したものを0.1＋ずつされる

    // 完全に表示されたら終了
    if( i >= 1.0 ){//表示した場合
      clearInterval(timerid);
      if( typeof callback === "function" ){
        callback(elem);
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
