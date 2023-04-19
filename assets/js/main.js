AOS.init({
    once: true
}
);
let elbookserv = document.querySelector('.book-serv-section');
let elbookstaff = document.querySelector('.book-staff-section');
let elbooktime = document.querySelector('.book-time-section');
let stafflist = elbookstaff.querySelectorAll(".list-group-item");
let datebtn = elbooktime.querySelectorAll("button");
let timelist = elbooktime.querySelectorAll(".list-group-item");
let stickremove = document.querySelector(".date-time-stick-none")

let count = 0;

for (let i = 0; i < datebtn.length; i++) {
    const element = datebtn[i];
    element.addEventListener("click", () => {
        for (let j = 0; j < datebtn.length; j++) {
            datebtn[j].classList.remove("active");
        }
        datebtn[i].classList.add("active");
    });
}

stafflist.forEach(el => {
    el.addEventListener("click", () => {
        bookstaff();
    });
});




var firstDropdown = document.getElementById("firstDropdown");
var secondDropdown = document.getElementById("secondDropdown");
var input1 = document.querySelector(".inpgrp input[type='text']");
var input2 = document.querySelectorAll(".inpgrp input[type='text']")[1];

input1.addEventListener("click", function () {
    if (firstDropdown.style.display === "block") {
        firstDropdown.style.display = "none";
    } else {
        firstDropdown.style.display = "block";
        secondDropdown.style.display = "none";
    }
});

input2.addEventListener("click", function () {
    if (secondDropdown.style.display === "block") {
        secondDropdown.style.display = "none";
    } else {
        secondDropdown.style.display = "block";
        firstDropdown.style.display = "none";
    }
});

document.addEventListener("click", function (e) {
    if (!e.target.closest(".inpgrp")) {
        firstDropdown.style.display = "none";
        secondDropdown.style.display = "none";
    }
});

// for open modal below 800px 
$('#buttonModal').on('click', function () {
    if ($(document).width() <= 800) {
        $('#searchModal').modal('show');
    }
})

$('#locationModal').on('click', function () {
    if ($(document).width() <= 800) {
        $('#placeModal').modal('show');
    }
})




function bookserv(el) {
    elbookserv.style.display = "none";
    elbookstaff.style.display = "block";
    elbooktime.style.display = "none";
    el.style.display = "none";
    stickremove.classList.remove("position-sticky")
}

function bookstaff() {
    elbookserv.style.display = "none";
    elbookstaff.style.display = "none";
    elbooktime.style.display = "block";
}
