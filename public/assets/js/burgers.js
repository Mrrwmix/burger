$(document).ready(function() {
  $("body").on("click", "#submit", function() {
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

  $("body").on("click", ".btn-danger", function() {
    $.ajax({
      url: `/api/burgers`,
      type: "DELETE",
      data: { id: parseInt($(this).attr("value")) }
    }).done(() => {
      document.location.reload();
    });
  });
});
