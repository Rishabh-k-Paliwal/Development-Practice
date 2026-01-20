const R = document.getElementById("R");
const i = document.getElementById("i");
const s = document.getElementById("s");
const h = document.getElementById("h");
const a = document.getElementById("a");
const b = document.getElementById("b");
const h2 = document.getElementById("h2");
const Rishabh = document.getElementById("Complete");

R.addEventListener("click", () => {R.style.display="none";
i.style.display="block";});

i.addEventListener("click", () => {i.style.display="none";
s.style.display="block";}
);

s.addEventListener("click", () => {s.style.display="none";
h.style.display="block";});

h.addEventListener("click", () => {h.style.display="none";
a.style.display="block";});     

a.addEventListener("click", () => {a.style.display="none";      
b.style.display="block";});

b.addEventListener("click", () => {b.style.display="none";      
h2.style.display="block";});

h2.addEventListener("click", () => {h2.style.display="none";        
Rishabh.style.display="block";});   

Rishabh.addEventListener("click", () => {Rishabh.style.display="none";        
R.style.display="block";});


