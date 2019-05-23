// Get Search input element
let filterInput = document.getElementById('sf-what');

// Add event listener
filterInput.addEventListener('keyup', filterTech);

function filterTech() {
    // Get value of input and add uppercase
    let filterValue = document.getElementById('sf-what').value.toUpperCase();
    // console.log(filterValue);

    // get all Popular Products titles
    let titles = document.querySelectorAll('.popular .product-description p:nth-of-type(1)');

    // console.log(titles);
    
    for (let i = 0; i < titles.length;i++) {
        let p = titles[i];

        // Hide/Show cards according to input match
         if(p.innerText.toUpperCase().indexOf(filterValue) > -1) {
            // console.log(true)
            titles[i].parentNode.parentNode.classList.remove('hide-card');
        } else {
            titles[i].parentNode.parentNode.classList.add('hide-card');
            // console.log(false);
        }
    }
}