const questions = [
    "Would you rather be invisible or be able to fly?",
    "Would you rather live in space or under the sea?",
    "Would you rather have the ability to time travel or read minds?",
    "Would you rather never be stuck in traffic or never get sick?",
    "Would you rather give up social media forever or never watch TV again?",
    "Would you rather always win at games or always have great luck?",
    "Would you rather explore the deepest parts of the ocean or outer space?",
    "Would you rather have unlimited money or unlimited time?",
    "Would you rather have a rewind button for your life or a pause button?",
    "Would you rather have the ability to talk to animals or speak every language?"
];

function getRandomQuestion() {
    return questions[Math.floor(Math.random() * questions.length)];
}

document.getElementById("rollButton").addEventListener("click", function () {
    document.getElementById("card1").innerText = getRandomQuestion();
    document.getElementById("card2").innerText = getRandomQuestion();
});
