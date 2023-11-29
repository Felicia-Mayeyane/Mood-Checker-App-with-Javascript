document.getElementById('moodForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the entered mood from the input field
    const enteredMood = document.getElementById('mood').value.toLowerCase();

    // Display result based on the entered mood
    displayResult(enteredMood);
});

function displayResult(mood) {
    const resultElement = document.getElementById('result');

    switch (mood) {
        case 'happy':
            resultElement.innerHTML = '<p>It\'s great that you\'re feeling happy!</p><p>Quote: "Happiness is an inside job."</p><img src="upscale-235381510074212.png" alt="Apeach"><p>Suggested activities: Listen to your favorite music, take a walk, or spend time with loved ones.</p>';
            break;
        case 'sad':
            resultElement.innerHTML = '<p>I\'m here for you! It\'s okay to feel sad sometimes.</p><img src="puppy-eyes-sad-puppies-beagle-cute-animals.jpg" alt="puppy"><p>Quote: "Tough times never last, but tough people do."</p><p>Suggested activities: Watch a comforting movie, journal your feelings, or talk to a friend.</p>';
            break;
        case 'nervous':
            resultElement.innerHTML = '<p>Feeling nervous is normal. Take a deep breath, you got this!</p><img src="293585-cats-sad-kittens.jpg" alt="cat"><p>Quote: "Don\'t be pushed around by the fears in your mind. Be led by the dreams in your heart."</p><p>Suggested activities: Practice mindfulness, do some deep breathing exercises, or tackle one task at a time.</p>';
            break;
        case 'great':
            resultElement.innerHTML = '<p>Awesome! Feeling great is a fantastic mood.</p><img src="32-327356_pororo-holding-a-toy-plane-png-pororo-and.png" alt="pororo"><p>Quote: "You are never too old to set another goal or to dream a new dream."</p><p>Suggested activities: Plan something special for yourself, set new goals, or celebrate your achievements.</p>';
            break;
        default:
            resultElement.innerHTML = '<p>Invalid mood entered. Please choose from Sad, Happy, Nervous, or Great.</p>';
    }
}
