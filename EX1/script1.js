var hey;
const showPage = document.querySelector("#show");
const showTable = document.querySelector(".showTable");
function tableMaker(){
hey = ``;
let cols = document.querySelector("#cols").value;
let rows = document.querySelector("#rows").value;
var i=0,j=0;
for(i=0;i<rows;i++){
    hey += `<tr>`;
    for(j=0;j<cols;j++){
        hey += `<td>case ${i}-${j}</td>`;
    }
    hey += `</tr>`;
}
localStorage.setItem('code', hey);
showTable.style.display = "block";
}
let code = localStorage.getItem("code");
showPage.innerHTML = `<table>${code}</table>`
