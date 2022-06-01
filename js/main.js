//Get slider Images | Array.from[ES6 Script]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get slider count form slider images
var sliderCount = sliderImages.length;

// Get slider number form slider container
var sliderNumber = document.getElementById('slide-number');


// Set the start slider
var startSlider = 1;

// Previuos and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prov');

// if i clicked previous or next
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;


// Create the ul in the .slider-control .indicators
var createElementUl = document.createElement('ul');

// Set Attribute ul
createElementUl.setAttribute('id', 'pagination-ul');


// Create li in the ul useing for loop
for (var i = 1; i <= sliderCount; i++){

    // Create the li in the ul
var createLiItem = document.createElement('li');

    //Set Attribute li
    createLiItem.setAttribute('data-index', i);

    //Add text node in the li
    createLiItem.appendChild(document.createTextNode(i));

    //Add li to ul item
    createElementUl.appendChild(createLiItem);

}

//Add ul item to the indicators
document.getElementById('indicators').appendChild(createElementUl);

//get ul
var  paginationNewUl = document.getElementById('pagination-ul');

//Get indicators li | Array.from[ES6 Script]
var paginationBullits = Array.from(document.querySelectorAll('#pagination-ul li'));

// loop through all bullites itme
for (var i = 0; i < paginationBullits.length; i++){

    paginationBullits[i].onclick = function () {

        startSlider = parseInt(this.getAttribute('data-index'));
        theCheaker();
    }
}

//Ranning the fucntion cheaker
theCheaker();

//function to clicked next slide
function nextSlide() {

    if (nextButton.classList.contains('disabled')) {
            return false;
    } else {
        startSlider++;

        theCheaker();
    }
}

//function to clicked previous slide
function prevSlide() {

    if (prevButton.classList.contains('disabled')) {
        return false;
    } else {
        startSlider--;

        theCheaker();
    }
}


//Create the cheaker Function
function theCheaker() {

    //set slide number 
    sliderNumber.textContent = 'Slide #' + startSlider + ' Of ' + sliderCount;

    //function to remove active from all 
    removeAllActive();

    //set active class on start slide
    sliderImages[startSlider - 1].classList.add('active');
    
    //set active class to Element Ul 
    paginationNewUl.children[startSlider - 1].classList.add('active');

    //cheak if start slide = 1
    if (startSlider === 1) {

        prevButton.classList.add('disabled');

    } else {

        prevButton.classList.remove('disabled');

    }

    //cheak if  start slide  = slider count
    if (startSlider === sliderCount) {

        nextButton.classList.add('disabled');

    } else {

        nextButton.classList.remove('disabled');

    }

}

// function to remove active from all 
function removeAllActive() {
    
        //do loop on images
       sliderImages.forEach((img) => {

        img.classList.remove('active');
       });
        

        //do loop on the bulltes
        paginationBullits.forEach((bullte) => {

            bullte.classList.remove('active');
        });
}


