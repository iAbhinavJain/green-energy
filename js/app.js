/* Function being called on click of menu icon */
function toggleMenu() {
    /* Storing Nav items and menu icon in variables */
    var menu_items = document.querySelector('#mobile-header ul');
    var menu_icon = document.querySelector('.menu-icon i');
    /* On click of Menu Toggle Icon, we are Checking if the menu is closed/hidden, 
    if so, making it display and vice versa. Also, switching fontawesome icon respectively to improve UX  */
    if (menu_items.style.display == 'none') {
        menu_items.style.display = 'block';
        menu_icon.classList.remove('fa-bars');
        menu_icon.classList.add('fa-xmark');
    } else {
        menu_items.style.display = 'none';
        menu_icon.classList.remove('fa-xmark');
        menu_icon.classList.add('fa-bars');
    }
}

// Load your images on page-load
function preloader() {
    const imagesList = [
        "./img/govt.jpg",
        "./img/tech.jpg",
        "./img/group.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);


/* 
Get all buttons in a NODE LIST of buttons (array like structure) */
const btns = document.querySelectorAll('.switch-button');


/* 
Complete your resource-object that will store the dynamic content.
Resource object should 3 sub-objects. Give your sub-objects
meaningful names. Every sub-object should have the following
properties headingContent, bodyText, imgUrl and imgAlt. */

const resources = {
    first: {
        headingContent: "Government Subsidies and Innovation",
        bodyText: "Governments can play a vital role in making clean energy more affordable by providing subsidies and incentives. These can take various forms, such as tax credits, grants, or low-interest loans for individuals and businesses investing in clean energy technologies. By reducing the upfront costs and financial burden, these subsidies can encourage more people to adopt renewable energy sources like solar panels, wind turbines, or energy-efficient appliances.",
        imgUrl: "./img/govt.jpg",
        imgAlt: "Government Subsidies and Innovation"
    },
    second: {
        headingContent: "Technology and Innovation",
        bodyText: "Investing in research and development of clean energy technologies can drive down the costs of production and deployment. Governments, private companies, and academic institutions should collaborate to develop innovative solutions that are not only more efficient but also cost-competitive with fossil fuels. As technology improves, the economies of scale can further lower the overall cost of clean energy, making it more accessible to a broader segment of the population.",
        imgUrl: "./img/tech.jpg",
        imgAlt: "Tech and Innovation"
    },
    third: {
        headingContent: "Community-Based Initiatives",
        bodyText: "Community-based initiatives and cooperatives can make clean energy more affordable for local residents. By pooling resources, communities can collectively invest in clean energy projects, such as community solar installations or wind farms. These projects benefit from economies of scale, and the cost savings can be passed on to participants. Additionally, community involvement fosters a sense of ownership and encourages sustainable practices at the local level.",
        imgUrl: "./img/group.jpg",
        imgAlt: "Community-Based Initiatives"
    }
};

/* 
Get the reference to your HTML-container
that will be dynamically loaded from the resource-object. */

/* 
The first button in a NODE LIST of buttons will initially 
have the id: active-button - this will uniquely style 
the active button (CSS rule). 

The first content from the
resource-object will be loaded on the page load:
`<h1>${headingContent}</h1>
 <img src="${imgUrl}" alt="${imgAlt}">
 <p>${bodyText}</p>` */

document.querySelector('.content').innerHTML = `
<img src="${resources.first.imgUrl}" alt="${resources.first.imgAlt}">
<h1>${resources.first.headingContent}</h1>
<p>${resources.first.bodyText}</p>`;


/* 
Start your handleSelection function here. */

function handleSelection(event) {
    event.preventDefault();
    console.log(event.target.parentElement.classList);
    let currentButton = event.target.parentElement.classList;
    let content = document.querySelector('.content');
    document.querySelector('a#active').removeAttribute('id');
    if (currentButton.contains('first')) {
        content.innerHTML = `
        <img src="${resources.first.imgUrl}" alt="${resources.first.imgAlt}">
        <h1>${resources.first.headingContent}</h1>
        <p>${resources.first.bodyText}</p>`;
        document.querySelector('a.first').setAttribute('id', 'active');
    } else if (currentButton.contains('second')) {
        content.innerHTML = `<img src="${resources.second.imgUrl}" alt="${resources.second.imgAlt}">
        <h1>${resources.second.headingContent}</h1>
        <p>${resources.second.bodyText}</p>`;
        document.querySelector('a.second').setAttribute('id', 'active');
    } else if (currentButton.contains('third')) {
        content.innerHTML = `
        <img src="${resources.third.imgUrl}" alt="${resources.third.imgAlt}">
        <h1>${resources.third.headingContent}</h1>
        <p>${resources.third.bodyText}</p>`;
        document.querySelector('a.third').setAttribute('id', 'active');
    }
}

/*
Remove the id active-button from the element that
contains it prior to the click-event. 

This will require the loop throught the NODE LIST of buttons. 
Inside the loop, use conditional and the element object method
hasAttribute() to check if the current button in the loop containes the id.
If it does, use element-object property removeAttribute()
to remove the id. */

/*
Use the element-object method setAttribute() to set the id active-button 
to the currently clicked button. */





/*
Use conditional and event-object to check which button is clicked
and based on that, create HTML with the data inside the backticks:
`<h1>${headingContent}</h1>
 <img src="${imgUrl}" alt="${imgAlt}">
 <p>${bodyText}</p>`
Assign this content to to your HTML-container that will 
be dynamically loaded (you already got the reference to 
this container before you started the function handleSelection) */

/* 
Close your handleSelection function here. */

/* 
Register all buttons to click event. The event-handler handleSelection will listen 
for this event to happen. */

// call the function handlesSelection on click of each anchor tag inside the switch-buttons div
console.log(btns);
for (let btn of btns) {
    btn.setAttribute('onClick', 'handleSelection(event)');
}