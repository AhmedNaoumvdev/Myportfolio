window.onload = () =>{
    const tabSwitcher = document.querySelectorAll('[tabindex]');

    for(let i = 0 ; i < tabSwitcher.length ; i++){
        const tab = tabSwitcher[i];
        const pageId = tab.getAttribute('tabindex');

        tab.addEventListener("click", () =>{
            document.querySelector('.active').classList.remove('active')
            tab.classList.add('active')
            
            switchpage(pageId)
        })
    }
}

function switchpage(pageId){
    document.querySelector('.pages .active').classList.remove('active')
    const page = document.querySelector(`.pages [tabindex="${pageId}"]`)
    page.classList.add('active')
    console.log(page)
}