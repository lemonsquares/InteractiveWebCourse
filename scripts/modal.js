btns = document.getElementsByClassName("modal");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
        closeBtns.forEach(function(btn) {
        btn.onclick = function () {
    var modal = (btn.closest('modal').style.display = 'none');
};
            });


// var modalBtns = document.querySelectorAll('modal-open');

// modalBtns.forEach(function(btn) {
//     btn.onclick = function(){
//         var modal = btn.getAttribute('data-modal');
//         document.getElementsByClassName('modal').style.display = 'block';
//     };
// });

// var closeBtns = document.querySelectorAll('.modal-close');



// });

// window.onclick = function(e){
//     if(e.target.className === 'modal') {
//         e.target.style.display = 'none';
//     }
// };

//  window.onclick = function(e){

//     if(e.target.classList.contains('.modal')){

//         e.target.style.display = 'none';

//     }

// };
