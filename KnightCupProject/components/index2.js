const userName=document.getElementById("name");
const emailAdress=document.getElementById("email");
const phone=document.getElementById("id");
const dateTime= document.getElementById("date");
const form=document.getElementById("form");
const errorMsg=document.getElementsByClassName("error");
const button=document.getElementsByClassName("next");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(userName.value.length == 0){
       
        errorMsg[0].style.opacity="1";
        errorMsg[0].style.display="block";
        return false;
      
        
    } else{
        errorMsg[0].style.opacity="0";
        errorMsg[0].style.display="none";

        return true;
    }
    
})

// button.addEventListener("click", myFunction);

// function myFunction() {
//     alert ("Hello World!");
//   }
// function validateName(){
//     userName.innerHTML="nskjds"
//     // if(userName.value.length == 0){
//     //     errorMsg[0].style.opacity="1";
//     //     errorMsg[0].style.display="block";
//     //     return false;
//     // }else{
//     //             errorMsg[0].style.opacity="0";
//     //             errorMsg[0].style.display="none";
//     //             return true;
//     //         }
    
// }

