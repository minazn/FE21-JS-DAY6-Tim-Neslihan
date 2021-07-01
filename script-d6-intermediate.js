let employees = [{
    "ID": "01",
    "firstName": "Tim",
    "lastName" : "Haselsteiner",
    "e_mail" : "TimH@mail.com",
    "job" : "Fullstack Developer",
    "salary" : "100k"
},{
    "ID": "02",
    "firstName": "Neslihan",
    "lastName" : "Minaz",
    "e_mail" : "NeslihanM@mail.com",
    "job" : "Frontend Developer",
    "salary" : "300k"

},{
    "ID": "03",
    "firstName": "Simone",
    "lastName" : "Graf",
    "e_mail" : "SimoneG@mail.com",
    "job" : "Frontend Developer",
    "salary" : "30k"
},{
    "ID": "04",
    "firstName": "Super",
    "lastName" : "Mario",
    "e_mail" : "SuperM@mail.com",
    "job" : "Hero",
    "salary" : "1100k"
},{
    "ID": "05",
    "firstName": "Johnny",
    "lastName" : "Depp",
    "e_mail" : "JD@mail.com",
    "job" : "Actor",
    "salary" : "just Millions"
},{
    "ID": "06",
    "firstName": "Neslihan",
    "lastName" : "Minaz",
    "e_mail" : "NeslihanM@mail.com",
    "job" : "Frontend Developer",
    "salary" : "300k"
},{
    "ID": "07",
    "firstName": "Neslihan",
    "lastName" : "Minaz",
    "e_mail" : "NeslihanM@mail.com",
    "job" : "Frontend Developer",
    "salary" : "300k"
},{
    "ID": "08",
    "firstName": "Neslihan",
    "lastName" : "Minaz",
    "e_mail" : "NeslihanM@mail.com",
    "job" : "Frontend Developer",
    "salary" : "300k"
},{
    "ID": "09",
    "firstName": "Neslihan",
    "lastName" : "Minaz",
    "e_mail" : "NeslihanM@mail.com",
    "job" : "Frontend Developer",
    "salary" : "300k"
},{
    "ID": "10",
    "firstName": "Neslihan",
    "lastName" : "Minaz",
    "e_mail" : "NeslihanM@mail.com",
    "job" : "Frontend Developer",
    "salary" : "300k"
}]

console.table(employees);

var employees_keys = Object.keys(employees[0]);

console.log(employees_keys);

for (val of employees_keys){
    document.getElementById("thead").innerHTML += "<th>" + val + "</th>";
}

// for (let i=0; i<employees.length; i++){
//     document.getElementById("table").innerHTML += "<tr><td>" + 
//     employees[i].ID + "</td><td>"+ employees[i].firstName + "</td><td>" + employees[i].lastName + 
//     "</td><td>" + employees[i].e_mail + "</td><td>" + employees[i].job + "</td><td>" + employees[i].salary + 
//     "</td></tr>";
// }

var tbl = "<tr><td>";

for (val of employees){
    for (keys of employees_keys){
        tbl += val[keys] + "</td><td>";
    }
    tbl = tbl.substring(0,tbl.length-4)+ "</tr>";
    tbl += "<tr><td>";
}

tbl = tbl.substring(0,tbl.length-8);

document.getElementById("table").innerHTML += tbl;


// console.log(tbl);