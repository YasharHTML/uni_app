const sendScore = () => {
    let my_info = $("#my_form").serializeArray();
    console.log(my_info);
    if (my_info[0].value.length > 0 && my_info[1].value.length > 0) {
        const text = window.location.href;
        const id = text.split('/')[text.split('/').length - 1];
        if (id === $("#my_form").serializeArray()[0].value) {
            $.ajax(
                {
                    url: window.location.href.substring(0, window.location.href.lastIndexOf("/") + 1),
                    type: 'POST',
                    data: { id: my_info[0].value, score: my_info[1].value },
                    success: function (data) {
                        let newPathList = window.location.pathname.split("/").slice(0, 4).join("/");
                        window.location.href = newPathList;
                    }
                }
            )
        } else {
            alert("Girdiyiniz ID tələbəyə aid deyildir!");
        }
    } else {
        alert("Doldurunuz!");
    }
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