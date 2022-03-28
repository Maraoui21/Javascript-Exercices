khalid = () =>{
    const name = document.querySelector('#name').value;
const template = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{6,8}$/
const test = template.test(name);
if(test){
    alert("welcome");
}
else{
    alert("hamid");
}
}