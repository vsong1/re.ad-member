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
document.getElementById("def-tab").click();

function closeTab(tabElement) {
    tabElement.classList.add("unopen");

    const defaultTab = document.querySelector("#tabs .def-tab");
    switchTab({ currentTarget: defaultTab }, 'book-site');
}

function openTab(tabElement, siteId) {
    tabElement.classList.remove("unopen");

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

    document.querySelectorAll('.forget-text').forEach(line => {
        const threshold = parseInt(line.dataset.click, 10);
        if (clicks >= threshold) {
            line.style.opacity = 0;
        }
    });
}


// widget-2
function toggleHide() {
    var element = document.getElementById("widget-2");
    element.classList.toggle("hide");
}

