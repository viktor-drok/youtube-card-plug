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

console.log(cardImg);
let videoKeysArr = [];
function assignID() {
    for (let i = 0; i < cardImg.length; i++) {
        for (const videoKey in videos) {
            videoKeysArr.push(videos[videoKey]);
        }
        let playerID = cardImg[i].id = videoKeysArr[i];
    }
}

assignID();

contentItem.forEach(item => item.addEventListener('click', (e) => {
    let target = e.target.closest('.card-img');
    if (target) {
        console.log(target);


        let tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        function onYouTubeIframeAPIReady() {
            let player = new YT.Player(target.id, {
                videoId: target.id,
            });
        }
        onYouTubeIframeAPIReady();
        let iframeList = [...document.querySelectorAll('iframe')];
        iframeList.forEach(iframe => {
            if (iframeList.length == 0) {
                iframe.dataset.div = /*html */`<div class="card-img" id="${target.id}"></div>`;
            } else if (iframeList.length != 0) {
                console.log(iframeList);
                iframe = iframeList.shift();
                document.getElementById(target.id);
            }
        });
        console.log(iframeList);
    }
}));

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

// 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//     event.target.playVideo();
// }

// // 5. The API calls this function when the player's state changes.
// //    The function indicates that when playing a video (state=1),
// //    the player should play for six seconds and then stop.
// let done = false;
// function onPlayerStateChange(event) {
//     if (event.data == YT.PlayerState.PLAYING && !done) {
//         setTimeout(stopVideo, 6000);
//         done = true;
//     }
// }
// function stopVideo() {
//     player.stopVideo();
// }