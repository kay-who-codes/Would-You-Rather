const questions = {
    good: [
        "Be able to fly",
        "Have the power to be invisible",
        "Be able to time travel",
        "Never be stuck in traffic",
        "Never get sick",
        "Have great luck",
        "Explore the deepest parts of the ocean",
        "Explore the deepest parts of outer space",
        "Receive £5M now",
        "Have a rewind/pause button for your life",
        "Be able to talk to animals",
        "Be able to speak every language"
    ],
    bad: [
        "Be desolate",
        "Be sad",
        "Lose all your money",
        "Lose all your friends",
        "Never be able to speak",
        "Never be able to hear",
        "Always be cold",
        "Always be hot",
        "Forget everything daily",
        "Remember every detail forever",
        "Eat only bland food",
        "Never eat your favourite food again"
    ]
};

let usedQuestions = [];

function getRandomHalf(category) {
    const availableQuestions = questions[category].filter(q => !usedQuestions.includes(q));
    if (availableQuestions.length === 0) {
        usedQuestions = []; // Reset if all questions are used
        return getRandomHalf(category);
    }
    const question = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    usedQuestions.push(question);
    return question;
}

document.getElementById("rollButton").addEventListener("click", function () {
    // Get selected category
    const selectedType = document.querySelector('input[name="questionType"]:checked').value;

    // Add flip animation
    const card1 = document.getElementById("card1");
    const card2 = document.getElementById("card2");

    card1.classList.add("flip");
    card2.classList.add("flip");

    setTimeout(() => {
        // Generate random halves for each card
        const half1 = getRandomHalf(selectedType);
        const half2 = getRandomHalf(selectedType);

        card1.innerText = `Would you rather ${half1}?`;
        card2.innerText = `Would you rather ${half2}?`;

        card1.classList.remove("flip");
        card2.classList.remove("flip");
    }, 600); // Match the animation duration
});
