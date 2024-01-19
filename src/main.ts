let yearEl = <HTMLInputElement>document.getElementById("year");
let monthEl = <HTMLInputElement>document.getElementById("month");
let dayEl = <HTMLInputElement>document.getElementById("day");
let btnSubmit = <HTMLButtonElement>document.getElementById("btn-submit");

// error Elements
let errDay = document.getElementById('error-day')
let errMonth = <HTMLElement>document.getElementById('error-month')
let errYear = document.getElementById('error-year')


const calculateAge = (e: Event) => {
    e.preventDefault()
    if(+monthEl.value > 12) {
        // errMonth?.textContent = 'Must be vaild month'
    }
    
};
btnSubmit?.addEventListener("click", calculateAge);
