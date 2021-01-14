let question = $(".question");
let nbr = 0;
let reponse = ["b", "c", "b", "a", "c",
               "d", "a", "b", "c", "c",
               "b", "a", "b", "d", "a"];
let score = 0;
let flag = true;

question.css("display", "none");
question.eq(nbr).css("display", "initial");

$("input").click(function (){
    if (flag){
        setTimeout(()=>{
            if (this.dataset.rep === reponse[nbr]) {
                score++;
                $(this).parent().css("color", "green");
            }
            else {
                $(this).parent().css("color", "red");
            }
            if (nbr>13) {
                question.css("display", "initial");
                flag = false;
                $("#score").html("Votre score: " + score);
            }
            else {
                nbr++;
                question.css("display", "none");
                question.eq(nbr).css("display", "initial");
            }
        }, 300)
    }
})