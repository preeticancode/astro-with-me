// Function to get zodiac, numerology, and birth chart details
function getZodiacNumerologyAndBirthChart() {
    const birthdate = document.getElementById('birthdate').value;
    const birthTime = document.getElementById('birthTime').value;

    if (!birthdate) {
        alert('Please enter your birth date');
        return;
    }

    if (!birthTime) {
        alert('Please enter your time of birth');
        return;
    }

    // Converts the birthdate string into a JavaScript Date object to extract day, month, and year
    const date = new Date(birthdate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    // Parse the birth time into hours and minutes
    const timeParts = birthTime.split(":");
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);

    // Calculate zodiac sign, horoscope, image URL, numerology, and birth chart
    const zodiacSign = determineZodiacSign(day, month);
    const horoscope = getHoroscope(zodiacSign);
    const imageUrl = getZodiacImage(zodiacSign);
    const numerologyNumber = calculateNumerology(day, month, year);
    const numerologyReading = getNumerologyReading(numerologyNumber);
    const birthChart = calculateBirthChart(day, month, year, hours, minutes);

    // Display results in HTML elements
    document.getElementById('result').innerText = `Your Zodiac Sign is: ${zodiacSign}`;
    document.getElementById('horoscope').innerText = `Horoscope: ${horoscope}`;
    document.getElementById('numerology').innerText = `Your Numerology Number is: ${numerologyNumber}. ${numerologyReading}`;
    document.getElementById('birthChart').innerText = `Your Birth Chart:\nSun Sign: ${birthChart.sunSign}\nMoon Sign: ${birthChart.moonSign}\nRising Sign: ${birthChart.risingSign}`;

    // Display zodiac image
    const imageContainer = document.getElementById('zodiacImage');
    imageContainer.innerHTML = '';  
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = zodiacSign;
    imageContainer.appendChild(img);

    // Show result container
    document.getElementById('resultContainer').style.display = 'block';

    // Optionally trigger fireworks effect
    fireworkEffect();
}

// Function to determine zodiac sign based on day and month
function determineZodiacSign(day, month) {
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius";
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Pisces";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries";
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus";
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini";
    if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer";
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo";
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo";
    if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra";
    if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Scorpio";
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius";
    if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "Capricorn";
}

// Function to get horoscope message for a given zodiac sign
function getHoroscope(sign) {
    const horoscopes = {
        "Aquarius": "Today is a great day to focus on your goals.",
        "Pisces": "You may find yourself feeling extra creative today.",
        "Aries": "Be bold and take the initiative in your projects.",
        "Taurus": "Take time to relax and enjoy the simple pleasures.",
        "Gemini": "Communication is key, reach out to someone you've been thinking about.",
        "Cancer": "Nurture your relationships and spend time with loved ones.",
        "Leo": "Take center stage and let your talents shine.",
        "Virgo": "Focus on organization and detail in your work.",
        "Libra": "Seek balance and harmony in your interactions.",
        "Scorpio": "Embrace change and transformation.",
        "Sagittarius": "Explore new horizons and seek adventure.",
        "Capricorn": "Hard work and perseverance will pay off."
    };
    return horoscopes[sign];
}

// Function to get URL of an image corresponding to the zodiac sign
function getZodiacImage(sign) {
    const images = {
        "Aquarius": "assets/images/aquarius.png",
        "Pisces": "assets/images/pisces.png",
        "Aries": "assets/images/aries.png",
        "Taurus": "assets/images/taurus.png",
        "Gemini": "assets/images/gemini.png",
        "Cancer": "assets/images/cancer.png",
        "Leo": "assets/images/leo.png",
        "Virgo": "assets/images/virgo.png",
        "Libra": "assets/images/libra.png",
        "Scorpio": "assets/images/scorpio.png",
        "Sagittarius": "assets/images/sagittarius.png",
        "Capricorn": "assets/images/capricorn.png"
    };
    return images[sign];
}

// Function to calculate numerology number based on the birthdate
function calculateNumerology(day, month, year) {
    const sum = day + month + year;
    return reduceToSingleDigit(sum);
}

// Function to reduce a number to a single digit
function reduceToSingleDigit(number) {
    while (number > 9) {
        number = number.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return number;
}

// Function to get numerology reading based on the numerology number
function getNumerologyReading(number) {
    const readings = {
        1: "You are a leader with strong independence.",
        2: "You are diplomatic and sensitive to others.",
        3: "You are creative and enjoy expressing yourself.",
        4: "You are practical and hardworking.",
        5: "You crave adventure and variety.",
        6: "You are responsible and caring.",
        7: "You are introspective and analytical.",
        8: "You are ambitious and focused on success.",
        9: "You are compassionate and generous."
    };
    return readings[number];
}

// Function to calculate a simplified birth chart
function calculateBirthChart(day, month, year, hours, minutes) {
    const sunSign = determineZodiacSign(day, month);
    const moonSign = determineMoonSign(day, month, hours, minutes); // Include time in calculation
    const risingSign = determineRisingSign(day, month, year, hours, minutes); // Include time in calculation
    return {
        sunSign,
        moonSign,
        risingSign
    };
}

// Simplified moon sign calculation (placeholder)
function determineMoonSign(day, month, hours, minutes) {
    const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
    const index = (day + month + Math.floor(hours / 2)) % 12;
    return signs[index];
}

// Simplified rising sign calculation (placeholder)
function determineRisingSign(day, month, year, hours, minutes) {
    const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
    const index = (day + month + year + hours + Math.floor(minutes / 10)) % 12;
    return signs[index];
}

// Function to trigger fireworks effect
function fireworkEffect() {
    confetti({
        particleCount: 100,
        spread: 160,
        origin: { y: 0.6 }
    });
}

// Function to handle music playback controls
function setupMusicControls() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const playButton = document.getElementById('playMusic');
    const pauseButton = document.getElementById('pauseMusic');

    if (playButton) {
        playButton.addEventListener('click', () => {
            backgroundMusic.play();
        });
    }

    if (pauseButton) {
        pauseButton.addEventListener('click', () => {
            backgroundMusic.pause();
        });
    }
}

// Call setupMusicControls function when the page loads
window.onload = () => {
    setupMusicControls();
    setupQuiz();
};

// Quiz setup and handling
const quizData = [
    {
        question: "Which element do you feel most connected to?",
        answers: {
            a: "Fire",
            b: "Water",
            c: "Earth",
            d: "Air"
        }
    },
    {
        question: "What do you value most?",
        answers: {
            a: "Passion",
            b: "Emotions",
            c: "Stability",
            d: "Freedom"
        }
    },
    {
        question: "Which animal do you relate to the most?",
        answers: {
            a: "Lion",
            b: "Dolphin",
            c: "Elephant",
            d: "Eagle"
        }
    },
    {
        question: "What is your ideal weekend activity?",
        answers: {
            a: "Adventure sports",
            b: "Relaxing by the water",
            c: "Gardening",
            d: "Exploring new places"
        }
    }
];

const personalityResults = {
    a: "You have a fiery personality, full of passion and energy. You are a natural leader and love to take charge.",
    b: "You are deeply emotional and intuitive. You have a strong connection with your inner self and those around you.",
    c: "You are grounded and practical, valuing stability and consistency in your life. People see you as reliable and down-to-earth.",
    d: "You are free-spirited and value your independence. You are always seeking new experiences and are open to change."
};

let currentQuiz = 0;
let answersCount = { a: 0, b: 0, c: 0, d: 0 };

// Setup the quiz: handle name entry and quiz start
function setupQuiz() {
    const startQuizButton = document.getElementById('startQuiz');
    const userNameInput = document.getElementById('userName');
    const quizContainer = document.getElementById('quizContainer');
    const nameEntryContainer = document.getElementById('nameEntry');

    if (startQuizButton) {
        startQuizButton.addEventListener('click', () => {
            const userName = userNameInput.value.trim();
            if (userName) {
                nameEntryContainer.style.display = 'none';
                quizContainer.style.display = 'block';
                loadQuiz();
            } else {
                alert('Please enter your name to start the quiz.');
            }
        });
    }
}

// Load the quiz questions
function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    const quizContainer = document.getElementById('quiz');
    
    quizContainer.innerHTML = `
        <div class="quiz-question">${currentQuizData.question}</div>
        <label>
            <input type="radio" name="answer" value="a">
            ${currentQuizData.answers.a}
        </label><br>
        <label>
            <input type="radio" name="answer" value="b">
            ${currentQuizData.answers.b}
        </label><br>
        <label>
            <input type="radio" name="answer" value="c">
            ${currentQuizData.answers.c}
        </label><br>
        <label>
            <input type="radio" name="answer" value="d">
            ${currentQuizData.answers.d}
        </label>
    `;
}

// Handle quiz submission
document.getElementById('submitQuiz').addEventListener('click', () => {
    const answer = document.querySelector('input[name="answer"]:checked');
    
    if (answer) {
        answersCount[answer.value]++;
        currentQuiz++;
        
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // Determine the most selected answer
            let highestAnswer = Object.keys(answersCount).reduce((a, b) => 
                answersCount[a] > answersCount[b] ? a : b
            );
            
            // Display the personality result based on the most selected answer
            document.getElementById('quizResult').innerHTML = `<p>${personalityResults[highestAnswer]}</p>`;
            document.getElementById('quiz').innerHTML = ''; // Clear quiz questions
            document.getElementById('submitQuiz').style.display = 'none'; // Hide submit button
        }
    } else {
        alert('Please select an answer before proceeding.');
    }
});

// Function to set the max date for the birthdate input to today
function setMaxDate() {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    document.getElementById('birthdate').setAttribute('max', today);
}

// Call setMaxDate function when the page loads
window.onload = () => {
    setMaxDate();
    setupMusicControls();
    setupQuiz();
};
