const txt = document.querySelector('#actual-text');

// website tabs
function switchTab(evt, tabName) {
    var i, sites, tabs;

    sites = document.getElementsByClassName("site");
    for (i = 0; i < sites.length; i++) {
        sites[i].style.display = "none";
    }

    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

function closeTab(tabElement) {
    tabElement.classList.add("unopen");

    const defaultTab = document.querySelector("#tabs .def-tab");
    switchTab({ currentTarget: defaultTab }, 'book-site');
}

function openTab(tabElement, siteId) {
    tabElement.classList.remove("unopen");
    document.getElementById(siteId).firstElementChild.style.display = "block";
    switchTab({ currentTarget: tabElement }, siteId);
}


// tooltip widget
function toggleTooltip(widget) {
    document.getElementById(widget).classList.toggle("show")
}

// appearing text widget
function addText(widget) {
    document.getElementById(widget).style.display='inline'
}

// disappearing text widget
function removeText(element) {
    element.style.display='none'
}

// stuff starts disappearing
let clickedLinks = new Set();
function trackClicks(link) {
    clickedLinks.add(link);
    const clicks = clickedLinks.size;

    document.querySelectorAll('.forget-text').forEach(line => {
        const threshold = parseInt(line.dataset.click, 10);
        if (clicks >= threshold) {
            line.style.opacity = 0;
        }
    });
}

// blur text
function toggleHide(widget) {
    document.getElementById(widget).classList.toggle("hide");
}

// flash in/out
function flash() {
    const flashingThing = document.getElementById('flash-overlay');
    flashingThing.classList.remove("flash-active");
    void flashingThing.offsetWidth; 
    flashingThing.classList.add('flash-active');

    flashingThing.addEventListener('animationend', () => {
        flashingThing.classList.remove('flash-active');
    }, { once: true });
}

// widget-9
function changeText9() {
    document.getElementById('widget-9').textContent = 
    ". I made sure to wash them thoroughly with soap this time before putting them away. \
    Salmonella might be unlikely but the consequences are an absolute pain in every aspect. \
    I learned when Harvey took out half the office for over a week with his chicken salad that one time last winter."
}

// widget-13
function changeText13() {
    document.getElementById('widget-13').textContent = 
    "like that traumatized hedgehog with commitment issues in a educational video I watched at one point."
}

// widget-20
function changeEffect20() {
    document.getElementById('widget-20').onclick = "removeText(this); addText('widget-19');"
}

document.addEventListener("DOMContentLoaded", () => {
    const loadingOverlay = document.getElementById("no-click");
    loadingOverlay.style.display = "none";

    document.getElementById("def-tab").click();
});