function login1(){
    let user=document.getElementById("Username").value
    let pass=document.getElementById("password").value
    if(user.length==0&&pass.length==0){
      alert("Please Fullfill The form")
    }else if(user in localStorage){
        let userDetails=JSON.parse(localStorage.getItem(user))
        if(pass==userDetails.password){
            window.location="home.html"
            localStorage.setItem("userid",JSON.stringify(userDetails))
        }else{
            alert("Wrong password")
        }
    }else{
        alert("Can,t find this account")
    }
}