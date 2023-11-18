function register(){
    let Accdetails={
        username:user.value,
        accno:accno.value,
        password:pass.value,
        accbalance:0
    }
    console.log(Accdetails);
    if(Accdetails.accno in localStorage){
        alert("This account already exist")
    }else{
        localStorage.setItem(Accdetails.accno,JSON.stringify(Accdetails))
        alert("Account created successfully")
        window.location="login.html"
    }
}