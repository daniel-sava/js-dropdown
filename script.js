const dropdowns = document.getElementsByClassName('dropdown');
const dropdownsContent = document.getElementsByClassName('nav-dropdown');

function initDropdowns() {
    for (let dropdownContent of dropdownsContent) {
        dropdownContent.style.display = 'none';
        initSecondaryDropdownsListener(dropdownContent);
    }
}

function initMainDropdownsListener() {
    for (let dropdown of dropdowns) {
        dropdown.addEventListener('click', () => {
            const dropdownContent =
                dropdown.parentNode.querySelector('.nav-dropdown');

            if (dropdownContent.style.display === 'none') {
                initDropdowns();
            }

            dropdownContent.style.display =
                dropdownContent.style.display === 'none' ? 'block' : 'none';
        });

        // dropdown.addEventListener('mouseout', () => {
        //     const dropdownContent =
        //         dropdown.parentNode.querySelector('.nav-dropdown');

        //     dropdownContent.style.display =
        //         'none';
        // });
    }
}

function initSecondaryDropdownsListener(parentDropdown) {
    const secondaryDropdowns = parentDropdown.querySelectorAll('.dropdownLink');

    for (let secondaryDropdown of secondaryDropdowns) {
        secondaryDropdown.addEventListener('mouseover', () => {
            const dropdownContent =
                secondaryDropdown.parentNode.querySelector('.nav-dropdown');

            dropdownContent.style.display = 'block';
        });

        secondaryDropdown.addEventListener('mouseout', () => {
            const dropdownContent =
                secondaryDropdown.parentNode.querySelector('.nav-dropdown');

            dropdownContent.style.display = 'none';
        });
    }
}

initDropdowns();
initMainDropdownsListener();
