const intObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if(entry.isIntersecting) {
      console.log(entry)
      entry.target.classList.add('show')
      entry.target.classList.remove('hidden')
    } 
  })
})

const hiddenEls = document.querySelectorAll('.hidden')
hiddenEls.forEach(el => intObserver.observe(el))
