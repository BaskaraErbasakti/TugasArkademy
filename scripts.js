$(document).ready(function(){
    $("#cart2").on("hide.bs.collapse", function(){
      $(".cart2").html('<img src="gambar/bear.png" width="250px" height="200px" alt="cofee latte">');
      $("#number").text('0')
    });
    $("#cart2").on("show.bs.collapse", function(){
      $(".cart2").html('<img src="gambar/bear.png" width="250px" height="200px" alt="cofee latte"><div class="square2 position-absolute rounded-top"></div><img class="tick2 position-absolute" src="gambar/tick.png" alt="tick">');
      $("#total-price1").text('Rp.15.000*')
      $("#number").text('1')
    });
});

$(document).ready(function(){
    $("#cart6").on("hide.bs.collapse", function(){
      $(".cart6").html('<img src="gambar/blackforest.png" width="250px" height="200px" alt="Black Forest">');
      $("#total-price1").text('Rp.15.000*')
      $("#number").text('1')
    });
    $("#cart6").on("show.bs.collapse", function(){
      $(".cart6").html('<img src="gambar/blackforest.png" width="250px" height="200px" alt="Black Forest"><div class="square2 position-absolute rounded-top"></div><img class="tick2 position-absolute" src="gambar/tick.png" alt="tick">');
      $("#total-price1").text('Rp.45.000*')
      $("#number").text('2')
    });
});

$(document).ready(function(){
    $("#cart8").on("hide.bs.collapse", function(){
      $(".cart8").html('<img src="gambar/salmon.png" width="250px" height="200px" alt="Salmon">');
      $("#total-price1").text('Rp.45.000*')
      $("#number").text('2')
    });
    $("#cart8").on("show.bs.collapse", function(){
      $(".cart8").html('<img src="gambar/salmon.png" width="250px" height="200px" alt="Salmon"><div class="square2 position-absolute rounded-top"></div><img class="tick2 position-absolute" src="gambar/tick.png" alt="tick">');
      $("#total-price1").text('Rp.105.000*')
      $("#number").text('3')
    });
});