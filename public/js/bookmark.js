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
  $(document).on("click", "#bookmarksubmit", function (event) {
    console.log("submitting...")
    event.preventDefault();
    var id = $(this).data("id");
   
    // tagInput = $("#tags").val();
    // tagArr = tagInput.split(',');
    var urlObj = {
      url: $("#url").val().trim(),
      title: $("#title-input").val().trim(),
      summary: $("#summary-input").val().trim(),
      category: $("#categorybtn").text().trim(),
      added_by: $("#addedby-input").val().trim(),
      tags: $("#tags").val(),
      slack_channel: $("#slackbtn").text().trim()
    };
    console.log(urlObj);
    // Send the PUT request.
    $.ajax("/api/bookmarks/" , {
      type: "POST",
      data: urlObj
    }).then(
      function () {
        location.reload();
      }
    );
  });

  //Click handler for registering a new user
  $(document).on("click", "#register-submit", function (event) {
    event.preventdefault();
    var id = $(this).data("id");
    var userObj = {
      fname: $("#fname").val().trim(),
      lname: $("#lname").val().trim(),
      email: $("#email-input").val().trim(),
      password: $("#password-input").val().trim(),
    };
    console.log(userObj);
    // Send the PUT request.
    $.ajax("/api/user/" + id, {
      type: "POST",
      data: userObj
    }).then(
      function () {
        location.reload();
      }
    );
  });

   //Click handler for login
   $(document).on("click", "#loginbutton", function (event) {
    event.preventdefault();
    var id = $(this).data("id");
    var loginObj = {
      email: $("#email-input").val().trim(),
      password: $("#password-input").val().trim(),
    };
    console.log(loginObj);
    // Send the PUT request.
    $.ajax("/api/user/" + id, {
      type: "GET",
      data: loginObj
    }).then(
      function () {
        location.reload();
      }
    );
  });

  //Click handler for search function
  $(document).on("click", "#search-button", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    // var catSelect = $('#catselection :selected').text();
    // console.log("catselect is:  " , catSelect);
    var searchObj = {   //commented title, addedby, etc due to changing search to just the category
      // title: $("#titlesearch").val().trim(),
      // slack_channel: $("#slackbtn").text().trim()
      
      category: $("#catSelect").text().trim(),
      // added_by: $("#enteredBy").val().trim(),
      // author: $("#authorsearch").val().trim(),
      // tags: $("#tags").val().trim(),
      // enteredby: $("#enteredBy").val().trim()
  };
    console.log(searchObj);
    $.ajax("/api/bookmarks", {
      type: "GET",
      data: searchObj
    }).then(
      function (bookmarks) {
        $("#bookmarks").empty();
        console.log('bookmarks', bookmarks);
        for (var i = 0; i < bookmarks.length; i++) {
          var bookmark = bookmarks[i];
          $("#bookmarks").append(`
            <div class="row">
              <div class="col-md-12">
                <p>


                  <strong>Title:</strong>
                  ${bookmark.title}
                  <strong>Description:</strong>
                  ${bookmark.summary}
                  <strong>URL:</strong>
                  ${bookmark.url}



                </p>
              </div>
            </div>
          `);
        }
        
      }
    );
  });

});
