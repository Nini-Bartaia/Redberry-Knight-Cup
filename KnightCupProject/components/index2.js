const userName=document.getElementById("name");
const emailAdress=document.getElementById("email");
const phone=document.getElementById("id");
const dateTime= document.getElementById("date");
const form=document.getElementById("form");
const errorMsg=document.getElementsByClassName("error");
const success= document.getElementsByClassName("success");
const button=document.getElementsByClassName("next");
const err=document.getElementsByClassName("errorname");
const sign=document.getElementsByClassName("wrapper");
const title=document.getElementsByClassName("errortitle");
const fail=document.getElementsByClassName("failed");


form.addEventListener("submit",(e)=>{
  
    validateName();
    e.preventDefault();
   
    // validate(userName,0,"please enter valid name");
    // validate(emailAdress,1,"email adress is not correct");
    
})

// function validate(id,index,message){
//     if(id==userName){
//     if(id.value.trim()==="" || id.value== null){
//         err[index].innerHTML=message;
//         errorMsg[index].style.opacity="1";
//         fail[index].style.opacity="1";
//         errorMsg[index].style.display="block";
//         success[index].style.opacity="0";
//        // title[index].innerHTML=title2;
//        title.innerHTML="Invalid name";
       
//     } else{
//         errorMsg[index].style.opacity="0";
//         errorMsg[index].style.display="none"
//         errorMsg[index].innerHTML="";
//         success[index].style.opacity="1";
//         //sign[index].content="";
//         fail[index].style.opacity="0";
        
//     }
// }
// else if(id==emailAdress){
    

//         let regex=/^[^@]+@(redberry)\.ge$/i;
//         let valid=regex.match(id.value);
//         if(valid=="true"){
//             errorMsg[index].style.opacity="0";
//             errorMsg[index].style.display="none"
//             errorMsg[index].innerHTML="";
//             success[index].opacity="1";
//             sign[index].content="";
//             fail[index].opacity="0";
//             return valid;
          
//         } else {
//             err[index].innerHTML=message;
//             errorMsg[index].style.opacity="1";
//             errorMsg[index].style.display="block";
//             success[index].opacity="0";
//             //title[index].innerHTML=title2;
//             title.innerHTML="Invalid email";
//             fail[index].opacity="1";

//         }
    
// }

// }

function validateName(){
    let id=userName;
    let index=0;
    let message="invalid name";
    let message2="Please enter valid name"
    if(id.value.trim()==="" || id.value== null || id.value.trim().length <=2 ||id.value.length==0){
                err[index].innerHTML=message2;
                errorMsg[index].style.opacity="1";
                fail[index].style.opacity="1";
                errorMsg[index].style.display="block";
                success[index].style.opacity="0";
               // title[index].innerHTML=title2;
                title[index].innerHTML=message;
               
            } else{
                errorMsg[index].style.opacity="0";
                errorMsg[index].style.display="none"
                errorMsg[index].innerHTML="";
                success[index].style.opacity="1";
                //sign[index].content="";
                fail[index].style.opacity="0";
                
            }

}

