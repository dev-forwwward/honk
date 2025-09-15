console.log("Blog Page")

$(document).ready(function () {

    let filterBtn = document.querySelectorAll(".fwd-filter-tag");
    // note: filterBtn also includes the Clear button

    let filterClearC = document.querySelector(".fwd-clear");
    let filterClearBtn;

    if (filterClearC) {
    filterClearBtn = filterClearC.querySelector(".fwd-button");
    }

    if (filterBtn && filterClearC) {
    // filter buttons click event - add click event to each filter
    filterBtn.forEach((btn) => {
        btn.addEventListener("click", function (e) {
        e.stopPropagation();

        // remove selection from Clear by default
        filterClearBtn.classList.remove("fwd-selected");

        for (let i = 0; i < filterBtn.length; i++) {
            // check for clicked btn
            if (filterBtn[i] == btn) {
            // differentiate between clear btn and regular filter btn
            // this is because the HTML structure is different for clear
            // so we have to first select its <a> element to then add the selection class
            if (filterBtn[i] == filterClearC) {
                filterClearBtn.classList.add("fwd-selected");

                // prevent scroll to top default
                e.preventDefault();
            } else {
                filterBtn[i].classList.add("fwd-selected");
            }
            } else {
            // if element wasn't clicked on, remove the selection class, in case it has it
            filterBtn[i].classList.remove("fwd-selected");
            }
        }


        });
    });
    }



});
