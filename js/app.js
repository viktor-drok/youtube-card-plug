
let s1 = new Swiper(".s-1", {
    slidesPerView: 4,
    spaceBetween: 5,
});

let s2 = new Swiper(".s-2", {
    slidesPerView: 4,
    spaceBetween: 5,
});

let s3 = new Swiper(".s-3", {
    slidesPerView: 4,
    spaceBetween: 5,
});

let s4 = new Swiper(".s-4", {
    slidesPerView: 4,
    spaceBetween: 5,
});

const contentList = document.querySelectorAll('.main-content-list');
const contentItem = document.querySelectorAll('.main-content-item');

const videoIds = ['1BBLI5EUERw', 'jaPoWRwUd5U', 'ntBOaJPmxdY', '8ui9umU0C2g', 'N36chN7a-aU', '_DNkq3Lbq-w', 'KB9dso-h_Es', 'AaGK-fj-BAM', '8ui9umU0C2g', 'N36chN7a-aU', '_DNkq3Lbq-w', 'KB9dso-h_Es', 'AaGK-fj-BAM', '8ui9umU0C2g', 'N36chN7a-aU', '_DNkq3Lbq-w'];

function getVideoId() {
    const iframeConst = /*html*/ ` 
                <iframe src="https://www.youtube.com/embed/${videoIds.shift()}"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
`;
    return iframeConst;
}
const usedLi = [];

contentList.forEach(list => {
    list.addEventListener('click', (e) => {
        const li = e.target.closest('li');
        if (li && !(usedLi.find(el => el == li))) {

            console.log(li);
            usedLi.push(li);
            console.log(usedLi);
            li.innerHTML = getVideoId();

            console.log(usedLi.find(el => el == li));

        }
    });
});