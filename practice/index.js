const newelement = document.createElement("h2");
newelement.id = "second";
newelement.textContent = "this is ZeroOne ";


const element = document.getElementById("first");
// element.before(newelement);
element.after(newelement);


const newelement2 = document.createElement("h3");
newelement2.id = "third";
newelement2.textContent = "this is just practice set";
newelement.after(newelement2);

// _____________________________________________
// ______________________________________________
// ______________________________________________
// ______________________________________________
