AOS.init({
    once:true
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
    element.addEventListener("click", ()=>{
    for (let j = 0; j < datebtn.length; j++) {
        datebtn[j].classList.remove("active");
    }
        datebtn[i].classList.add("active");
    });
}

stafflist.forEach(el => {
    el.addEventListener("click" , ()=>{
        bookstaff();
    });
});


function bookserv(el){
    elbookserv.style.display = "none";
    elbookstaff.style.display = "block";
    elbooktime.style.display = "none";
    el.style.display = "none";
    stickremove.classList.remove("position-sticky")
}

function bookstaff(){
    elbookserv.style.display = "none";
    elbookstaff.style.display = "none";
    elbooktime.style.display = "block";
}
