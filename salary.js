const prompt = require("prompt-sync")();

function calculateNetSalary() {
  let basicSalary = Number(prompt("Enter Basic Salary: "));
  let benefits = Number(prompt("Enter Benefits: "));

  if (
    isNaN(basicSalary) ||
    isNaN(benefits) ||
    basicSalary < 0 ||
    benefits < 0
  ) {
    console.log("Invalid input! Please enter positive numbers.");
    return;
  }

  let grossSalary = basicSalary + benefits;

  let payee = calculatePAYE(grossSalary);

  let nssfDeductions = calculateNSSF(grossSalary);

  let netSalary = grossSalary - (payee  + nssfDeductions);

  console.log("\nSalary Breakdown");
  console.log(`Gross Salary: KES ${grossSalary}`);
  console.log(`PAYE (Tax): KES ${payee}`);
  console.log(`NSSF Deduction: KES ${nssfDeductions}`);
  console.log(`Net Salary: KES ${netSalary}`);
}


function calculatePAYE(salary) {
  let tax = 0;

  if (salary <= 24000) {
    tax = salary * 0.1;
  } else if (salary <= 32333) {
    tax = 24000 * 0.1 + (salary - 24000) * 0.25;
  } else {
    tax = 24000 * 0.1 + (32333 - 24000) * 0.25 + (salary - 32333) * 0.3;
  }

  return tax;
}

function calculateNSSF(salary) {
  return Math.min(salary * 0.06, 1080);
}

calculateNetSalary();