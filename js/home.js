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
 
let input2 = document.getElementById("input2");

//Callback function i read about it   
// TODO  take the sumbtion value form the from 
// TODO  Edit the locations 
// TODO  Edit the style more   
input2.addEventListener('on',function submit(event) {
    
 event.preventDefault();
 let name = event.target.name.value
 let email = event.target.email.value
 let textarea = event.target.textarea.value
 console.log(name);

})
