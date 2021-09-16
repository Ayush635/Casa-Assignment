console.log("hi")
let outer1=document.getElementById("outer1");
outer1.addEventListener('click',output);
function output()
{  
     
    const xhr=new XMLHttpRequest();
  
    xhr.open('POST','https://webappdemo.casaaltair.com/appliance',true);
    
    xhr.getResponseHeader('Content-type','application/json')
    //   xhr.getResponseHeader('Content-type','application/x-www-form-urlencoded');
   
    xhr.onload=function(){
        if(this.status==200)
        {  console.log (this.responseText);
         }
        else
        console.error("Communication Error")
        
    }
    
    params=" room=living room&appliance = bulb1&app_status=on/off";
    
     setTimeout(() => { xhr.send(params);
       
     }, 5000);  
    
   
   let large1=document.getElementById("large1");
   let div1=document.getElementById("div1");
   let outer1=document.getElementById("outer1")
   let inner1=document.getElementById("inner1")
   let dark1=document.getElementById("dark1")
   if(large1.style.color=="grey")

   { large1.style.color='white';
    div1.style.backgroundColor=' orangered';
    outer1.style.border='2px solid white';
    inner1.style.backgroundColor='white';
    dark1.style.color='white'

}
  else
  {
  large1.style.color='grey';
  div1.style.backgroundColor=' white';
    outer1.style.border='2px solid orangered';
    inner1.style.backgroundColor='orangered';
    dark1.style.color='black'
  }

}
let outer2=document.getElementById("outer2");
outer2.addEventListener('click',output1);
function output1()
{  

    const xhr=new XMLHttpRequest();
  
    xhr.open('POST','https://webappdemo.casaaltair.com/appliance',true);
    
    xhr.getResponseHeader('Content-type','application/json')
    //   xhr.getResponseHeader('Content-type','application/x-www-form-urlencoded');
   
    xhr.onload=function(){
        if(this.status==200)
        {  console.log (this.responseText);
         }
        else
        console.error("Communication Error")
        
    }
    
    params=" room=living room&appliance = bulb1&app_status=on/off";
    
       
    setTimeout(() => { xhr.send(params);
       
    }, 5000);
   let large2=document.getElementById("large2");
   let div2=document.getElementById("div2");
   let outer2=document.getElementById("outer2")
   let inner2=document.getElementById("inner2")
   let dark2=document.getElementById("dark2")
   if(large2.style.color=="grey")

   { large2.style.color='white';
    div2.style.backgroundColor=' orangered';
    outer2.style.border='2px solid white';
    inner2.style.backgroundColor='white';
    dark2.style.color='white'

   }
  else
  {
  large2.style.color='grey';
  div2.style.backgroundColor=' white';
    outer2.style.border='2px solid orangered';
    inner2.style.backgroundColor='orangered';
    dark2.style.color='black'
  }

}
let outer3=document.getElementById("outer3");
outer3.addEventListener('click',output3);
function output3()
{  

    const xhr=new XMLHttpRequest();
  
    xhr.open('POST','https://webappdemo.casaaltair.com/appliance',true);
    
    xhr.getResponseHeader('Content-type','application/json')
    //   xhr.getResponseHeader('Content-type','application/x-www-form-urlencoded');
   
    xhr.onload=function(){
        if(this.status==200)
        {  console.log (this.responseText);
         }
        else
        console.error("Communication Error")
        
    }
    
    params=" room=living room&appliance = bulb1&app_status=on/off";
    
       
    setTimeout(() => { xhr.send(params);
       
    }, 5000);
   
   let large3=document.getElementById("large3");
   let div3=document.getElementById("div3");
   let outer3=document.getElementById("outer3")
   let inner3=document.getElementById("inner3")
   let dark3=document.getElementById("dark3")
   if(large3.style.color=="grey")

   { large3.style.color='white';
    div3.style.backgroundColor=' orangered';
    outer3.style.border='2px solid white';
    inner3.style.backgroundColor='white';
    dark3.style.color='white'

}
  else
  {
  large3.style.color='grey';
  div3.style.backgroundColor=' white';
    outer3.style.border='2px solid orangered';
    inner3.style.backgroundColor='orangered';
    dark3.style.color='black'
  }

}
let outer4=document.getElementById("outer4");
outer4.addEventListener('click',output4);
function output4()
{  

    const xhr=new XMLHttpRequest();
  
    xhr.open('POST','https://webappdemo.casaaltair.com/appliance',true);
    
    xhr.getResponseHeader('Content-type','application/json')
    //   xhr.getResponseHeader('Content-type','application/x-www-form-urlencoded');
   
    xhr.onload=function(){
        if(this.status==200)
        {  console.log (this.responseText);
         }
        else
        console.error("Communication Error")
        
    }
    
    params=" room=living room&appliance = bulb1&app_status=on/off";
    
       
    setTimeout(() => { xhr.send(params);
       
    }, 5000);
   let large4=document.getElementById("large4");
   let div4=document.getElementById("div4");
   let outer4=document.getElementById("outer4")
   let inner4=document.getElementById("inner4")
   let dark4=document.getElementById("dark4")
   if(large4.style.color=="grey")

   { large4.style.color='white';
    div4.style.backgroundColor=' orangered';
    outer4.style.border='2px solid white';
    inner4.style.backgroundColor='white';
    dark4.style.color='white'

}
  else
  {
  large4.style.color='grey';
  div4.style.backgroundColor=' white';
    outer4.style.border='2px solid orangered';
    inner4.style.backgroundColor='orangered';
    dark4.style.color='black';
  }

}