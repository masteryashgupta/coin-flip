var possibleOutcomes = ["Heads", "Tails"];

function setupCoinClick() {
    $(".coin").off("click").on("click", function () {
        var userChoice = $(this).text();

        // Disable clicking immediately
        $(".coin").off("click");

        $("#coin2").hide();
        $("#coin1").attr("id", "coin-animation");
        $("#game-instructions").text("Destiny is in the air...");
        $("#coin-animation").text("Flipping...");
        
        // Apply the appropriate gradient to the flipping coin
        if (userChoice === "Heads") {
            $("#coin-animation").addClass("coin-heads");
        } else {
            $("#coin-animation").addClass("coin-tails");
        }

        var result = possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];

        setTimeout(function () {
            $("#coin-animation").text(result);
            
            // Update coin appearance based on result
            $("#coin-animation").removeClass("coin-heads coin-tails");
            if (result === "Heads") {
                $("#coin-animation").addClass("coin-heads");
            } else {
                $("#coin-animation").addClass("coin-tails");
            }
            
            if (userChoice == result) {
                $("#game-instructions").text("🎉 You guessed it right! It's " + result + "!");
            } else {
                $("#game-instructions").text("😔 You guessed it wrong! It was " + result + ".");
            }

            $("#restart").css("opacity", "1");

            // Set up restart behavior
            $("#restart").off("click").on("click", function () {
                $("#coin-animation").attr("id", "coin1");
                $("#coin1").removeClass("coin-heads coin-tails").addClass("coin-heads");
                $("#coin1").text("Heads");
                $("#coin2").show();
                $("#game-instructions").text("Choose heads or tails and click to flip!");
                $("#restart").css("opacity", "0");

                // Re-enable the coin click
                setupCoinClick();
            });

        }, 2500);
    });
}

// Initial setup
setupCoinClick();
