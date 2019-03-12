
//drag and drop img of football tems inside plyer div
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
//object with all cases plyer can win by
var winCase = {
    1: ["square0", "square1", "square2"],
    2: ["square3", "square4", "square5"],
    3: ["square6", "square7", "square8"],
    4: ["square2", "square4", "square6"],
    5: ["square2", "square5", "square8"],
    6: ["square1", "square4", "square7"],
    7: ["square0", "square4", "square8"],
    8: ["square0", "square3", "square6"]
}
//plyers variable store array of divs selected
var player1 = [];
var player2 = [];
var plyer1Score = 0;
var plyer2Score = 0;
//to store sign x and O
var sign = true;
//function for button which reload page 
$('.buttonNew').on("click", function (event) {
    location.reload();
});
// highlight the mouseover divs
$('.square').on("mouseover", function (event) {

    $(this).addClass("black");

});
// removw highlight the mouseover divs
$('.square').on("mouseout", function (event) {

    $(this).removeClass("black");
});

//on click boxs to change from x to o
$('.square').on("click", function (event) {
    $(this).off("mouseout");
    if (sign == true) {
        $(this).text("X");
        sign = !sign;
        player1.push(event.target.id);
        //
        console.log(player1);
    } else {
        $(this).text("O");
        sign = !sign;
        player2.push(event.target.id);
        //event.target.id
        console.log(player2);

    }
    checkWinner()
})

//fuction to check if player1 or plyer2 is win
function checkWinner() {
    var noWon = true;
    for (var i = 1; i < 9; i++) {
        if (player1.includes(winCase[i][0]) && player1.includes(winCase[i][1]) && player1.includes(winCase[i][2])) {
            noWon = false;
            //stop background audio 
            document.getElementById('stop').pause();
            //play success audio
            document.getElementById('goal').play();
            swal({
                title: "X Win",
                icon: "img/Goal1.png"
            });

            //get plyer1 score
            plyer1Score += 1;
            document.getElementById('score0').textContent = plyer1Score;
       
        } 

        else if (player2.includes(winCase[i][0]) && player2.includes(winCase[i][1]) && player2.includes(winCase[i][2])) {
            noWon = false;
            //to stop plyer from clicking another box after wining
           
            //stop background audio 
            document.getElementById('stop').pause();
            //play success audio
            document.getElementById('goal').play();
            swal({
                title: "O Win",
                icon: "img/Goal1.png" 
            });
            //get plyer2 score
            plyer2Score += 1;
            document.getElementById('score1').textContent = plyer2Score;
           
        }

        //if no one wins 
        if (player1.length == 5 || player1.length == 5) {
            if (noWon == true) {
                //stop background audio 
                document.getElementById('stop').pause();
                document.getElementById('no').play();
                swal({
                    title: "No one Win",
                    icon: "img/offside.png"
                });
                return;
            }
        }
    }
}
function secondHalf(){
    $(".square").text("");
    player1 = []
    player2 = []
}






