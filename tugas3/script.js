const btnClose = document.getElementsByClassName("btn-close")
const btnDetail = document.getElementsByClassName("btn-data-lecturer")
const modalLecturer = document.getElementById("modal-lecturer")
const body = document.getElementsByTagName("body")

for (let index = 0; index < btnClose.length; index++) {
    btnClose[index].addEventListener("click", function(){
        modalLecturer.classList.remove("show")
        body[0].style.overflow = ""
    })
    
}
for (let index = 0; index < btnDetail.length; index++) {
    btnDetail[index].addEventListener("click", function(){
        modalLecturer.classList.add("show")
        body[0].style.overflow = "hidden"
    })
    
}