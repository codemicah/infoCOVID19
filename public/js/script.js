var state = 0;
var percent = $("span");

$("input[type=checkbox]").click(function () {
  if ($(this).prop("checked") == true) {
    state += 1;
    switch (state) {
      case 1:
        styles = {
          width: "25%",
          background: "green",
        };
        $(".bar").css(styles);
        $(percent).text("You're aren't doing so well");
        break;
      case 2:
        styles = {
          width: "45%",
          background: "yellow",
          color: "grey",
        };
        $(".bar").css(styles);
        $(percent).text("You're sick");
        break;
      case 3:
        styles = {
          width: "75%",
          background: "orange",
          color: "#fff",
        };
        $(".bar").css(styles);
        $(percent).text("Go see a doctor");
        break;
      case 4:
        styles = {
          width: "100%",
          background: "red",
        };
        $(".bar").css(styles);
        $(percent).text("You need to get tested");
        break;
      default:
        styles = {
          width: "0%",
          background: "#30e030",
        };
        $(".bar").css(styles);
        break;
    }
  } else if ($(this).prop("checked") == false) {
    state -= 1;
  }
});

$("input[type=checkbox]").click(function () {
  switch (state) {
    case 1:
      styles = {
        width: "25%",
        background: "green",
        color: "#fff",
      };
      $(".bar").css(styles);
      $(percent).text("A little sick");
      break;
    case 2:
      styles = {
        width: "50%",
        background: "yellow",
        color: "grey",
      };
      $(".bar").css(styles);
      $(percent).text("You're sick");
      break;
    case 3:
      styles = {
        width: "75%",
        background: "orange",
        color: "#fff",
      };
      $(".bar").css(styles);
      $(percent).text("You need to see a doctor");
      break;
    case 4:
      styles = {
        width: "100%",
        background: "red",
        color: "#fff",
      };
      $(".bar").css(styles);
      $(percent).text("You need to get tested");
    default:
      styles = {
        width: "100%",
        background: "#30e030",
      };
      $(".bar").css(styles);
      $(percent).text("You're fine");
      break;
  }
});

$("#menu_btn").click(function () {
  styles = {
    float: "none",
    width: "100%",
    background: "#1b1c1d",
    position: "fixed",
    top: "54.3px",
  };
  $("#hide").css(styles);
  $("#hide a").css("width", "100%");
  $("#hide a").css("padding-left", "50px");
  $("#hide").slideToggle(200);
});
$("#report").mouseover(function () {
  $(this).addClass("bounce");
});

// $(".ui .checkbox input[type=checkbox]").css("transform", "scale(5)")
