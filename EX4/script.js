setInterval(changeLetter = () =>{
    let NewTxt = "";
    let i=0;
    let Txt = document.querySelector('#text').innerText;
    let size = Txt.length -1 ;
    tmp = Txt[size];
    
    NewTxt = tmp;
    for(i;i<size;i++){
        NewTxt += Txt[i];
    }
    document.querySelector('#text').innerHTML = NewTxt;
},1000);
