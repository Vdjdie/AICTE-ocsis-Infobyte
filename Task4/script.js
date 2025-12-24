function login() {
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;

    if (u === "dipika" && p === "dipika@123") {
        alert("Login Successful");
        document.getElementById("login").style.display = "none";
        document.getElementById("reservation").style.display = "block";
    } else {
        alert("Invalid Login");
    }
}

function reserve() {
    let name = document.querySelector("#reservation input[placeholder='Name']").value;
    let trainNo = document.querySelector("#reservation input[placeholder='Train Number']").value;
    let trainName = document.querySelector("#reservation input[placeholder='Train Name']").value;
    let classType = document.querySelector("#reservation input[placeholder='Class Type']").value;
    let date = document.querySelector("#reservation input[type='date']").value;
    let from = document.querySelector("#reservation input[placeholder='From']").value;
    let to = document.querySelector("#reservation input[placeholder='To']").value;

    if (!name || !trainNo || !trainName || !classType || !date || !from || !to) {
        alert("Please fill all the fields");
        return;
    }

    alert("Ticket Reserved Successfully");
}


function showCancel() {
    document.getElementById("reservation").style.display = "none";
    document.getElementById("cancel").style.display = "block";
}

function cancelTicket() {
    let pnr = document.getElementById("pnr").value;
    if (pnr === "") {
        alert("Enter PNR Number");
    } else {
        alert("Ticket Cancelled Successfully");
    }
}
