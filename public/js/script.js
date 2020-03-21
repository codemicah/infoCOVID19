var state = 0
var percent = $("span")
$("input[type=checkbox]").click(function(){
    if($(this).prop("checked") == true) {
        state+=1
        if(state == 0){
            styles={
                width: "0%",
                background: "#30e030",
            }
            $(".bar").css(styles)
        }else if(state == 1){
            styles={
                width: "25%",
                background: "green",
            }
            $(".bar").css(styles)
            $(percent).text("You're aren't doing so well")
        }else if(state == 2){
            styles={
                width: "45%",
                background: "yellow",
                color: "grey"
            }
            $(".bar").css(styles)
            $(percent).text("You're sick")
        }else if(state == 3){
            styles={
                width: "75%",
                background: "orange",
                color: "#fff"
            }
            $(".bar").css(styles)
            $(percent).text("Go see a doctor")
        }else if(state == 4){
            styles={
                width: "100%",
                background: "red",
            }
            $(".bar").css(styles)
            $(percent).text("You need to get tested")
        }
    }else if($(this).prop("checked") == false){
        state -=1
    }
})

$("input[type=checkbox]").click(function(){
    if(state == 0){
        styles={
            width: "100%",
            background: "#30e030",
        }
        $(".bar").css(styles)
        $(percent).text("You're fine")
    }
    else if(state == 1){
        styles={
            width: "25%",
            background: "green",
            color: "#fff"
        }
        $(".bar").css(styles)
        $(percent).text("You're aren't doing so well")
    }
    else if(state == 2){
        styles={
            width: "50%",
            background: "yellow",
            color: "grey"
        }
        $(".bar").css(styles)
        $(percent).text("You're sick")
    }
    else if(state == 3){
        styles={
            width: "75%",
            background: "orange",
            color: "#fff"
        }
        $(".bar").css(styles)
        $(percent).text("You need to see a doctor")
    }
    else if(state == 4){
        styles={
            width: "100%",
            background: "red",
            color: "#fff"
        }
        $(".bar").css(styles)
        $(percent).text("You need to get tested")
    }
})

$("#menu_btn").click(function(){
    styles = {
        display: "block",
        background: "blue",
        width: "100%",
        height: "500px",
        float: "none",
        position: "fixed",
        top: "60px",
        transition: "2s"
    }
    $("#hide").slideToggle(500)
    $("#hide a").css("width", "100%")
})
$("#report").mouseover(function(){
    $(this).addClass("bounce")
})
