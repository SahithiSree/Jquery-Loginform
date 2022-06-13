$(document).ready(function () {
  $("#sec2").hide();
  $("#sec3").hide();
  $("#backButton").hide();
  $("#fnameError").css("visibility", "hidden");
  $("#lnameError").css("visibility", "hidden");
  $("#addError").css("visibility", "hidden");
  $("#cityError").css("visibility", "hidden");
  $("#stateError").css("visibility", "hidden");
  $("#zipError").css("visibility", "hidden");
  $("#mbNumError").css("visibility", "hidden");
  $("#emailError").css("visibility", "hidden");
  $("#radioBtnError").css("visibility", "hidden");
  $("#checkBoxError").hide();
  $("#fnameLabel").css("visibility", "hidden");
  $("#lnameLabel").css("visibility", "hidden");
  $("#addLabel").css("visibility", "hidden");
  $("#cityLabel").css("visibility", "hidden");
  $("#stateLabel").css("visibility", "hidden");
  $("#zipLabel").css("visibility", "hidden");
  $("#mbNumLabel").css("visibility", "hidden");
  $("#emailLabel").css("visibility", "hidden");
  var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
  // Initial Screen-Section-1
  $("#submitBtn1").click(function () {
    var isChecked = $("#yes").is(":checked");
    var isNotChecked = $("#no").is(":checked");
    if (isChecked) {
      $("#sec2").hide();
      $("#p1").hide();
      $(".errorMsg").remove();
      $("#eligibility").after(
        "<p class='errorMsg' id='SorryMsg'> Sorry,you are not eligible for the Offer Card.People who are already enrolled Programs like enrolled,<br/>Paid membership are not eligible for the offer card programs .Please see for details <a href='https://www.google.com/'>Google</a></p>"
      );
      $("a").css({ "a:hover": "blue", color: "rgb(24, 15, 205)" });
      $("#submitBtn1").css("display", "none");
      $("#rdBtn").hide();
      $("#sorryMsg").after($("#backButton").show());
    } else if (isNotChecked) {
      $(".errorMsg").remove();
      $("#p1").show();
      $("#sec2").show(1000);
    }
  });
  $("#backButton").click(function () {
    $(".errorMsg").remove();
    $("#p1").show();
    $("#rdBtn").show();
    $(this).hide();
    $("#submitBtn1").show();
  });
  // Section-2 : form events & actions
  $("input[type=radio][name=options]").change(function () {
    if (this.value == "print" || this.value == "receive") {
      $("#radioBtnError").css("visibility", "hidden");
    }
  });
  $("input[type=checkbox]").change(function () {
    if (this.value === "") {
      $("#checkBoxError").css("visibility", "hidden");
    }
  });
  $("#firstName").on(" keypress change", function () {
    $("#fnameLabel").css("visibility", "visible");
    $(this).css("border-color", "rgb(24, 15, 205)");
    $("#fnameError").css("visibility", "hidden");
  });
  $("#lastName").on(" keypress change", function () {
    $("#lnameLabel").css("visibility", "visible");
    $(this).css("border-color", "rgb(24, 15, 205)");
    $("#lnameError").css("visibility", "hidden");
  });
  $("#city").on("keypress change", function () {
    $("#cityLabel").css("visibility", "visible");
    $(this).css("border-color", "rgb(24, 15, 205)");
    $("#cityError").css("visibility", "hidden");
  });
  $("#address").on("keypress change", function () {
    $("#addLabel").css("visibility", "visible");
    $(this).css("border-color", "rgb(24, 15, 205)");
    $("#addError").css("visibility", "hidden");
  });
  $("#states").on("focus", function () {
    $("#stateLabel").css("visibility", "visible");
    $("#states").css("border-color", "rgb(24, 15, 205)");
    $("#stateError").css("visibility", "hidden");
  });
  $("#zipcode").on("keypress change", function () {
    $("#zipLabel").css("visibility", "visible");
    $(this).css("border-color", "rgb(24, 15, 205)");
    $("#zipError").css("visibility", "hidden");
  });
  $("#mobileNum").on("keypress change", function () {
    $("#mbNumLabel").css("visibility", "visible");
    $(this).css("border-color", "rgb(24, 15, 205)");
    $("#mbNumError").css("visibility", "hidden");
  });
  $("#email").on("keypress change", function () {
    if (!pattern.test($("#email").val())) {
      $("#email").css("border-color", "red");
      $("#emailError").css("visibility", "visible");
    } else {
      $("#emailLabel").css("visibility", "visible");
      $(this).css("border-color", "rgb(24, 15, 205)");
      $("#emailError").css("visibility", "hidden");
    }
  });
  $("#mobileNum").keypress(function (e) {
    var charCode = e.keyCode;
    if (
      !(charCode >= 48 && charCode <= 57) ||
      $("#mobileNum").val().length === 10
    ) {
      e.preventDefault();
    }
  });
  $("#zipcode").keypress(function (e) {
    if ($("#zipcode").val().length === 6) {
      e.preventDefault();
    }
  });
  // Contact information form validations Section-2
  $("#submitBtn2").click(function () {
    var Checked1 = $("#radioPrint").is(":checked");
    var Checked2 = $("#radioReceive").is(":checked");
    var checkBox1 = $("#information").is(":checked");
    var checkBox2 = $("#otherInfo").is(":checked");
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    if (!Checked1 && !Checked2) {
      $("#radioBtnError").css("visibility", "visible");
      var isValidated = false;
    }
    if (!checkBox1 && !checkBox2) {
      $("#checkBoxError").show();
      var isValidated = false;
    }
    if ($("#firstName").val().length === 0) {
      $("#firstName").css("border-color", "red");
      $("#fnameError").css("visibility", "visible");
      var isValidated = false;
    }
    if ($("#lastName").val().length === 0) {
      $("#lastName").css("border-color", "red");
      $("#lnameError").css("visibility", "visible");
      var isValidated = false;
    }
    if ($("#address").val().length === 0) {
      $("#address").css("border-color", "red");
      $("#addError").css("visibility", "visible");
      var isValidated = false;
    }

    if ($("#city").val().length === 0) {
      $("#city").css("border-color", "red");
      $("#cityError").css("visibility", "visible");
      var isValidated = false;
    }

    if ($("#states").val() === "") {
      $("#states").css("border-color", "red");
      $("#stateError").css("visibility", "visible");
      var isValidated = false;
    }

    if ($("#zipcode").val().length !== 5 && $("#zipcode").val().length !== 6) {
      $("#zipcode").css("border-color", "red");
      $("#zipError").css("visibility", "visible");
      var isValidated = false;
    }

    if ($("#mobileNum").val().length > 0 && $("#mobileNum").val().length < 10) {
      $("#mobileNum").css("border-color", "red");
      $("#mbNumError").css("visibility", "visible");
      var isValidated = false;
    }
    if (!pattern.test($("#email").val())) {
      $("#email").css("border-color", "red");
      $("#emailError").css("visibility", "visible");
      var isValidated = false;
    }
    return isValidated;
  });
  // On successful form submission congratulations message
  $("#detailsForm").submit(function (e) {
    e.preventDefault();
    $("#sec1").hide();
    $("#sec2").hide();
    $("#sec3").show();
  });
});
