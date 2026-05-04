const btn = document.createElement('button');

btn.textContent = 'click me';
btn.style.backgroundColor = 'red';
btn.style.color = 'white';

// insert as FIRST element — before any existing children
document.body.insertBefore(btn, document.body.firstChild);
const p = document.querySelector('p');

// ❌ WRONG — overwrites "intro", loses teal color
// p.className = 'highlight';

// ✅ RIGHT — appends "highlight" without removing "intro"
p.classList.add('highlight');

// Now p has class="intro highlight" — both styles apply
console.log(p.className); // "intro highlight"