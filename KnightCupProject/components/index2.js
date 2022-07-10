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
//const btn= document.getElementsByClassName("btnext");
const divform=document.getElementsByClassName("form2");


// btnext.addEventListener("click",function(e){
   
//      if(!validateName() || !validateEmail() || validatePhone() ){
     
       
  
//     // validateName();
//     // validateEmail();
//     e.preventDefault();
    
    
//     return true;
// }    
    
// }) 



document.querySelectorAll(".mark" ).forEach(btn =>{
    btn.addEventListener("click",function(){this.parentElement.style.display="none"})});


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
                title[index].innerHTML=message;
                userName.style.background="#FFEFEF";
                userName.style.color="#DC3545";
                return false;

               
            } else{
                errorMsg[index].style.opacity="0";
                errorMsg[index].style.display="none";
                success[index].style.opacity="1";
                fail[index].style.opacity="0";
                userName.style.background="white";
                userName.style.color="black";
               
             
                return true;
                
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
        return false;
    } else{
        errorMsg[index].style.opacity="0";
        errorMsg[index].style.display="none"
        success[index].style.opacity="1";
        fail[index].style.opacity="0";
        emailAdress.style.background="white";
        emailAdress.style.color="black";
        
        return true;

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
        return false;
    }else{
        errorMsg[index].style.opacity="0";
        errorMsg[index].style.display="none"
        success[index].style.opacity="1";
        fail[index].style.opacity="0";
        phone.style.background="white";
        phone.style.color="black";
        
        return true;
    }
}

function showtab(){

    form.style.display="none";
    divform.style.display="block";
    
    }



