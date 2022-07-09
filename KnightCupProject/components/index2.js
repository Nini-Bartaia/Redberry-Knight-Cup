const userName=document.getElementById("name");
const emailAdress=document.getElementById("email");
const phone=document.getElementById("phone");
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
    validateEmail();
    e.preventDefault();
   
    // validate(userName,0,"please enter valid name");
    // validate(emailAdress,1,"email adress is not correct");
    
})

document.querySelectorAll(".mark" ).forEach(btn =>{
    btn.addEventListener("click",function(){this.parentElement.style.display="none"})});


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
    let message="Invalid name";
    let message2="Please enter valid name"
    if(id.value.trim()==="" || id.value== null || id.value.trim().length <=2 ||id.value.length==0){
                err[index].innerHTML=message2;
                errorMsg[index].style.opacity="1";
                fail[index].style.opacity="1";
                errorMsg[index].style.display="block";
                success[index].style.opacity="0";
               // title[index].innerHTML=title2;
                title[index].innerHTML=message;
                userName.style.background="#FFEFEF";
                userName.style.color="#DC3545";

               
            } else{
                errorMsg[index].style.opacity="0";
                errorMsg[index].style.display="none"
                //errorMsg[index].innerHTML="";
                success[index].style.opacity="1";
                //sign[index].content="";
                fail[index].style.opacity="0";
                
            }

}

function validateEmail(){
    let id=emailAdress;
    let index=1;
    let message="Invalid email";
    let message2="Please enter valid email address"
    let regex=/^[^@]+@(redberry)\.ge$/i;
    let valid=regex.test(id.value);
    if(id.value.length==0 || valid==false){
        err[index].innerHTML=message2;
        errorMsg[index].style.opacity="1";
        fail[index].style.opacity="1";
        errorMsg[index].style.display="block";
        success[index].style.opacity="0";
        title[index].innerHTML=message;
        emailAdress.style.background="#FFEFEF";
        emailAdress.style.color="#DC3545";
    } else{
        errorMsg[index].style.opacity="0";
        errorMsg[index].style.display="none"
        success[index].style.opacity="1";
        fail[index].style.opacity="0";

    }
    

}


function validatePhone(){
    let id=phone;
    let index=2;
    let message="Invalid phone";
    let message2="Please enter valid phone number";
    let reg=/^\d{9}$/;
    let tel=reg.test(id.value);
    if(id.value.length==0 || id.value.length>9 || tel==false){
        err[index].innerHTML=message2;
        errorMsg[index].style.opacity="1";
        fail[index].style.opacity="1";
        errorMsg[index].style.display="block";
        success[index].style.opacity="0";
        title[index].innerHTML=message;
        phone.style.background="#FFEFEF";
        phone.style.color="#DC3545";
    }else{
        errorMsg[index].style.opacity="0";
        errorMsg[index].style.display="none"
        success[index].style.opacity="1";
        fail[index].style.opacity="0";
    }
}




