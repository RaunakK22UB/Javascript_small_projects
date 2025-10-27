const paginationListWrapper = document.querySelector('.pagination-list');
const paginationNumbersWrapper = document.querySelector('.pagination-number');

const prevButton = document.querySelector('.btn-prev');
const nextButton = document.querySelector('.btn-next');

function createDummyData() {
    for (let i = 1; i <= 100; i++) {
        const li = document.createElement("li");
        li.textContent = `Card ${i}`;
        paginationListWrapper.appendChild(li);
    }
}

createDummyData();

const extractAllListitems = document.querySelectorAll("li");
console.log(extractAllListitems);

let paginationLimit = 10;
let pageCount = Math.ceil(extractAllListitems.length / paginationLimit);
let currentPage = 1;

function createPageNumber(currentIndex) {
    const pageNumber = document.createElement("button");
    pageNumber.classList.add("pagination-number");
    pageNumber.textContent = currentIndex;
    pageNumber.setAttribute("page-index", currentIndex);

    // ✅ Append page button to wrapper (not another button)
    paginationNumbersWrapper.appendChild(pageNumber);

    // ✅ Add click handler to switch pages
    pageNumber.addEventListener("click", () => {
        handleCurrentPage(currentIndex);
    });
}

function createPaginationNumbers() {
    for (let i = 1; i <= pageCount; i++) {
        createPageNumber(i);
    }
}
createPaginationNumbers();

function handleCurrentActivepageNumber() {
    document.querySelectorAll('.pagination-number').forEach((button) => {
       
        button.classList.remove('active-state');

        const getcurrentpageindex = Number(button.getAttribute('page-index'));

        if (getcurrentpageindex === currentPage) {
            button.classList.add('active-state');
        }
    });
}

function handleDisableButton(button) {
    button.classList.add('disabled');
    button.setAttribute('disabled', 'true');
}

function handleEnableButton(button) {
    button.classList.remove('disabled');
    button.removeAttribute('disabled');
}

function handlePaginationButtonStatus() {
    if (currentPage === 1) {   // we are at the 1st page
        handleDisableButton(prevButton);
    } else {
        handleEnableButton(prevButton);
    }

    if (pageCount === currentPage) {   // we reach the last page
        handleDisableButton(nextButton);
    } else {
        handleEnableButton(nextButton);
    }
}

function handleCurrentPage(getCurrentPageNumber) {
    currentPage = getCurrentPageNumber;

    handleCurrentActivepageNumber();
    handlePaginationButtonStatus();

    const getPreviousRange = (getCurrentPageNumber - 1) * paginationLimit;  
    const getCurrentrange = getCurrentPageNumber * paginationLimit;  

    extractAllListitems.forEach((listItems, index) => {  // sab par hide lagado aur 
        listItems.classList.add("hide");

     
        if (index >= getPreviousRange && index < getCurrentrange) {  // aur jo iss range me hai uss ko show karo bas
            listItems.classList.remove("hide");
        }
    });
}
handleCurrentPage(1);

prevButton.addEventListener('click', () => {
    handleCurrentPage(currentPage - 1);
});
nextButton.addEventListener('click', () => {
    handleCurrentPage(currentPage + 1);
});
