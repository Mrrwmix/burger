$(document).ready(function() {
  $("body").on("click", "#submit", function() {
    console.log("Wot");
    $.ajax({
      url: "/api/burgers",
      type: "POST",
      data: {
        name: $("#name")
          .val()
          .trim()
      }
    }).done(function() {
      document.location.reload();
    });
  });

  $("body").on("click", ".btn-primary", function() {
    $.ajax({
      url: `/api/burgers`,
      type: "PUT",
      data: { id: parseInt($(this).attr("value")) }
    }).done(() => {
      document.location.reload();
    });
  });
});

console.log("HIHIHI");
