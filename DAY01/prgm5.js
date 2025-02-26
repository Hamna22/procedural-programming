baleno = {
    model :"Hatch back",
    varient :["automatic","manuel"],
    manufacturer:"maruti"
}

glanza = {
    manufacturer:"Toyota"
}

glanza.__proto__ =baleno
console.log(glanza.manufacturer);
console.log(glanza.model);

