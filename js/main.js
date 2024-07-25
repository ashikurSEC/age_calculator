function ageCalculator() {
    let inputDate = new Date(document.getElementById('date-input').value);
    let today = new Date();

    let birthYear = inputDate.getFullYear();
    let birthMonth = inputDate.getMonth();
    let birthDate = inputDate.getDate();

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();
    let currentDate = today.getDate();

    // Calculate age
    let ageYears = currentYear - birthYear;
    let ageMonths = currentMonth - birthMonth;
    let ageDays = currentDate - birthDate;

    // Adjust negative values
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12; // Add 12 to handle negative months
        ageDays = ageDays < 0 ? ageDays + new Date(currentYear, currentMonth, 0).getDate() : ageDays;
    }

    // Update HTML with calculated age
    document.getElementById('years').textContent = ageYears;
    document.getElementById('months').textContent = ageMonths;
    document.getElementById('days').textContent = ageDays;
}
