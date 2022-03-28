DisplayContent = (index) =>{
    const listContent = document.querySelectorAll('#link-content li');
    const links = document.querySelectorAll('#link li');
    const VisibleItem = document.querySelector('.visible');
    const activeLink = document.querySelector('.active');
    VisibleItem.className = "hidden";
    activeLink.className = "unactive";
    links[index].className = "active";
    listContent[index].className = "visible";
}


