
let s1 = new Swiper(".s-1", {
    slidesPerView: 4,
    spaceBetween: 5,
    mousewheel: true,
    breakpoints: {
        // when window width is >= 480px
        320: {
            slidesPerView: 2,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
        },
        // when window width is >= 640px
        960: {
            slidesPerView: 4,
        }
    }
});

let s2 = new Swiper(".s-2", {
    slidesPerView: 4,
    spaceBetween: 5,
    mousewheel: true,
    breakpoints: {
        // when window width is >= 480px
        320: {
            slidesPerView: 2,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
        },
        // when window width is >= 640px
        960: {
            slidesPerView: 4,
        }
    }
});

let s3 = new Swiper(".s-3", {
    slidesPerView: 4,
    spaceBetween: 5,
    mousewheel: true,
    breakpoints: {
        // when window width is >= 480px
        320: {
            slidesPerView: 2,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
        },
        // when window width is >= 640px
        960: {
            slidesPerView: 4,
        }
    }
});

let s4 = new Swiper(".s-4", {
    slidesPerView: 4,
    spaceBetween: 5,
    mousewheel: true,
    breakpoints: {
        // when window width is >= 480px
        320: {
            slidesPerView: 2,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
        },
        // when window width is >= 640px
        960: {
            slidesPerView: 4,
        }
    }
});

const contentList = document.querySelectorAll('.main-content-list');
const contentItem = document.querySelectorAll('.main-content-item');
const videos = {
    'ФабриКати - The Кум': '1BBLI5EUERw',
    'Ваня - The Кум & Лісапетний Батальйон': 'jaPoWRwUd5U',
};

const videoIds = ['ntBOaJPmxdY', '8ui9umU0C2g', 'N36chN7a-aU', '_DNkq3Lbq-w', 'KB9dso-h_Es', 'AaGK-fj-BAM', '8ui9umU0C2g', 'N36chN7a-aU', '_DNkq3Lbq-w', 'KB9dso-h_Es', 'AaGK-fj-BAM', '8ui9umU0C2g', 'N36chN7a-aU', '_DNkq3Lbq-w'];

function getIframe(videoProperty) {
    const iframe = /*html*/ ` 
                <iframe src="https://www.youtube-nocookie.com//embed/${videoProperty}"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
`;
    return iframe;
}
const usedKeys = [];

contentList.forEach(list => {
    list.addEventListener('click', (e) => {
        const li = e.target.closest('li');
        if (li && !(usedKeys.find(el => el == li))) {
            console.log(li);
            usedKeys.push(li);
            console.log(usedKeys);
            // li.querySelector('.card-img').innerHTML = getIframe();
            for (const video in videos) {
                if (li.querySelector('h3').innerText == video) {
                    li.querySelector('.card-img').innerHTML = getIframe(videos[video]);
                    break;
                } else {
                    li.querySelector('.card-img').innerHTML = getIframe(videoIds.shift());
                }
            };
            console.log(usedKeys.find(el => el == li));
        }
    });
});