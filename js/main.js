// Get menu elements to show it

const navMenu = document.getElementById('nav-menu'),
      navToggel = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


    /*======== Show Menu ========*/
    function showMenu(){
        navMenu.classList.add('show-menu')
    }
    function hideMenu(){
        navMenu.classList.remove('show-menu')
    }

    //validate if navToggel constant exists 
    if(navToggel){
        navToggel.addEventListener('click' , showMenu)
    }

    //validate if navClose constant exists 
    if(navClose){
        navClose.addEventListener('click' , hideMenu)
    }

    /*======== Remove Menu ========*/ 
    const navLink = document.querySelectorAll('.nav_link')

    function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))



    const skillsContent = document.getElementsByClassName('skills-content'),
          skillsHeader = document.querySelectorAll('.skills-header')

    function toggleSkills(){
        let itemClass = this.parentNode.className

        for( i = 0; i < skillsContent.length; i++){
            skillsContent[i].className = 'skills-content skills-close'
        }
        if(itemClass === 'skills-content skills-close'){
            this.parentNode.className = 'skills-content skills-open'
        }
    }

    skillsHeader.forEach((el) =>{
        el.addEventListener('click', toggleSkills)
    })
