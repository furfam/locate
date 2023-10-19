document.write(`
<footer class="filter-secondary filter-opac5">
  <div class="container-fluid text-center text-light p-5 my-5">
    <h5 class="font1 mb-2 lh-md">Want to create one for you fur pet?</h5>
    <h2 class="lh-xs my-md-4">Contact us now</h2>
    <a class="btn btn-primary mt-3" href="tel:0976-111-9647"><i class="fa fa-phone-alt"></i> 0976-111-9647</a>
  </div>
  <div class="container-fluid bg-custom1 text-light text-center py-2 px-4">
    <h6>Copyright © 2023 | <a href="../">FurFam</a></h6>
  </div>
</footer>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
`);

var divcta = $(".hero-cta").html();
$("body.pro .solo-cta").html(divcta).addClass("hero-cta");

const pets = [];
$("main.content section:not(.hero)").each(function() {
  pets.push($(this).attr("id").toLowerCase());
});

var maincontent = $("main.content");
$("main.content").remove();

$("main.login input").keypress(function (e) {
 var key = e.which;
 if(key == 13) {$("main.login .btn-login").click(); return false;}
});

if (baseacc == "sample") {
  $("main.login input").val("meow1");
}

$("main.login .btn-login").click(function() {
  $("main.login input + small").remove();
  var getpet = $("main.login input").val().toLowerCase();
  if (getpet == "") {
    setTimeout(function() { $("main.login input").after("<small class='text-danger d-block'>Pet name requried.</small>"); },150);
    $(this).focus();
  } else {
    if (pets.includes(getpet)) {
      setTimeout(function() { $("main.login input").after("<small class='text-success d-block'>SUCCESS!</small>"); },150);
      $("body").prepend(maincontent).addClass("loading");
      $("main.login").addClass("d-hide");
      setTimeout(function() {
        $("main.login").remove();
        $("main.content").removeClass("hide");
        setTimeout(function() {
          $("body").removeClass("loading");
          $("main.content").removeClass("d-hide");
          setTimeout(function() {
            //fn_getlocation();
            $("body").scrollTo("#"+getpet);
          },400);
        },300);
      },700);
    } else {
      setTimeout(function() { $("main.login input").after("<small class='text-danger d-block'>Pet name requried.</small>"); },150);
      $(this).focus();
    }
  }
});


// function fn_getlocation() {
//   fetch('https://api.geoapify.com/v1/ipinfo?apiKey=e455ec7cd1674bc6aac10351180d3273')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
// }

// function fn_getlocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }
//
// function showPosition(position) {
//   alert(position.coords.latitude+","+position.coords.longitude);
// }
