const authenticate = async() => {
    let password = prompt("Enter your password to authenticate");
    await $.ajax({
        url: window.location.href + "/password_check",
        type: 'POST',
        data: {
            password
        },
        success: function(data) {
            sendAjaxRequest();
        },
        error: function(data) {
            authenticate();
        }
    })
}

const sendAjaxRequest = async() => {
    await $.ajax({
        url: window.location.href + "/get_all",
        type: 'GET',
        success: function(data) {
            for (let i = 0; i < data.length; i++) {
                console.log(window.location.pathname.substring(window.location.pathname.lastIndexOf("/")))

                document.getElementById('enter_here').innerHTML += `
            <tr class="secret-element">
                <th scope="row">${i + 1}</th>
                <td>${data[i]._id}</td>
                <td>${data[i].name}</td>
                <td>${data[i].surname}</td>
                <td>${data[i].variant}</td>
                <td>${data[i].score}</td>
                <td><button class='btn btn-primary' onclick='loadText(${data[i]._id})'>Get File</button></td>
                <td><button class='btn btn-primary' onclick='assessStudent(${data[i]._id})'>Assess Student</button></td>
            </tr>`;

            };
        }
    });

    document.getElementById("dtBasicExample").style.display = "block";
}

const navigateToAddStudent = () => {
    let newPathList = window.location.pathname.split("/").slice(0, 4).join("/");
    window.location.href = newPathList + "/add_student";
}

const assessStudent = (id) => {
    let newPathList = window.location.pathname.split("/").slice(0, 4).join("/");
    window.location.href = newPathList + "/assess_student/" + id;
}

const loadText = (id) => {
    let newPathList = window.location.pathname.split("/").slice(0, 4).join("/");
    window.location.href = newPathList + "/get_file_by_id/" + id;
}

const goHome = () => {
    let newPathList = window.location.pathname.split("/").slice(0, 4).join("/");
    window.location.href = newPathList;
}

const editStudent = (id) => {
    let newPathList = window.location.pathname.split("/").slice(0, 4).join("/");
    window.location.href = newPathList + "/edit_student/" + id;
}

window.onload = () => {
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/")) == "/qa") {
        authenticate();
    } else {
        sendAjaxRequest();
    }
}