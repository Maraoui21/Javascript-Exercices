const tab = [
    {   title:"lundi",
        value:90,
        img: "./img/green.png"
    },
    {   title:"mardi",   
        value:60,
        img: "./img/yellow.png"
    },
    {   title:"mercredi",
        value:35,
        img: "./img/black.png"
    },
    {   title:"jeudi",
        value:60,
        img: "./img/red.png"
    },
    {   title:"vendredi",
        value:15,
        img: "./img/grey.png"
    },
    {   title:"samedi",
        value:50,
        img: "./img/blue.png"
    },
    {   title:"dimanche",
        value:80,
        img: "./img/orange.png"
    },
]
const histogramme = document.querySelector('#tab');
let template = ``;
let i;
for(i=0;i<2;i++){
    template += `<tr>`;
    if(i!=1){
        tab.forEach(element=>{
            template+=`<td>${element.title}</td>`;
        })
    }else{
        tab.forEach(element => {
            template = `<td><img src="${element.img}" height="${element.value}" width="50px"/></td>`;
        });
    }
    template+= `</tr>`;
}

histogramme.innerHTML += template;