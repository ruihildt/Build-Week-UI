// Get What input element
let filterInput = document.getElementById('sf-what');

// Add event listener
filterInput.addEventListener('keyup', filterTech);

function filterTech() {
    // Get value of input
    let filterValue = document.getElementById('sf-what').value.toUpperCase();
    // console.log(filterValue);

    // get all titles
    let titles = document.querySelectorAll('.product-description p:nth-of-type(1)');

    console.log(titles);
    
    for (let i = 0; i < titles.length;i++) {
        let p = titles[i];
        // If match
   
         if(p.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            // console.log(true)
            titles[i].style.display = '';
        } else {
            titles[i].parentNode.parentNode.style.display = 'none';
            // console.log(false);
        }
    }
}