function getZodiacNumerologyAndBirthChart() {
    const birthdate = document.getElementById('birthdate').value;
    const birthTime = document.getElementById('birthTime').value; // Get time of birth

    if (!birthdate) {
        alert('Please enter your birth date');
        return;
    }

    if (!birthTime) {
        alert('Please enter your time of birth');
        return;
    }

    const date = new Date(birthdate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    // Parse the birth time into hours and minutes
    const timeParts = birthTime.split(":");
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);

    const zodiacSign = determineZodiacSign(day, month);
    const horoscope = getHoroscope(zodiacSign);
    const imageUrl = getZodiacImage(zodiacSign);
    const numerologyNumber = calculateNumerology(day, month, year);
    const numerologyReading = getNumerologyReading(numerologyNumber);
    const birthChart = calculateBirthChart(day, month, year, hours, minutes); // Pass time of birth

    document.getElementById('result').innerText = `Your Zodiac Sign is: ${zodiacSign}`;
    document.getElementById('horoscope').innerText = `Horoscope: ${horoscope}`;
    document.getElementById('numerology').innerText = `Your Numerology Number is: ${numerologyNumber}. ${numerologyReading}`;
    document.getElementById('birthChart').innerText = `Your Birth Chart:\nSun Sign: ${birthChart.sunSign}\nMoon Sign: ${birthChart.moonSign}\nRising Sign: ${birthChart.risingSign}`;

    const imageContainer = document.getElementById('zodiacImage');
    imageContainer.innerHTML = '';  
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = zodiacSign;
    imageContainer.appendChild(img);
}

// Uses if-else conditions to return the correct zodiac sign.
function determineZodiacSign(day, month) {
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        return "Aquarius";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "Pisces";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        return "Aries";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        return "Taurus";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "Gemini";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        return "Cancer";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        return "Leo";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        return "Virgo";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        return "Libra";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        return "Scorpio";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        return "Sagittarius";
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        return "Capricorn";
    }
}

// This function returns a horoscope message for a given zodiac sign
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

// This function returns the URL of an image corresponding to the zodiac sign
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

// This function calculates the numerology number based on the birthdate
function calculateNumerology(day, month, year) {
    const sum = day + month + year;
    return reduceToSingleDigit(sum);
}

// This function reduces a number to a single digit
function reduceToSingleDigit(number) {
    while (number > 9) {
        number = number.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return number;
}

// This function returns a numerology reading based on the numerology number
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

// This function calculates a simplified birth chart
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

// logic for determining Moon Sign based on date and time
function determineMoonSign(day, month, hours, minutes) {
    // Simplified moon sign calculation (this is a placeholder)
    const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
    const index = (day + month + Math.floor(hours / 2)) % 12;
    return signs[index];
}

// logic for determining Rising Sign based on date and time
function determineRisingSign(day, month, year, hours, minutes) {
    // Simplified rising sign calculation (this is a placeholder)
    const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
    const index = (day + month + year + hours + Math.floor(minutes / 10)) % 12;
    return signs[index];
}
