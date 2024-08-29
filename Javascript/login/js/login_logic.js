function login(){


    user = document.getElementById("username").value;
    pwd = document.getElementById("password").value;

    username = "admin"
    password = "admin@123"

    if(username == user ){
       if(password == pwd){
        window.open("welcome.html")
       }else{
        alert("password is wrong")
       }
    }else{
        alert("user name wrong ")
    }

}