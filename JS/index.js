let firstImage = document.querySelector('.background-picture')
let x = document.querySelector('.h3')
let paragraph = document.querySelector('.paragraph-slider')
let slider = [{img:"images/slider-image1.jpg",
               tittle: "Something writtten",
               description: "Something written in paragraphs"
               
              },             
              {img:"images/slider-image2.jpg",
               tittle: "Something but other",
               description: "Bla blsahdada sadadas"
               
              },
              {img:"images/slider-image3.jpg",
               tittle: "Something but saassa",
               description: "awsadkasif adfaf"
              }
            ]

let imageIndex = 0;
let dugmeDesno = document.querySelector('.dugme-desno') 
let dugmeLevo = document.querySelector('.dugme-levo') 

function changeSlide(aindex){
    imageIndex = imageIndex + aindex;

    if (imageIndex > slider.length - 1){
        imageIndex = 0;
    }
    else if (imageIndex < 0){
        imageIndex = slider.length -1;
    }
    firstImage.src = slider[imageIndex].img;
    x.innerHTML = slider[imageIndex].tittle;
    paragraph.innerHTML = slider[imageIndex].description;
    // if (imageIndex < slider.length -1){
    //     imageIndex = imageIndex + aindex;
    // }
    // else if (imageIndex < 0){
    //     imageIndex = slider.length -1;
    // }
    // else {
    //     imageIndex = 0;
    // }
    console.log(imageIndex)
}

dugmeDesno.addEventListener('click', function(){
    changeSlide(1);
});
dugmeLevo.addEventListener('click',function(){
    changeSlide(-1);
});

/* image: "",
        title: "",
        description: "",
        url: ""
        
function changeSlideLevo(){
    firstImage.setAttribute('src', slider[imageIndexLevo])
    imageIndexLevo--;
    if (imageIndexLevo < 0){imageIndexLevo = 2}
}        
        
        
        
        */
