
//drag and drop img of football tems inside plyer div
function allowDrop(event) {
    event.preventDefault();
}
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
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
// remove highlight the mouseover divs
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
               //to stop plyer from clicking another box after wining
            $('.square').off('click');

            //stop background audio 
            document.getElementById('stop').pause();
            //play success audio
            document.getElementById('goal').play();
            swal({
                title: "Team 1 Win",
                icon: "img/Goal1.png"
            //     onClose: closePlay

            // }).then(function closePlay() {
            //     return document.getElementById('goal').pause();
            
            });
        } 

        else if (player2.includes(winCase[i][0]) && player2.includes(winCase[i][1]) && player2.includes(winCase[i][2])) {
            noWon = false;
            //to stop plyer from clicking another box after wining
            $('.square').off('click');
              //stop background audio 
              document.getElementById('stop').pause();
           //play success audio
            document.getElementById('goal').play();
            swal({
                 
                title: "Team 1 Win",
                icon: "img/Goal1.png",
            });
           
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







