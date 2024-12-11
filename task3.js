export function ageCalculator(year, month, day) {
    const today = new Date();
    const birthDate = new Date (year, month -1, day)

    let ageYears = today.getFullYear() - birthDate.getFullYear;
    const ageMonths = today.getMonth();
    const ageDays = today.getDate();
if (ageMonths < birthDate.getMonth() || (ageMonths === birthDate.getMonth() && ageDays < birthDate.getDate()))(ageYears -=1)

}

return ageYears