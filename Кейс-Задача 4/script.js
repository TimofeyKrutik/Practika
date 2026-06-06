function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function daysUntilNewYear(inputDate) {
    const parts = inputDate.split('.');

    if (parts.length !== 3) {
        return null;
    }
    
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return null;
    }

    const inputDateObj = new Date(year, month - 1, day);
    
    if (inputDateObj.getFullYear() !== year || 
        inputDateObj.getMonth() !== month - 1 || 
        inputDateObj.getDate() !== day) {
        return null;
    }

    const newYearDate = new Date(year, 11, 31);
    
    const diffTime = newYearDate - inputDateObj;
    
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
}

function calculate() {
    const dateInput = document.getElementById('dateInput').value;
    

    const daysDiv = document.getElementById('daysResult');
    const leapDiv = document.getElementById('leapResult');
    

    if (!dateInput.trim()) {
        daysDiv.textContent = ' Пожалуйста, введите дату!';
        leapDiv.textContent = ' Неверный формат даты';
        return;
    }
    

    const daysLeft = daysUntilNewYear(dateInput);
    

    if (daysLeft === null || daysLeft < 0) {
        daysDiv.textContent = ' Неверный формат даты! Используйте дд.мм.гггг';
        leapDiv.textContent = ' Не удалось определить год';
        return;
    }
    
    const parts = dateInput.split('.');
    const year = parseInt(parts[2], 10);

    const leap = isLeapYear(year);
    const leapText = leap ? ' Високосный' : ' Не високосный';
    

    daysDiv.textContent = ` До Нового года осталось ${daysLeft} ${getDaysWord(daysLeft)}! `;
    leapDiv.textContent = `${year} год — ${leapText}`;
}

function getDaysWord(days) {
    const lastDigit = days % 10;
    const lastTwoDigits = days % 100;
    
    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return 'дней';
    }
    
    if (lastDigit === 1) {
        return 'день';
    }
    
    if (lastDigit >= 2 && lastDigit <= 4) {
        return 'дня';
    }
    
    return 'дней';
}

document.getElementById('calculateBtn').addEventListener('click', calculate);

document.getElementById('dateInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calculate();
    }
});