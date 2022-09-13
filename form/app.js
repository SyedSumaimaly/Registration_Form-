document.querySelector('#admin')
 function ad(){
    window.location.href = "login.html"
 }

function saveData() {
    var firstName = document.getElementById("FirstName").value;
    var lastName = document.getElementById("LastName").value;
    var email = document.getElementById("Email").value;
    var city = document.getElementById("City").value;
    var course = document.getElementById("Course").value;
    var dateOfBirth = document.getElementById("DOB").value;
    var Gen = document.getElementById("gender").value
    var male = document.getElementById("Male").value;
    var female = document.getElementById("Female").value;
    var cnic = document.getElementById("CNIC").value;
    var fatherCnic = document.getElementById("fCNIC").value;
    var address = document.getElementById("Address").value;
    var lastqualification = document.getElementById("lastQualification").value;
    var picture = document.getElementById("Picture").value;
    const Img = document.getElementById("Picture");
    var uploadImg = "";

    // function AddImg() {
    //     const reader = new FileReader();
    //     reader.addEventListener("load", () => {
    //         uploadImg = reader.result;
    //         document.getElementById("display_img").style.backgroundImage = `url(${uploadImg})`;
    //     });
    //     return
    //     reader.readAsDataURL(this.files[0]);
    // }


    var userData = {
        firstname: firstName,
        lastname: lastName,
        Email: email,
        City: city,
        Course: course,
        DOB: dateOfBirth,
        Gender: Gen,
        CNIC: cnic,
        FCNIC: fatherCnic,
        Add: address,
        LastQualification: lastqualification,
    };

    var json = JSON.stringify(userData);
    localStorage.setItem("userData", json);

};


// LogIn

function login(){
    var userN = document.getElementById("user").value;
    var userP = document.getElementById("userpass").value;
    event.preventDefault();
    if(userN == "admin" && userP == "admin"){
        console.log("hello")
        window.location.href = "admin.html"
    } else {
        alert("pass incorrect")
    };
};

// LogIn


// Admin 


var formData = document.getElementById("table_row");
var data = localStorage.getItem("userData");
   obj = JSON.parse(data);

function showData(){
    var tr = `
    <tr>
    <td>${obj.firstname} </td>
    <td>${obj.lastName} </td>
    <td>${obj.Email} </td>
    <td>${obj.City} </td>
    <td>${obj.Course} </td>
    <td>${obj.DOB} </td>
    <td>${obj.Gender} </td>
    <td>${obj.CNIC} </td>
    <td>${obj.FCNIC} </td>
    <td>${obj.LastQualification} </td>
    <td>${obj.Add} </td>
    </tr>
    `;
    formData.innerHTML += tr
};

{/* <td><button id="del-btn ">Delete</button></td> */}
showData();