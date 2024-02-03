
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeIcon = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach(function(link){
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden");
  })
}
  
);

closeIcon.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});

hamburger.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
});

// tabs
const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll('.items_wrap')
const food = document.querySelectorAll('.food')
const snack = document.querySelectorAll('.snack')
const shakes = document.querySelectorAll('.shake')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(tab => {
      tab.classList.remove("active")
      
    })
    // console.log("clicked");
    tab.classList.add("active")

    const tabVal = tab.getAttribute('data-tabs')
    console.log(tabVal);

    all.forEach(item => {
      item.style.display = 'none'
    })

    if (tabVal == 'food') {
      food.forEach(item => {
        item.style.display = 'block'
      })
    } else if (tabVal == 'snack') {
      snack.forEach(item => {
        item.style.display = 'block'
      })
    } else if (tabVal == 'shakes') {
      shakes.forEach(item => {
        item.style.display = 'block'
      })
    } else {
      all.forEach(item => {
        item.style.display = 'block'
      })
    }

  })
})


// scroll up button

const scrollUp = () => {
  const scrollUpBtn = document.getElementById('scroll-up')

  if(this.scrollY >= 250){
    scrollUpBtn.classList.remove("-bottom-1/2")
    scrollUpBtn.classList.add("bottom-4")
  } else {
    scrollUpBtn.classList.add("-bottom-1/2")
    scrollUpBtn.classList.remove("bottom-4")
  }

}

window.addEventListener('scroll', scrollUp)


// header border
const scrollHeader = () => {
  const header = document.getElementById('header')

  if(this.scrollY >= 50){
    header.classList.add("border-b", "border-secondaryColor")
  } else {
    header.classList.remove("border-b", "border-secondaryColor")
  }

}

window.addEventListener('scroll', scrollHeader)

// dark light theme

const html = document.querySelector('html')
const themeBtn = document.querySelector('#theme-toggle')

if(localStorage.getItem("mode") == "dark") {
  darkMode()
} else {
  lightMode()
}

themeBtn.addEventListener('click', (e) => {
  if(localStorage.getItem("mode") == "light"){
    darkMode()
  } else {
    lightMode()
  }
  
})

function darkMode() {
  html.classList.add("dark")
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line")
  localStorage.setItem("mode", "dark")
}
  
function lightMode() {
  html.classList.remove("dark")
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line")
  localStorage.setItem("mode", "light")
}


// active link

const activeLink = () => {
  const sections = document.querySelectorAll('section')
  const navLinks = document.querySelectorAll('.nav__link')

  let current = 'home'

  sections.forEach(section => {

    const sectionTop = section.offsetTop

    if(this.scrollY >= sectionTop - 60) {
      current = section.getAttribute('id')
    }

  })

  navLinks.forEach(item => {
    item.classList.remove("text-secondaryColor")
    if(item.href.includes(current)) {
      item.classList.add("text-secondaryColor")
    }
  })

}

window.addEventListener('scroll', activeLink)


// scroll reveal animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400

})

sr.reveal(".home_image")
sr.reveal(".home_content", { origin: "bottom" })
sr.reveal(".category_card", { interval: 300 })

sr.reveal(".promo_card-1", { origin: "left" })  
sr.reveal(".promo_card-2", { origin: "right" })

sr.reveal(".about_img", { origin: "bottom" })
sr.reveal(".about_content", { origin: "top" })

sr.reveal(".menu_items", { origin: "left" })

sr.reveal(".customer_review", { origin: "right" })

sr.reveal(".footer")






