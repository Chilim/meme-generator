$(document).ready(function() {
  $(".meme-gallery img").click(function() {
    var usePic = $(this).attr("src");
    $(".meme img").attr("src", usePic);
})   
    })

