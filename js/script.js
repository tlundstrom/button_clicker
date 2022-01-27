function hideBtn(){
    var btn = document.getElementById("addBtn");

    btn.style.display = "none";
}

function likeAlert(){
    alert("Ninja was liked.");
}

function toggleBtn(){
    var element = document.getElementById("login-logout");

    if (element.innerHTML === "Login"){
        element.innerHTML = "Logout";
    } else {
        element.innerHTML = "Login";
    }
}

