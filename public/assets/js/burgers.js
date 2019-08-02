$(document).ready(function() {
  $("body").on("click", "#submit", function() {
    console.log("Wot");
    $.ajax({
      url: "/api/burgers",
      method: "POST",
      data: {
        name: $("#name")
          .val()
          .trim()
      }
    }).done(function(msg) {
      console.log(msg);
      document.location.reload();
    });
  });
});

console.log("HIHIHI");
