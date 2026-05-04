function createElement() {
    let el = document.createElement("div");
    el.innerText = "New Element";
    el.style.background = "lightblue";
    el.style.margin = "5px";
    el.style.padding = "5px";
    return el;
}

// append → end (inside)
function appendEl() {
    let parent = document.getElementById("container");
    parent.append(createElement());
}

// prepend → start (inside)
function prependEl() {
    let parent = document.getElementById("container");
    parent.prepend(createElement());
}

// before → outside (before target)
function beforeEl() {
    let target = document.getElementById("target");
    target.before(createElement());
}

// after → outside (after target)
function afterEl() {
    let target = document.getElementById("target");
    target.after(createElement());
}

// remove → delete element
function removeEl() {
    let target = document.getElementById("target");
    target.remove();
}