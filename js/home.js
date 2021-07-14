 //setattriubte 
let hidden = true;
function limClick(){
    
    let button = document.getElementById('bt');
    let span = document.getElementById("lima");
    let insideWord = document.createElement('span')
    let lima = document.getElementById('change')
    lima.style.visibility = 'hidden';
    console.log(lima)
  
    if(hidden ) {
        hidden=!hidden;
        button.appendChild(insideWord);
        span.style.visibility = 'hidden';
        insideWord.innerHTML= '9AM-5PM';
        lima.style.visibility = 'visible';

        
    } else {
        insideWord.innerHTML= '';
        document.getElementById('lima').style.visibility = 'visible';
        
    }
   }
 

 