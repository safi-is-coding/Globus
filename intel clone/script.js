// let mode = document.getElementsByClassName('change-mode')



function changebg(){
    console.log(document.querySelector('body').style.background);

    if (document.querySelector('body').style.background === 'rgb(27, 27, 27)'){
    document.querySelector('body').style.background = 'white';
    document.querySelector('body').style.color = 'black';
    document.querySelector('.navigation').style.background = 'whitesmoke';
    document.querySelector('.search').style.background = '#f3f3f3';
    document.querySelector('footer').style.background = '#cccccc';
    document.querySelector('.left1').style.background = 'linear-gradient(190deg, rgba(174, 174, 174, 0.593), whitesmoke)';

    let navbuttons = document.querySelectorAll('.links a');
        for (link in navbuttons)
        {
            navbuttons[link].style.color = 'darkblue';
        }

    }
    else{
        document.querySelector('body').style.background = 'rgb(27, 27, 27)';
        document.querySelector('body').style.color = 'white';
        document.querySelector('.navigation').style.background = '#363636';
        // document.querySelectorAll('.links a').style.color = 'white';
        // console.log(document.querySelectorAll('.links a'));
        document.querySelector('.search').style.background = 'gray';
        document.querySelector('.search input').style.placeholder = 'gray';
        document.querySelector('footer').style.background = 'darkgray';
        document.querySelector('.left1').style.background = 'linear-gradient(180deg, rgba(174, 174, 174, 0.389), #1a1a1a)';
        
        let navbuttons = document.querySelectorAll('.links a');
        let navicons = document.querySelectorAll('.nav-icons')
        document.querySelector('.country-name').style.color = 'darkgray';

        for (link in navbuttons)
        {
            navbuttons[link].style.color = 'white';
        }

        for (icon in navicons)
        {
            navicons[icon].style.color = 'darkgray';
        }

        console.log(navicons);
    }
}