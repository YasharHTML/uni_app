const sendStudentData = () => {
    const formData = new FormData();
    formData.append('file', $('#file')[0].files[0]);
    // ajax request
    $.ajax({
        url: window.location.protocol + "//" + window.location.host + window.location.pathname.split("/").slice(0, 4).join("/") + "/upload_file",
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {
            console.log(data);
        }
    });

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

window.onload = () => {
    if (!window.location.pathname.includes("/qa")) {
        document.querySelector("body").style.display = "none";
    }
}