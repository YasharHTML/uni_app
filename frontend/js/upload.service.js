const uploadData = () => {
    const formData = new FormData();
    formData.append('file', $('#file')[0].files[0]);
    // ajax request
    $.ajax({
        url: window.location.protocol + "//" + window.location.host + window.location.pathname.split("/").slice(0, 4).join("/") + "/upload_file",
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(data) {
            console.log(data);
        }
    });

}

const getData = () => {
    const e = document.getElementById("text");
    window.location.href = window.location.protocol + "//" + window.location.host + window.location.pathname.split("/").slice(0, 4).join("/") + "/get_file_by_variant/" + e.options[e.selectedIndex].text

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