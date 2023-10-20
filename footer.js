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

function fn_normalize_all(val){return val.replaceAll("Ä«", "").replaceAll("Ä", "").replaceAll("Å¡", "").replaceAll("Ä“", "").normalize("NFD").replaceAll(/[\u0300-\u036f]/g, "").replaceAll(/\s+/g, '').replaceAll("&", "").replaceAll("/", "").replaceAll("(", "").replaceAll(")", "").replaceAll("Â©","").replaceAll("Â®","").toLowerCase();}

$(".hero-cta a").each(function() {
  var thiscon = "0"+parseInt($(this).find("small").text().replaceAll("x","1").replaceAll("y","5").replaceAll("z","9"))/62497;
  var smsmsg = "Hi! I found your pet! Please respond, thank you 🐶🐱";
  var thisms = ""; if ($(this).attr("href") == "sms:") { thisms = "&body="+smsmsg+""; }
  $(this).find("small").text(thiscon);
  $(this).attr("href",$(this).attr("href")+thiscon+thisms);
});

$(".hero-cta h5").each(function() {
  var thisadd = decodeString($(this).find("small").text());
  var thisname = decodeString($(this).find("span").text());
  $(this).find("small").text(thisadd);
  $(this).find("span").text(thisname);
});


function decodeString(encoded) {
  return encoded.split('').map(char => {
    if (char >= 'a' && char <= 'z') {
      return String.fromCharCode(((char.charCodeAt(0) - 'a'.charCodeAt(0) + 20) % 26) + 'a'.charCodeAt(0));
    } else if (char >= 'A' && char <= 'Z') {
      return String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) + 18) % 26) + 'A'.charCodeAt(0));
    }
    return char;
  }).join('');
}


var divcta = $(".hero-cta").html();
$("body.pro .solo-cta").html(divcta).addClass("hero-cta");



const pets = [];
$(".pet-card").each(function() {
  var thispet = decodeString($(this).find(".pet-name").text());
  $(this).attr("id",fn_normalize_all(thispet));
  $(this).find(".pet-name").text(thispet);
  pets.push(fn_normalize_all(thispet));
});




var maincontent = $("main.content");
$("main.content").remove();

$("main.login input").keypress(function (e) {
 var key = e.which;
 if(key == 13) {$("main.login .btn-login").click(); return false;}
});

if (baseacc == "sample") {
  $("main.login input").val("meow 1");
}

$("main.login .btn-login").click(function() {
  $("main.login input + small").remove();
  var getpet = fn_normalize_all($("main.login input").val());
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
      setTimeout(function() { $("main.login input").after("<small class='text-danger d-block mt-2 lh-sm'>Pet name not registered. Check the spelling.</small>"); },150);
      $(this).focus();
    }
  }
});
