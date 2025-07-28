const slider = document.querySelector('.slider');
const dotsContainer = document.querySelector('.dots-container')
async function fetchListOfImages() {
    try {

        const response = await fetch('https://picsum.photos/v2/list?page=1&limit=3', {
            method: 'GET'
        });
        const result = await response.json();

        if (result && result.length > 0) displayImages(result);

        console.log(result);


    } catch (error) {
        console.log(error)
    }

}

function displayImages(imagesList) {
    slider.innerHTML = imagesList.map(
        (image) => `

            <div class="slide">
            <img src=${image.download_url} alt=${image.id}/>
            </div>

        `
    ).join(" ");

    dotsContainer.innerHTML = imagesList.map(
        (image, index) => `
        <span class="dot ${index === 0 ? "active" : ""}"  data-slide=${index}></span>
        `
    ).join(" ");

}



fetchListOfImages();



// slider functionality beginse here

setTimeout(() => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentSlide = 0;



        function activeDot(slide) {
            document.querySelectorAll('.dot').forEach((dotItem) => dotItem.classList.remove('active'));
            document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('active');

        }




        function changeCurrentSlide(currentSlide) {
            slides.forEach((slideItem, index) =>
                (slideItem.style.transform = `translateX(${100 * (index - currentSlide)}%)`)
            );

        }




        changeCurrentSlide(currentSlide);




        nextBtn.addEventListener('click', () => {
            currentSlide++;
            if (slides.length - 1 < currentSlide) {
                currentSlide = 0;
            }
            changeCurrentSlide(currentSlide);
            activeDot(currentSlide);
        })




        prevBtn.addEventListener('click', () => {
            currentSlide--;
            if (0 > currentSlide) {

                currentSlide = slides.length-1;


            }
            changeCurrentSlide(currentSlide);
            activeDot(currentSlide);

        })


        

        dotsContainer.addEventListener('click', (event) => {
            if(event.target.classList.contains('dot')){
                const currentSlide = event.target.dataset.slide
                changeCurrentSlide(currentSlide);
                activeDot(currentSlide);
            }

        })
    


}, 1000);
