// Get references to HTML elements
const textInput = document.getElementById('text');
const speedInput = document.getElementById('speed');
const pitchInput = document.getElementById('pitch');
const speakButton = document.getElementById('speak-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
const outputDiv = document.getElementById('output');
let currentCharacter;
let currentWordIndex = 0;
let isPaused = false; // track pause state

// Event listener for Speak button
speakButton.addEventListener('click', () => {
  // Resume from the current position if paused
  currentWordIndex = isPaused ? currentWordIndex : 0;
  // Clear the output if not resuming
  outputDiv.innerHTML = isPaused ? outputDiv.innerHTML : '';
  // Trigger the playText function with the content of the text input
  playText(textInput.value);
});

// Event listeners for Pause, Stop, Speed, and Pitch inputs
pauseButton.addEventListener('click', pauseText);
stopButton.addEventListener('click', stopText);
speedInput.addEventListener('input', updateSpeechParameters);
pitchInput.addEventListener('input', updateSpeechParameters);

// Initialize the SpeechSynthesisUtterance object
const utterance = new SpeechSynthesisUtterance();

// Event listener for the end of speech
utterance.addEventListener('end', () => {
  textInput.disabled = false; // Enable text input after speech ends
});

// Event listener for word boundaries
utterance.addEventListener('boundary', (event) => {
  const words = textInput.value.split(' ');
  const currentWord = words[currentWordIndex++]; // Get the next word
  outputDiv.innerHTML += '<span class="highlight">' + ' ' + currentWord + '</span>';
});

// Function to start or resume speech synthesis
function playText(text) {
  if (speechSynthesis.paused && speechSynthesis.speaking) {
    isPaused = true;
    return speechSynthesis.resume(); // Resume if speech is paused
  }
  if (speechSynthesis.speaking) return; // Do nothing if already speaking
  // Configure the utterance object and start speech synthesis
  utterance.text = text;
  utterance.rate = speedInput.value || 1;
  utterance.pitch = pitchInput.value || 1;
  textInput.disabled = true; // Disable text input while speaking
  speechSynthesis.speak(utterance);
  isPaused = false; // Reset pause state
}

// Function to pause speech synthesis
function pauseText() {
  if (speechSynthesis.speaking) {
    speechSynthesis.pause(); // Pause if speech is currently speaking
    isPaused = true; // Set pause state to true
  }
}

// Function to stop speech synthesis
function stopText() {
  speechSynthesis.resume(); // Resume before canceling to prevent issues
  speechSynthesis.cancel(); // Cancel speech synthesis
  updateSpeechParameters(); // Update speech parameters
  currentWordIndex = 0; // Reset the word index
  outputDiv.innerHTML = ''; // Clear the highlighted words in the output
}

// Function to update speech parameters (rate and pitch)
function updateSpeechParameters() {
  utterance.rate = speedInput.value || 1; // Set rate from the speed input
  utterance.pitch = pitchInput.value || 1; // Set pitch from the pitch input
}
