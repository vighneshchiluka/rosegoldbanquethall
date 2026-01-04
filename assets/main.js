var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

// AOS.init({
//   duration: 1200,
// });
window.addEventListener('load', () => {
  AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
  });
});


let Services = [
  {
    change_image1: "./assets/images/banquet/fullview.jpeg",
    change_image2: "./assets/images/banquet/inside.jpeg",
    change_image3: "./assets/images/banquet/entrance.jpeg",
    change_title: "Banquet",
    change_description1: "600 Persons Capacity.",
    change_description2: "Outside food area buffet.",
    change_description3: "Parking Capacity 250-400 cars. ",
    change_description4: "Veg Caterers - Inlounge. ",
    change_description5: "Non-veg Caterers -Outside. ",
  }, {
    change_image1: "assets/images/platinum/IMG_0497.JPG",
    change_image2: "assets/images/platinum/IMG_0486.JPG",
    change_image3: "assets/images/platinum/20230101202825_0D2A8679.JPG",
    change_title: "Platinum pink decoration",
    change_description1: "1000-1200 Persons Capacity.",
    change_description2: "Outside food area buffet.",
    change_description3: "Parking Capacity 250-400 cars. ",
    change_description4: "Veg Caterers - Inlounge. ",
    change_description5: "Non-veg Caterers -Outside. ",
  }, {
    change_image1: "assets/images/platinum/IMG_0497.JPG",
    change_image2: "assets/images/platinum/IMG_0486.JPG",
    change_image3: "assets/images/platinum/20230101202825_0D2A8679.JPG",
    change_title: "Platinum",
    change_description1: "1000-1200 Persons Capacity.",
    change_description2: "Outside food area buffet.",
    change_description3: "Parking Capacity 250-400 cars. ",
    change_description4: "Veg Caterers - Inlounge. ",
    change_description5: "Non-veg Caterers -Outside. ",
  },
  
  {
    change_image1: "assets/images/haveli/IMG_0011.JPG",
    change_image2: "assets/images/haveli/IMG_0023.JPG",
    change_image3: "assets/images/haveli/IMG_0017.JPG",
    change_title: "Haveli",
    change_description1: "1000-1200 Persons Capacity.",
    change_description2: "Outside food area buffet.",
    change_description3: "Parking Capacity 250-400 cars. ",
    change_description4: "Veg Caterers - Inlounge. ",
    change_description5: "Non-veg Caterers -Outside. ",
  }, {
    change_image1: "assets/images/lake-view-lawn/IMG_0484.JPG",
    change_image2: "assets/images/lake-view-lawn/IMG_9747.JPG",
    change_image3: "assets/images/lake-view-lawn/IMG_0550.JPG",
    change_title: "Lake view lawn",
    change_description1: "600-800 Persons Capacity.",
    change_description2: "Outside food area buffet.",
    change_description3: "Parking Capacity 250-400 cars. ",
    change_description4: "Veg Caterers - Inlounge. ",
    change_description5: "Non-veg Caterers -Outside. ",
  },
  {
    change_image1: "assets/images/ginnie-lawn/IMG_0004.JPG",
    change_image2: "assets/images/ginnie-lawn/0D2A3598.JPG",
    change_image3: "assets/images/ginnie-lawn/0D2A3596.JPG",
    change_title: "Ginnie lawn",
    change_description1: "600-800 Persons Capacity.",
    change_description2: "Outside food area buffet.",
    change_description3: "Parking Capacity 250-400 cars. ",
    change_description4: "Veg Caterers - Inlounge. ",
    change_description5: "Non-veg Caterers -Outside. ",
  },

  //   change_image : "assets/img/Javascript/face_mask.jpg",
  //   change_title: "Face Masks",
  //   change_description: "Our new-age face mask menu is designed by our salon experts to nourish and rejuvenate your skin, while also treating specific concerns like detan, pigmentation and dry skin.",
  // },{
  //   change_image : "assets/img/Javascript/cleanup.jpg",
  //   change_title: "Clean Up",
  //   change_description: "A face cleanup is a quick cleansing routine that provides basic removal of blackheads, reduces acne, minimal exfoliating action & removes tan. Experience the goodness of a facial clean-up at Tong's salon with various services.",
  // },{
  //   change_image : "assets/img/Javascript/facial-img.jpg",
  //   change_title: "Facial",
  //   change_description: "Tong's salon curated range of facial therapies complements your daily skincare routine. If done regularly, facials can give long-lasting elasticity, restore pH balance, and increase blood circulation & hydration.",
  // },{
  // },{
  //   change_image : "assets/img/Javascript/pedicure.jpg",
  //   change_title: "Manicure & pedicure",
  //   change_description: "Manicure and pedicure includes nail trimming and shaping, cuticle maintenance, hand and foot moisturizing, and nail polishing in best Terms by our specialist",
  // },{
  //   change_image : "assets/img/Javascript/spa.jpg",
  //   change_title: "Body Services / SPA",
  //   change_description: "The most popular massage treatments, most well known by Tong's for using essential oils to increase relaxation. Body Services are done by trained professional, utilising different scented essential oils to suit the individual preference and requirements of the client.",
  // }
]


$(".plans").on('click', function () {
  var image1 = $('#image1');
  var image2 = $('#image2');
  var image3 = $('#image3');
  var title = $('.img-text');
  var detail1 = $('#detail1');
  var detail2 = $('#detail2');
  var detail3 = $('#detail3');
  var detail4 = $('#detail4');
  var detail5 = $('#detail5');
  var planName = $(this).text();


  $.each(Services, function (key, value) {
    if (planName === value.change_title) {

      $("#image1").attr("src", value.change_image1);
      $("#image2").attr("src", value.change_image2);
      $("#image3").attr("src", value.change_image3);
      $(".img-text").text(value.change_title);
      $("#detail1").text(value.change_description1);
      $("#detail2").text(value.change_description2);
      $("#detail3").text(value.change_description3);
      $("#detail4").text(value.change_description4);
      $("#detail5").text(value.change_description5);

      //  console.log (value.change_title+" "+value.change_image+" "+value.change_description);
    }

  });
});

$(".plan").on('click', function () {
  var image1 = $('#image1');
  var image2 = $('#image2');
  var image3 = $('#image3');
  var title = $('.img-text');
  var detail1 = $('#detail1');
  var detail2 = $('#detail2');
  var detail3 = $('#detail3');
  var detail4 = $('#detail4');
  var detail5 = $('#detail5');
  var planName = $(this).text();


  $.each(Services, function (key, value) {
    if (planName === value.change_title) {

      $("#image1").attr("src", value.change_image1);
      $("#image2").attr("src", value.change_image2);
      $("#image3").attr("src", value.change_image3);
      $(".img-text").text(value.change_title);
      $("#detail1").text(value.change_description1);
      $("#detail2").text(value.change_description2);
      $("#detail3").text(value.change_description3);
      $("#detail4").text(value.change_description4);
      $("#detail5").text(value.change_description5);

      //  console.log (value.change_title+" "+value.change_image+" "+value.change_description);
    }

  });
});






{/* <script> */ }
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".yourSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// </script>


// ================================== Gallery ===============================
// Gallery image hover
$(".img-wrapper").hover(
  function () {
    $(this).find(".img-overlay").animate({ opacity: 1 }, 600);
  },
  function () {
    $(this).find(".img-overlay").animate({ opacity: 0 }, 600);
  }
);

// Lightbox
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
var $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');

// Add overlay
$overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
$("#gallery").append($overlay);

// Hide overlay on default
$overlay.hide();

// When an image is clicked
$(".img-overlay").click(function (event) {
  // Prevents default behavior
  event.preventDefault();
  // Adds href attribute to variable
  var imageLocation = $(this).prev().attr("href");
  // Add the image src to $image
  $image.attr("src", imageLocation);
  // Fade in the overlay
  $overlay.fadeIn("slow");
});

// When the overlay is clicked
$overlay.click(function () {
  // Fade out the overlay
  $(this).fadeOut("slow");
});

// When next button is clicked
$nextButton.click(function (event) {
  // Hide the current image
  $("#overlay img").hide();
  // Overlay image location
  var $currentImgSrc = $("#overlay img").attr("src");
  // Image with matching location of the overlay image
  var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
  // Finds the next image
  var $nextImg = $($currentImg.closest(".image").next().find("img"));
  // All of the images in the gallery
  var $images = $("#image-gallery img");
  // If there is a next image
  if ($nextImg.length > 0) {
    // Fade in the next image
    $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
  } else {
    // Otherwise fade in the first image
    $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
  }
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When previous button is clicked
$prevButton.click(function (event) {
  // Hide the current image
  $("#overlay img").hide();
  // Overlay image location
  var $currentImgSrc = $("#overlay img").attr("src");
  // Image with matching location of the overlay image
  var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
  // Finds the next image
  var $nextImg = $($currentImg.closest(".image").prev().find("img"));
  // Fade in the next image
  $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When the exit button is clicked
$exitButton.click(function () {
  // Fade out the overlay
  $("#overlay").fadeOut("slow");
});


$('.galleryFilter button').on('click', function () {
  $(".galleryFilter button").removeClass("active");
  $(this).addClass("active");
  var filterItems = $(this).data("filter");
  if (filterItems == "all") {
    $(".Banquet, .Platinum, .Haveli, .Lake-view, .Ginnie").show(500);
  } else if (filterItems == "Banquet") {
    $(".Banquet").show(500);
    $(".Platinum, .Haveli, .Lake-view, .Ginnie").hide(500);
  } else if (filterItems == "Platinum") {
    $(".Platinum").show(500);
    $(".Banquet,.Haveli, .Lake-view, .Ginnie").hide(500);
  } else if (filterItems == "Haveli") {
    $(".Haveli").show(500);
    $(".Banquet, .Platinum, .Lake-view, .Ginnie").hide(500);
  } else if (filterItems == "Lake-view") {
    $(".Lake-view").show(500);
    $(".Banquet, .Platinum, .Haveli, .Ginnie").hide(500);
  } else if (filterItems == "Ginnie") {
    $(".Ginnie").show(500);
    $(".Banquet, .Platinum, .Haveli, .Lake-view").hide(500);
  } else {
    console.log("no data found");
  }
});



// -------------------------------------------------mailing function--------------------------------------------------------

$(".viewbook").on('click', function() {
  $("#enquiryModalLabel").modal("show");
});

$(".submitEnquiry").on('click', function() {
 
  var custName;
  var custEmail;
  var custNumber;


  if ($("#custName").val() != "") {
      validationString = $("#custName").val().toLowerCase();
      var text = /^[a-z][a-z\s]*$/;
      if (!validationString.match(text)) {
          $(".cusstValidName").text("Please Enter Text Only");
      } else {
          custName = $("#custName").val();
          $(".cusstValidName").text(" ");
      }
  } else {
      $(".cusstValidName").text("Please Enter Name");
  }

  if ($("#custEmail").val() != "") {
      var emailRegex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
      if (!$("#custEmail").val().match(emailRegex)) {
          $(".custValidEmail").text("Please Enter Valid Email");
      } else {
          custEmail = $("#custEmail").val();
          $(".custValidEmail").text(" ");
      }
  } else {
      $(".custValidEmail").text("Please Enter Email");
  }

  if ($("#custNumber").val() != "") {
      var phnRegex = /^\d{10}$/;
      if (!$("#custNumber").val().match(phnRegex)) {
          $(".custValidNumber").text("Please Enter Valid Number");
      } else {
          custNumber = $("#custNumber").val();
          $(".custValidNumber").text(" ");
      }
  } else {
      $(".custValidNumber").text("Please Enter Number");
  }

  var emailRegex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
  var phnRegex = /^\d{10}$/;
  var text = /^[a-z][a-z\s]*$/;
  var nameString = $("#custName").val().toLowerCase();

  if (nameString.match(text) && $("#custEmail").val().match(emailRegex) && $("#custNumber").val().match(phnRegex)) {
      // console.log(custName + " " + custNumber + " " + custEmail + " " + custRequirment);

      var body = '<table align="center" border="0" width="45%" style="background-image:url("assets/images/rosel gold  (1).png");background-size:100% 100%" style="max-width:40px"><tr><td width="100%" align="center" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-weight:800"><img style="width:20%;height:120px;border-radius:100%;padding:0" src="images.jfif" alt="img"></td></tr></table><table style="max-width:600px;margin:0 auto;border-collapse:collapse;background-image:url(logobg.jpg);background-repeat:no-repeat;background-size:100% 100%;padding-left:50px;background-repeat:no-repeat"><tr><td colspan="2" style="text-align:center;font-size:1rem;padding:1.5rem;background-color:#060820;color:#fff">Enquiry For</td></tr><tr><td style="padding:1rem;text-align:right;font-weight:700">Customer Name:</td><td style="padding:1rem;border-bottom:1px solid #ccc">' + custName + '</td></tr><tr><td style="padding:1rem;text-align:right;font-weight:700">Customer Email:</td><td style="padding:1rem;border-bottom:1px solid #ccc">' + custEmail + '</td></tr><tr><td style="padding:0;text-align:right;font-weight:700">Customer Contact:</td><td style="padding:1rem;border-bottom:1px solid #ccc">' + custNumber + '</td></tr><tr style="background-color:#060820"><td style="color:#fff;width:50%;padding:1rem;font-size:12px">© Copyright 2023 All Rights Reserved By Company Name</td><td style="color:#f5f5f5;width:50%;padding:1rem;font-size:10px">Developed By SHREE KRISHNA DIGITAL MARKETING</td></tr></table>';
     
      $.post("https://skdm.in/server/v1/send_lead_mail.php", {

              toEmail: "vsakacrossfire@gmail.com",
              fromEmail: "skdmlead@gmail.com",
              bccMail: "skdmlead@gmail.com",
              mailSubject: "New Lead genration",
              mailBody: body,
              accountLeadSource: "",
              accountName: "Rosegold",
              accountLeadSource: "http://rosegold.in/",
              accountLeadName: custName,
              accountLeadEmail: custEmail,
              accountLeadPhone: custNumber
          },

          function(data, status) {
              //  var dataObject = jQuery.parseJSON(data);
              console.log('data :' + data);

          });


      alert("Your Form has Submitted Our team will contact with You  soon.");
      $("#custName").val("");
      $("#custEmail").val("");
      $("#custNumber").val("");
      $("#enquiryModalLabel").modal("hide");
      return false;
  }

});


// ----------------------------------------------acheivement section--------------------------------------------------


// const counters = document.querySelectorAll(".counter");

// counters.forEach((nos) => {
//   counter.innerText = "0";
//   const updateCounter = () => {
//     const target = +counter.getAttribute("data-target");
//     const count = +counter.innerText;
//     const increment = target / 200;
//     if (count < target) {
//       counter.innerText = `${Math.ceil(count + increment)}`;
//       setTimeout(updateCounter, 1);
//     } else counter.innerText = target;
//   };
//   updateCounter();
// });



$('.nos').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {
    duration: 8000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
});

// ------------------------------------------------banner-swiper-------------------------------------------------------


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

 // ======================================read more===============================================

 $(".readButton").on("click", function(){
  $(this).closest(".service-single").find(".service-single-more").css("display", "inline");
  $(this).closest(".service-single").find(".readLess_action").css("display", "inline");
  $(this).css("display", "none");
})


$(".readLess_action").on("click", function(){
  $(this).closest(".service-single").find(".service-single-more").css("display", "none");
  $(this).closest(".service-single").find(".readButton").css("display", "inline");
  $(this).css("display", "none");
})


// ====================================mail-functionaliy========================================================


// $("#AquaForm").click(function () {
//   console.log()
//   var custName;
//   var custEmail;
//   var custNumber;
//   var custMessage;
//   var custlocation;
//   var custService1;
//   var custAddress;



//   if ($(".custName").val() != '') {
//       custName = $(".custName").val();
//   } else {


//   }
//   if ($(".custNumber").val() != '') {
//       custNumber = $(".custNumber").val();
//   } else {

//   }

//   if ($(".custEmail").val() != '') {
//       custEmail = $(".custEmail").val();
//   } else {


//   }

//   if ($(".custMessage").val() != '') {
//       custMessage = $(".custMessage").val();
//   } else {


//   }
//   if ($(".custlocation").val() != '') {
//       custlocation = $(".custlocation").val();
//   } else {


//   }
//   if ($(".custService1").val() != '') {
//       custService1 = $(".custService1").val();
//   } else {


//   }
//   if ($(".custAddress").val() != '') {
//       custAddress = $(".custAddress").val();
//   } else {


//   }

  // var body = '<!DOCTYPE html><html><head><title>Unique Tech Services</title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge"></head><body style="margin:0!important;padding:0!important;background-color:#eee" bgcolor="#eeeeee"><div style="display:none;font-size:1px;color:#fefefe;line-height:1px;font-family:Open Sans,Helvetica,Arial,sans-serif;max-height:0;max-width:0;opacity:0;overflow:hidden"></div><table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#fff"><tr><td align="center" style="background-color:#eee" bgcolor="#692e30"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"><tr><td align="center" valign="top" style="font-size:0;padding:10px" bgcolor="#692e30"><div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:6px;font-weight:800;line-height:10px" class="mobile-center"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"><tr><td width="100%" align="center" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:800;line-height:24px;padding:10px"><a style="text-decoration:none;color:#fff;font-family:serif;font-size:16px">Leade Generate for Unique Tech Services</a></td></tr></table></td></tr></table></div></td></tr><tr><td align="center" valign="top" style="font-size:0;padding:15px" bgcolor="#fff"><div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;display:fle;justify-content:center;align-items:center;width:100%"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"><tr><td align="center" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:36px;font-weight:800;line-height:48px" class="mobile-center"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px"><tr><td width="100%" align="center" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-weight:800"><img style="width:120px;height:120px" src="http://uniquetechservices.com/assets/img/Logon.png" alt=""></td></tr></table></td></tr></table></div></td></tr><tr><td align="center" valign="top" style="font-size:0;padding:0" bgcolor="#692e30"><div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;display:fle;justify-content:center;align-items:center;width:100%"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%"><tr><td width="100%" align="center" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:800;padding:10px 0" class="mobile-center"><h1 style="text-transform:capitalize;font-size:14px;font-weight:500;margin:0;text-align:center;color:#fff">Client Enquiry Details</h1></td></tr></table></div></td></tr><tr><td align="center" height="100%" valign="top" width="100%" style="padding:0 35px 35px 35px;background-color:#fff" bgcolor="#eee"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px"><tr><td width="100%" align="center" valign="top" style="font-size:0"><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;text-align:center;width:100%"><table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="max-width:300px"><tr><td width="100%" align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#111">Customer Name:</p><p style="font-size:14px;font-weight:500;color:#111">' + custName + '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td width="100%" align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#111">Customer Number:</p><p style="font-size:14px;font-weight:500;color:#111">' + custNumber + '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#111">Customer Email:</p><p style="font-size:14px;font-weight:500;color:#111">' + custEmail + '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#111">Customer Message:</p><p style="font-size:14px;font-weight:500;color:#111">' + custMessage + '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#111">Customer location:</p><p style="font-size:14px;font-weight:500;color:#111">' + custlocation + '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#111">Customer Services:</p><p style="font-size:14px;font-weight:500;color:#111">' + custService1 + '</p></td></tr></table></div><div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px"><tr><td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px"><p style="font-size:16px;font-weight:600;color:#111">Customer Address:</p><p style="font-size:14px;font-weight:500;color:#111">' + custAddress + '</p></td></tr></table></div></td></tr></table></td></tr><tr><td width="100%" align="center" bgcolor="#808080" style="padding:10px 0"><p style="color:#111;font-weight:500;font-size:1rem;padding:0;margin:0">Â© Copyright 2022 Unique Tech Services</p></td></tr></table></td></tr></table></body></html>';


//   $.post("https://skdm.in/server/v1/send_lead_mail.php", {

//       toEmail: "vighnesh.chiluka25@gmail.com",
//       fromEmail: "skdmlead@gmail.com",
//       bccMail: "skdmlead@gmail.com",
//       mailSubject: "New Lead genration",
//       mailBody: body,
//       accountLeadSource: "http://rosegold.in/",
//       accountName: "Rosegold",
//       accountLeadName: custName,
//       accountLeadPhone: custNumber,
//       accountLeadEmail: custEmail,
//       accountLeadloc: custlocation,
//       accountLeadSer: custService1,
//       accountLeaddd: custAddress,
//       accountLeadmessage: custMessage


//   },

//       function (dataa, status) {
//           console.log('data :' + dataa);
//           console.log("name:" + custName);

//       });

//   alert("Your Form has Submitted Our team will contact with You  soon.");
//   // location.reload();
//   return false;


// });


//  -----------------------------------mail-function-contact-------------------------------------------


$(".submitEnquiry").on('click', function() {
  // $("#enquiryModalLabel").modal("show");
});

$(".submitEnquiry").on('click', function() {
 
  var custName;
  var custEmail;
  var custNumber;
  var custMessage;


  if ($("#custName").val() != "") {
      validationString = $("#custName").val().toLowerCase();
      var text = /^[a-z][a-z\s]*$/;
      if (!validationString.match(text)) {
          $(".cusstValidName").text("Please Enter Text Only");
      } else {
          custName = $("#custName").val();
          $(".cusstValidName").text(" ");
      }
  } else {
      $(".cusstValidName").text("Please Enter Name");
  }

  if ($("#custEmail").val() != "") {
      var emailRegex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
      if (!$("#custEmail").val().match(emailRegex)) {
          $(".custValidEmail").text("Please Enter Valid Email");
      } else {
          custEmail = $("#custEmail").val();
          $(".custValidEmail").text(" ");
      }
  } else {
      $(".custValidEmail").text("Please Enter Email");
  }

  if ($("#custNumber").val() != "") {
      var phnRegex = /^\d{10}$/;
      if (!$("#custNumber").val().match(phnRegex)) {
          $(".custValidNumber").text("Please Enter Valid Number");
      } else {
          custNumber = $("#custNumber").val();
          $(".custValidNumber").text(" ");
      }
  } else {
      $(".custValidNumber").text("Please Enter Number");
  }

  if ($("#custMessage").val() != "") {
    var phnRegex = /^\d{10}$/;
    if (!$("#custMessage").val().match(phnRegex)) {
        $(".custValidMessage").text("Please Enter Valid Text");
    } else {
        custNumber = $(".custMessage").val();
        $(".custValidMessage").text(" ");
    }
} else {
    $(".custValidMessage").text("Please Enter Message");
}

  var emailRegex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
  var phnRegex = /^\d{10}$/;
  var text = /^[a-z][a-z\s]*$/;
  var nameString = $("#custName").val().toLowerCase();

  if (nameString.match(text) && $("#custEmail").val().match(emailRegex) && $("#custNumber").val().match(phnRegex)) {
      // console.log(custName + " " + custNumber + " " + custEmail + " " + custRequirment);

      var body = '<table align="center" border="0" width="45%" style="background-image:url("assets/images/rosel gold  (1).png");background-size:100% 100%" style="max-width:40px"><tr><td width="100%" align="center" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-weight:800"><img style="width:20%;height:120px;border-radius:100%;padding:0" src="images.jfif" alt="img"></td></tr></table><table style="max-width:600px;margin:0 auto;border-collapse:collapse;background-image:url(logobg.jpg);background-repeat:no-repeat;background-size:100% 100%;padding-left:50px;background-repeat:no-repeat"><tr><td colspan="2" style="text-align:center;font-size:1rem;padding:1.5rem;background-color:#060820;color:#fff">Enquiry For</td></tr><tr><td style="padding:1rem;text-align:right;font-weight:700">Customer Name:</td><td style="padding:1rem;border-bottom:1px solid #ccc">' + custName + '</td></tr><tr><td style="padding:1rem;text-align:right;font-weight:700">Customer Email:</td><td style="padding:1rem;border-bottom:1px solid #ccc">' + custEmail + '</td></tr><tr><td style="padding:0;text-align:right;font-weight:700">Customer Contact:</td><td style="padding:1rem;border-bottom:1px solid #ccc">' + custNumber + '</td></tr><tr><td style="padding:0;text-align:right;font-weight:700">Customer Message:</td><td style="padding:1rem;border-bottom:1px solid #ccc">' + custMessage + '</td></tr><tr style="background-color:#060820"><td style="color:#fff;width:50%;padding:1rem;font-size:12px">© Copyright 2023 All Rights Reserved By Company Name</td><td style="color:#f5f5f5;width:50%;padding:1rem;font-size:10px">Developed By SHREE KRISHNA DIGITAL MARKETING</td></tr></table>';

      $.post("https://skdm.in/server/v1/send_lead_mail.php", {

              toEmail: "vsakacrossfire@gmail.com",
              fromEmail: "skdmlead@gmail.com",
              bccMail: "skdmlead@gmail.com",
              mailSubject: "New Lead genration",
              mailBody: body,
              accountLeadSource: "",
              accountName: "Rosegold",
              accountLeadSource: "http://rosegold.in/",
              accountLeadName: custName,
              accountLeadEmail: custEmail,
              accountLeadPhone: custNumber
          },

          function(data, status) {
              //  var dataObject = jQuery.parseJSON(data);
              console.log('data :' + data);

          });


      alert("Your Form has Submitted Our team will contact with You  soon.");
      $("#custName").val("");
      $("#custEmail").val("");
      $("#custNumber").val("");
      $("#custMessage").val("");
      // $("#enquiryModalLabel").modal("hide");
      return false;
  }

});

// --------------------------------------------------------aos-jquey-----------------------------------------------------------------------

// document.readyState()
//   /**
//    * Animation on scroll
//    */
//   window.addEventListener("load", () => {
//     AOS.init({
//       duration: 1000,
//       easing: "ease-in-out",
//       once: true,
//       mirror: false,
//     });
//   });

// AOS.init({        
//   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   offset: 120, // offset (in px) from the original trigger point
//   delay: 0, // values from 0 to 3000, with step 50ms
//   duration: 800, // values from 0 to 3000, with step 50ms
//   easing: 'ease', // default easing for AOS animations
//   once: false, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation        
// });     

// $(document).on('ready', function() {                  
//   $('.wrapper').attr('data-aos', 'fade-up');
// });      
// $(window).on('load', function() {          
//   AOS.refreshHard();
// });           