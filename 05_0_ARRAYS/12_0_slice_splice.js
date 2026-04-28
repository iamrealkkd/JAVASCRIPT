let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// a
companies.shift();

// b
companies.splice(1, 1, "Ola");

// c
companies.push("Amazon");

console.log(companies);