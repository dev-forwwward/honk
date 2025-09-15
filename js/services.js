console.log("Services Page")

$(document).ready(function () {

    let isServices = document.querySelector(".services-page");
    if (isServices) {

        function showTabs() {
            if (window.innerWidth > 992) {
                // TABS ANIMATION
                let tabs = document.querySelectorAll(".tabs-component-live .tabs-menu .tab-link");
                let panes = document.querySelectorAll(".tabs-component-live .w-tab-content .w-tab-pane");
                let progressBars = document.querySelectorAll(".tabs-component-live .progress-bar");
                let currentIndex = 0;
                let intervalTime = 4000; // Interval time in milliseconds (3 seconds)
                let interval;
                let progressInterval;
            
                function updateProgressBar() {
                let progress = 0;
                let step = 100 / (intervalTime / 100); // Calculate the step size based on interval time
                clearInterval(progressInterval); // Clear any existing progress intervals
            
                progressInterval = setInterval(() => {
                    progress += step;
                    if (progress > 100) {
                    progress = 100;
                    }
                    progressBars[currentIndex].style.width = progress + '%';
                }, 100);
                }
            
                function resetProgressBars() {
                progressBars.forEach((bar) => {
                    bar.style.width = '0%';
                });
                }
            
                function showTab(index) {
                // Remove active class from all tabs and panes
                tabs.forEach((tab, i) => {
                    tab.classList.remove("w--current");
                    panes[i].classList.remove("w--tab-active");
                    panes[i].style.opacity = 0; // Set initial opacity to 0 for fade out
                });
            
                // Add active class to the current tab and pane
                tabs[index].classList.add("w--current");
                panes[index].classList.add("w--tab-active");
            
                // Animate the content
                panes[index].style.transition = "opacity 0.3s ease-in-out";
                setTimeout(() => {
                    panes[index].style.opacity = 1; // Fade in
                }, 100); // Small delay to trigger transition
            
                // Start progress bar
                resetProgressBars();
                updateProgressBar();
                }
            
                function showNextTab() {
                currentIndex = (currentIndex + 1) % tabs.length;
                showTab(currentIndex);
                }
            
                // Set up the interval to automatically change tabs
                function startInterval() {
                clearInterval(interval); // Clear any existing interval
                interval = setInterval(showNextTab, intervalTime);
                resetProgressBars();
                updateProgressBar();
                }
            
                // Event listener for tab clicks
                tabs.forEach((tab, index) => {
                tab.addEventListener("click", () => {
                    currentIndex = index;
                    showTab(currentIndex);
                    startInterval(); // Restart the interval on tab click
                });
                });
            
                // Initialize
                showTab(currentIndex);
                startInterval();
            }
        }

        showTabs();
    }
});

