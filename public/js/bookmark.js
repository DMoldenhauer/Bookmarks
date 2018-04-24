$(document).ready(function () {

  $(".dropdown-menu li a").click(function(){
    $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
  });
  
  // Interface Panel Buttons
  $("input:radio[name='group1']").click(function() {
    $('.viewPanel').hide();
    $('#' + $("input:radio[name='group1']:checked").val()).show();
  });

  // Click handler for submitting a bookmark
  $(document).on("submit", "#bookmarksubmit", function (event) {
    var id = $(this).data("id");
    var urlTitle = $("#url-input");
    var catSelect = $('#catselection :selected').text();
    var titleEntry = $.ajax({
      url: "http://textance.herokuapp.com/title/" + urlTitle,
      complete: function (data) {
      }
    });
    var urlObj = {
      url: $("#url-input").val().trim(),
      title: titleEntry.data,
      title: $("#title-input").val().trim(),
      summary: $("#summary-input").val().trim(),
      category: catSelect,
      author: $("#author-input").val().trim(),
      added_by: $("#addedby-input").val().trim(),
      tags: $("#tags-input").tagsinput(),
      slack_channel: $("#slackchannel-input").val().trim(),
      favorite: $("#favorite-checked").val().trim()
    };

    // Send the PUT request.
    $.ajax("/api/bookmarks/" + id, {
      type: "PUT",
      data: urlObj
    }).then(
      function () {
        location.reload();
      }
    );
  });

  //Click handler for registering a new user
  $(document).on("register", "#register-submit", function (event) {
    var id = $(this).data("id");
    var userObj = {
      fname: $("#fname").val().trim(),
      lname: $("#lname").val().trim(),
      email: $("#email-input").val().trim(),
      password: $("#password-input").val().trim(),
    };

    // Send the PUT request.
    $.ajax("/api/user/" + id, {
      type: "PUT",
      data: userObj
    }).then(
      function () {
        location.reload();
      }
    );
  });

   //Click handler for login
   $(document).on("click", "#loginbutton", function (event) {
    var id = $(this).data("id");
    var loginObj = {
      email: $("#email-input").val().trim(),
      password: $("#password-input").val().trim(),
    };

    // Send the PUT request.
    $.ajax("/api/user/" + id, {
      type: "PUT",
      data: loginObj
    }).then(
      function () {
        location.reload();
      }
    );
  });

  //Click handler for search function
  $(document).on("click", "#search-button", function (event) {
    var id = $(this).data("id");
    var catSelect = $('#catselection :selected').text();
    console.log(catSelect);
    var searchObj = {
      title: $("#title-input").val().trim(),
      category: catSelect,
      added_by: $("#enteredBy").val().trim(),
      tags: [].val().trim(),
      enteredby: $("#enteredBy").val().trim()
  };

    $.ajax("/api/bookmarks/" + id, {
      type: "GET",
      data: searchObj
    }).then(
      function () {
        location.reload();
      }
    );
  });

});
