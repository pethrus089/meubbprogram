
function clicka() {
    var subMenu = document.querySelector('div.contemResposta')

    if (subMenu.classList.contains('hidden')) {
        subMenu.classList.remove('hidden')
    } else {
        subMenu.classList.add('hidden');
    }
}

var a = document.querySelectorAll('a')
a.forEach(element => {
    element.addEventListener('click', function(){
        event.preventDefault();
        clicka();
    })
});




