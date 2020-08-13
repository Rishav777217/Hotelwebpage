var preloader = $(".preloader")
$(document).ready(function () {
  $(".modal").modal()
  $(".sidenav").sidenav()
  $(".slider").slider({
    fullWidth: true,
    indicators: true,
  })
  $(".parallax").parallax()
  $(".carousel").carousel({
    numVisible: 7,
    shift: 40,
    padding: 40,
  })
  $(".fixed-action-btn").floatingActionButton()
  setTimeout(function () {
    preloader.fadeOut("slow")
  }, 500)
})

function toggelModal() {
  var instace = M.Modal.getInstance($("#modal1"))
  instace.open()
}

function colorChanger() {
  $("body").toggleClass("brown darken-4 white-text")
}
