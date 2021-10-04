var loveBtn = document.querySelector(".btn-love");
var loveIcon = document.querySelector(".bi-heart");
// loveIcon.classList.remove('bi-heart');
// loveIcon.classList.add('bi-heart-fill');

loveBtn.addEventListener("click", () => {
    // console.log(loveIcon.classList);
    if( loveIcon.classList.contains = 'bi' ){
        loveIcon.classList.remove('bi-heart');
        loveIcon.classList.add('bi-heart-fill');
    }else{
        loveIcon.classList.remove('bi-heart-fill');
        loveIcon.classList.add('bi-heart');
    }
})


