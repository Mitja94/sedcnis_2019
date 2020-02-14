var slider = [{
        image: "images/slider-image1.jpg",
        title: "Start your journey with our practical courses AAAA",
        description: "Our online courses are build in partnership with technology leaders and are designed to meet industry demands",
        url: ""
    },
    {
        image: "images/slider-image2.jpg",
        title: "Start your journey with our practical courses 2 ",
        description: "Our online courses are build in partnership with technology leaders and are designed to meet industry demands",
        url: ""
    },
    {
        image: "images/slider-image3.jpg",
        title: "Start your journey with our practical courses 3",
        description: "Our online courses are build in partnership with technology leaders and are designed to meet industry demands",
        url: ""
    }
];

let currentIndex = 0;
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let sliderPhoto = document.getElementById("courses-image");
//find h1 element
let heading = document.getElementById("heading-text");
//find paragraph element
let paragraph = document.getElementById("description-text");
//find anchor
let url = document.getElementById("slider-url");

function changeSlide(index) {
    currentIndex = currentIndex + index;

    if (currentIndex > slider.length - 1) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slider.length - 1;
    }



    sliderPhoto.src = slider[currentIndex].image;
    heading.innerHTML = slider[currentIndex].title;
    paragraph.innerHTML = slider[currentIndex].description;
    url.href = slider[currentIndex].url;
    url.innerHTML = "hocu da pise nesto drugo";

    console.log(currentIndex);
}

changeSlide(0);

prev.addEventListener("click", function() {
    changeSlide(-1);
});
next.addEventListener("click", function() {
    changeSlide(+1);
});



// if (mobile) {
//     currentIndex = + -1

// } else
//     currentIndex + 1(+2)

let popularCourses = [{
        image: "images/courses-image5.jpg",
        date: "5/10/2018",
        time: "",
        url: ""
    },
    {
        image: "images/courses-image1.jpg",
        date: "5/10/2018",
        time: "",
        url: ""
    },
    {
        image: "images/courses-image2.jpg",
        date: "5/10/2018",
        time: "",
        url: ""
    },
    {
        image: "images/courses-image3.jpg",
        date: "6/10/2018",
        time: "",
        url: ""
    },
    {
        image: "images/courses-image4.jpg",
        date: "7/10/2018",
        time: "",
        url: ""
    },
];

let isMobile = false;

function checkIsMobile() {
    if (window.innerWidth <= 992) {
        isMobile = true;
    } else {
        isMobile = false;
    }

    console.log("da li je mobilna verzija: " + isMobile);
}
let left = document.getElementById("left");
let right = document.getElementById("right");
let coursesImage = document.getElementById("courses-image");
//ovde ce index biti 1,2 ili 3 jer prikayujemo tri slike 012, 120 i 012
function changeCourses(index) {
    currentIndex = currentIndex + index;
    checkIsMobile();
    if (isMobile) {
        //logika kad je prikazan jedan element
        if (currentIndex > popularCourses.length - 1) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = popularCourses.length - 1;
        }
        console.log(currentIndex);
        coursesImage.src = popularCourses[currentIndex].image;
    } else {
        //logika kad su prikazana tri elementa
    }
    // return vrednost
}

window.addEventListener("resize", function() {
    //check window width
    checkIsMobile();
});








changeCourses(0);

left.addEventListener("click", function() {
    changeCourses(-1);
});
right.addEventListener("click", function() {
    changeCourses(+1);
});