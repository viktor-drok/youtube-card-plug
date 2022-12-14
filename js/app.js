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
const cardImg = document.querySelectorAll('.card-img');

const usedKeys = [];
const videosArr = [];
const posterArr = [];

const videos = {
    'ФабриКати - The Кум': '1BBLI5EUERw',
    'Ваня - The Кум & Лісапетний Батальйон': 'jaPoWRwUd5U',
    'Pagination in JavaScript': 'IqYiVHrO2U8',
    'CSS transform': 'uQEGUpsnqsw',
    'Адаптивные изображения': 'nTtuiBXKp88',
    'Создаем калькулятор': 'Gquaiuj-VpU',
    'Что такое контекст this': 'UGapN-hrekw',
    'Что такое замыкания': 'pahO5XjnfLA',
    'Асинхронность': 'vIZs5tH-HGQ',
    'Просто о promise в JavaScript': 'Sr0WT-XHwd0',
    'Просто o async, await': 'xXBTwb7cc88',
    'CSS EM REM': 'oJuVegSheQs',
    'Адаптивна верстка сайту': 'c3kgbhCWlF4',
    'Лучшие 100 медленных рок-песен': 'ct3BvWq8Q_8',
    'Создаем калькулятор': 'Gquaiuj-VpU',
    'ООП в JavaScript 4': 'JWwSH92tq7E',
    'ООП в JavaScript 1': 'ZmH262CgLsM',
    'ООП в JavaScript 2': 'rWfZAeEnn2I',
    'ООП в JavaScript 6': 'yOIbvm48S4A',
    'ООП в JavaScript 7': '9_qHG3dKfaw',
    'ООП в JavaScript 3': 'qjl1nZlW9q8',
    'ООП в JavaScript 5': '6KvItbbzi-g',
    'Не бойтесь THIS в JS': 'xY-mwUzDjsk',
    'ООП в JavaScript 8': 'CJ6Txj8leZQ',
    'ООП в JavaScript 9': '8FjoHtHY2mQ',
    'ООП в JavaScript 11': 'IjoVIS7t9SQ'

};
const videoIds = ['ntBOaJPmxdY', '8ui9umU0C2g', 'N36chN7a-aU', '_DNkq3Lbq-w', 'KB9dso-h_Es', 'AaGK-fj-BAM', '8ui9umU0C2g', 'N36chN7a-aU', '_DNkq3Lbq-w', 'KB9dso-h_Es', 'AaGK-fj-BAM', '8ui9umU0C2g', 'N36chN7a-aU', '_DNkq3Lbq-w'];

function stopVideo(element) {
    var iframe = element.querySelector('iframe');
    var video = element.querySelector('video');
    if (iframe !== null) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
    }
    if (video !== null) {
        video.pause();
    }
};
for (const video in videos) {
    videosArr.push(video);
    posterArr.push(videos[video]);
    contentItem.forEach((e, i) => {
        e.dataset.title = videosArr[i];
        cardImg[i].innerHTML = /*html*/`
            <img src="https://img.youtube.com/vi/${posterArr[i]}/hqdefault.jpg" alt="">
            </img>
        `;
    });
}
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

const usedLi = [];

contentList.forEach(item => {
    item.addEventListener('click', (e) => {
        const li = e.target.closest('li');

        if (li && !(usedKeys.find(el => el == li))) {
            // console.log(li);
            usedKeys.push(li);
            // console.log(usedKeys);
            // li.querySelector('.card-img').innerHTML = getIframe();
            for (const video in videos) {
                if (li.dataset.title == video) {
                    li.querySelector('.card-img').innerHTML = getIframe(videos[video]);
                    // console.log(usedLi.push(li.querySelector('.card-img')));
                    li.querySelector('h3').innerHTML = video;
                    // console.log(li.querySelector('iframe'));
                    // console.log(li.querySelector('video'));
                    break;
                } else {
                    li.querySelector('.card-img').innerHTML = getIframe(videoIds.shift());
                }
            };
            // console.log(usedKeys.find(el => el == li));
        }
    });
});
window.addEventListener('click', (e) => console.log(e.target));

function stopVideo(element) {
    let iframe = element.querySelector('iframe');
    let video = element.querySelector('video');
    if (iframe !== null) {
        let iframeSrc = iframe.src;
        iframe.src = iframeSrc;
    }
    if (video !== null) {
        video.pause();
    }
};