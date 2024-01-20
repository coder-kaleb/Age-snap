const yearEl = <HTMLInputElement>document.getElementById("year");
const monthEl = <HTMLInputElement>document.getElementById("month");
const dayEl = <HTMLInputElement>document.getElementById("day");
const btnSubmit = <HTMLButtonElement>document.getElementById("btn-submit");
const cont = <HTMLDivElement>document.getElementById("cont");

// error Elements
const errDay = <HTMLElement>document.getElementById("error-day");
const errMonth = <HTMLElement>document.getElementById("error-month");
const errYear = <HTMLElement>document.getElementById("error-year");

// output elements
const outputYear = <HTMLElement>document.getElementById("output-year");
const outputMonth = <HTMLElement>document.getElementById("output-month");
const outputDay = <HTMLElement>document.getElementById("output-day");
// label elements err
const labelDay = <HTMLLabelElement>document.getElementById("labelDay");
const labelMonth = <HTMLLabelElement>document.getElementById("labelMonth");
const labelYear = <HTMLLabelElement>document.getElementById("labelYear");

const yearRegex = /^\d{4}$/;
const monthRegex = /^(0?[1-9]|1[0-2])$/;
const dayRegex = /^(0?[1-9]|[12]\d|3[01])$/;
let isvalid = false;
const calculateAge = (e: Event) => {
  e.preventDefault();

  if (e.target instanceof HTMLInputElement) {
    // Allow leading zero for days

    // Validate input values
    if (e.target === dayEl) {
      if (dayRegex.test(e.target.value)) {
        errDay.textContent = "";
        labelDay.classList.remove("text-light-red");
        isvalid = true;
      } else {
        errDay.textContent = "Must be valid days";
        labelDay.classList.add("text-light-red");
        isvalid = false;
      }
    } else if (e.target === monthEl) {
      if (monthRegex.test(e.target.value)) {
        errMonth.textContent = "";
        labelMonth.classList.contains("text-light-red") ? labelMonth.classList.remove("text-light-red") : ""
        isvalid = true;
      } else {
        errMonth.textContent = "Must be valid months";
        labelMonth.classList.add("text-light-red");
        isvalid = false;
      }
    } else if (e.target === yearEl) {
      if (yearRegex.test(e.target.value)) {
        errYear.textContent = "";
        labelYear.classList.remove("text-light-red");
        isvalid = true;
      } else {
        errYear.textContent = "Must be valid years";
        labelYear.classList.add("text-light-red");
        isvalid = false;
      }
    }

    // if (
    //   !yearRegex.test(yearEl.value) ||
    //   !monthRegex.test(monthEl.value)

    // ) {
    //   errDay.textContent = "Must be valid day";
    //   errMonth.textContent = "Must be valid month";
    //   errYear.textContent = "Must be valid year";
    //   // return;
    // }

    // Parse input values as numbers

    const parsedYear = parseInt(yearEl.value);
    const parsedMonth = parseInt(monthEl.value) - 1; // Adjust for JavaScript's 0-based months
    const parsedDay = parseInt(dayEl.value);

    // Create Date objects for birthdate and current date
    const birthDate = new Date(parsedYear, parsedMonth, parsedDay);
    const currentDate = new Date();
    // Check for future date
    if (birthDate > currentDate) {
      errDay.textContent = "Must be valid day";
      errMonth.textContent = "Must be valid month";
      errYear.textContent = "Must be valid year";
      isvalid = false;
      return;
    }
  }
};

const ageResult = () => {
  if (isvalid) {
    const parsedYear = parseInt(yearEl.value);
    const parsedMonth = parseInt(monthEl.value) - 1; // Adjust for JavaScript's 0-based months
    const parsedDay = parseInt(dayEl.value);

    // Create Date objects for birthdate and current date
    const birthDate = new Date(parsedYear, parsedMonth, parsedDay);
    const currentDate = new Date();

    // calculate age
    const ageInMilliseconds = currentDate.getTime() - birthDate.getTime();
    const ageInYears = Math.floor(
      ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25),
    );
    const remainingMilliseconds =
      ageInMilliseconds % (1000 * 60 * 60 * 24 * 365.25);
    let remainingMonths = Math.floor(
      remainingMilliseconds / (1000 * 60 * 60 * 24 * 30.436875),
    );
    let remainingDays =
      Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24)) -
      remainingMonths * 30.436875;
    remainingDays = Math.max(0, remainingDays);
    if (remainingDays > 30) {
      remainingMonths += 1;
      remainingDays = 1;
    }

    outputYear.textContent = `${ageInYears}`;
    outputMonth.textContent = `${remainingMonths}`;
    outputDay.textContent = `${Math.floor(remainingDays)}`;
  }
};

cont.addEventListener("input", calculateAge);
btnSubmit.addEventListener("click", ageResult);
