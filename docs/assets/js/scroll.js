(function () {
  var $element = document.querySelector('.to-anim')
  var shouldScroll = true

  function init () {
    window.addEventListener('scroll', handleScroll, false)
  }

  function handleScroll () {
    if (!shouldScroll) {
      return
    }

    blockScroll()

    var windowScroll = window.scrollY + window.innerHeight
    var elementOffsetTop = $element.offsetTop
    if (windowScroll >= elementOffsetTop) {
      $element.classList.add('animated')
      window.removeEventListener('scroll', handleScroll)
    }
    setTimeout(allowScroll, 500)
  }

  function blockScroll () {
    shouldScroll = false
  }

  function allowScroll () {
    shouldScroll = true
  }

  init()
})()
