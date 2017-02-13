$(document).ready(function() {
  $(".meme-gallery img").click(function() {
      var usePic = $(this).attr("src");
      $(".meme img").attr("src", usePic);
    })
  
  $("#top-text").keyup(function() {
      var topText = $("input#top-text").val();
      $("h1.top-caption").text(topText);
  })
})

