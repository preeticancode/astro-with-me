function getZodiacHoroscope() {
    const birthdate = document.getElementById('birthdate').value;
    if (!birthdate) {
        alert('Please enter your birth date');
        return;
    }

    const date = new Date(birthdate);
    const day = date.getDate();
    const month = date.getMonth() + 1;

    const zodiacSign = determineZodiacSign(day, month);
    const horoscope = getHoroscope(zodiacSign);

    document.getElementById('result').innerText = `Your Zodiac Sign is: ${zodiacSign}`;
    document.getElementById('horoscope').innerText = `Horoscope: ${horoscope}`;
}

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
