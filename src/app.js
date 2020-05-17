const menu = document.querySelector('.header__burger'),
 overlay=document.querySelector('.head-overlay'),
 search =document.querySelector('.search'),
    persons__item =document.querySelectorAll('.persons__item')







persons__item.forEach(el => el.addEventListener('mouseover',function (event) {
    persons__item.forEach(el => el.classList.remove('persons__item--active')) 
        this.classList.add('persons__item--active')
}))
 search.addEventListener('click', event => {
 const {target} = event;
    let outField = search.querySelector('.search__field')
    let btn= search.querySelector('.search__caption')
 if(target.classList.contains('search__caption')){
  
     outField.style.display="block"
     btn.style.display="none"
 }

}) 
menu.addEventListener('click', event => {
    overlay.classList.add("overlay-prime")
})
   
overlay.addEventListener('click',event => {
    const{target}=event
        if(target.classList.contains('fas__exit')){
          overlay.classList.remove("overlay-prime")
    }
})
