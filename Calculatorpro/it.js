/*function y(){
    alert("hgkjh");
}

 ////upr
 //u.addEventListener("click",funn);
 /*yt.addEventListener("load",function(){*/

let st="";
 let yi=document.getElementsByClassName('btnn');
for(let i=0;i<yi.length;i++){
    
 

      
        yi[i].addEventListener("click", function(){
          
       if(yi[i].innerHTML=="AC"){
        st= "";
       document.getElementById('yt').innerHTML=st;
       }
       else
       { 
        st=st+yi[i].innerHTML;
    document.getElementById('yt').innerHTML=st;//inner
    console.log(yi[i].innerHTML);
       }
        
        })
   
    
 }

 for(let i=0;i<yi.length;i++){
if(yi[i].innerHTML=="DE"){
  
   let y= st.pop();
   document.getElementById('yt').innerHTML=y;
   }}
 let yp=document.getElementById("ut");
 yp.addEventListener('click',function(){
st=eval(st);
    document.getElementById('yt').innerHTML=st;

 })