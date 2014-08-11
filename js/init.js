$(window).load(function(){
  $("body").css("visibility","visible");
  // Give the logo some animation.
  function logo(){
      var m = new Marka("#icon");
      m.set("plus").color("#FF6600").size("50").rotate("right");
      setTimeout(function(){
          m.color("#ff0000");
          m.rotate("left");
      },1000);
  }logo();
  // Load isotope
  $(".isotope").isotope({
      itemSelector: '.post',
      layoutMode: 'masonry',
      masonry: {
          columnWidth: 0
      }
  });
  // Stamp each post with a unique ID.
  function addPostID(){
      var i = 0;
      var post = $(".entry-footer");
      $.each(post,function(){
         $(this).attr("id","c"+i+"");
          i++;
      });
  }addPostID();
  // Get current selector and display overlay appropriately based on click
  function getCurrentClick(){
      $(".post").on("mouseover",function(event){
          var currentID = $(this).find(".entry-footer").attr("id");
          $("#"+currentID).css("display","block");
      }).on("mouseout",function(){
          var currentID = $(this).find(".entry-footer").attr("id");
          $("#"+currentID).css("display","none");
      });
  }getCurrentClick();
});
$(document).ready(function(){
  $(".bxslider").bxSlider({pager: false});
});