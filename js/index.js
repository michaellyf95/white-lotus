function toggleHeader(){
    var mobiledd = document.querySelector('.header-mobile-dd');   

    if (!mobiledd.classList.contains('show')) {
        changeMobileIco('show');
        mobiledd.classList.add('show');
    }
    else {
        changeMobileIco('hide');
        mobiledd.classList.remove('show');
    }
}

function changeMobileIco(val){
    var mobileico = document.querySelector('.header-mobile-ico');

    if (val == 'show') {
        mobileico.classList.remove('fa-caret-down');
        mobileico.classList.add('fa-caret-up');
    }
    else {
        mobileico.classList.add('fa-caret-down');
        mobileico.classList.remove('fa-caret-up');
    }
}