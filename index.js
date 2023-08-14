 let countPosSubhanAllah = 0;
 let countPosAlhamdulliah = 0;
 let countPosAllahuwakbar = 0;


//  <----------  SubhanAllah code  -------------->
 document.getElementById('SubhanAllahIncrement').addEventListener('click', function(){
   countPosSubhanAllah+=1;
   if(countPosSubhanAllah<34)
   {
      document.getElementById('cntIncriment1').innerText = countPosSubhanAllah;
   }
   else{
      alert("You Can't Go More Than 33!");
      countPosSubhanAllah = 33;
  }
 })
 document.getElementById('SubhanAllahDecrement').addEventListener('click', function(){
   countPosSubhanAllah-=1;
    if(countPosSubhanAllah<0)
    {
        alert("You Can't Go Less Than 0!");
        countPosSubhanAllah = 0;
    }
    else{
      document.getElementById('cntIncriment1').innerText = countPosSubhanAllah;
    }
 })




//  <----------  Alhamdulliah code  -------------->

 document.getElementById('AlhamdulliahIncrement').addEventListener('click', function(){
   countPosAlhamdulliah+=1;
   if(countPosAlhamdulliah<34)
   {
      document.getElementById('cntIncriment2').innerText = countPosAlhamdulliah;
   }
   else{
      alert("You Can't Go More Than 33!");
      countPosAlhamdulliah = 33;
  }
 })

 document.getElementById('AlhamdulliahDecrement').addEventListener('click', function(){
   countPosAlhamdulliah-=1;
    if(countPosAlhamdulliah<0)
    {
        alert("You Can't Go Less Than 0!");
        countPosAlhamdulliah = 0;
    }
    else{
      document.getElementById('cntIncriment2').innerText = countPosAlhamdulliah;
    }
 })



//  <----------  Allahuwakbar code  -------------->

 document.getElementById('AllahuwakbarIncrement').addEventListener('click', function(){
   countPosAllahuwakbar+=1;
   if(countPosAllahuwakbar<34)
   {
      document.getElementById('cntIncriment3').innerText = countPosAllahuwakbar;
   }
   else{
      alert("You Can't Go More Than 33!");
      countPosAllahuwakbar = 33;
  }
 })

 document.getElementById('AllahuwakbarDecrement').addEventListener('click', function(){
   countPosAllahuwakbar-=1;
    if(countPosAllahuwakbar<0)
    {
        alert("You Can't Go Less Than 0!");
        countPosAllahuwakbar = 0;
    }
    else{
      document.getElementById('cntIncriment3').innerText = countPosAllahuwakbar;
    }
 })



 document.getElementById('resetAllBttn').addEventListener('click', function(){
   document.getElementById('cntIncriment1').innerText = 0;
   countPosSubhanAllah = 0;
 })
 document.getElementById('resetAllBttn').addEventListener('click', function(){
   document.getElementById('cntIncriment2').innerText = 0;
   countPosAlhamdulliah = 0;
 })
 document.getElementById('resetAllBttn').addEventListener('click', function(){
   document.getElementById('cntIncriment3').innerText = 0;
   countPosAllahuwakbar = 0;
 })


 //https://www.facebook.com/groups/webdevelopmentbatch8/permalink/282356814401932/