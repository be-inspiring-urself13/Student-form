// Selecting all input feilds
function addstudent() {
    var name = document.getElementById("inputname").value;
    var age = document.getElementById("inputage").value;
    var course = document.getElementById("course").value;
    var email = document.getElementById("inputemail").value;

    //Gender value
    var gender = "";
    if (document.getElementById("male").checked) {
        gender = "male";
    } else if (document.getElementById("female").checked) {
        gender = "female";
    }

    //Simple validation 
    if (name == "" || age == "" || gender == "" || course == "" || email == "") {
        alert("Please fill all the fields");
    return;
    }

    //Add rows to table
    var table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow();

    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = age;
    newRow.insertCell(2).innerText = gender;
    newRow.insertCell(3).innerText = course;
    newRow.insertCell(4).innerText = email;

    //Action button
    var action = newRow.insertCell(5);
    var deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete"
    deleteBtn.className = "deletebtn"
    deleteBtn.onclick = function(){
        table.deleteRow(newRow.rowIndex - 1);
    }
    action.appendChild(deleteBtn);

    //Clear form
    document.getElementById("inputname").value = "";
    document.getElementById("inputage").value = "";
    document.getElementById("male").checked = false;
    document,getElementById("female").checked = false;
    document.getElementById("course").value = "JavaScript";
    document.getElementById("inputemail").value = "";

}