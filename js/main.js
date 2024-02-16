var arr = [
    {
        quote: '“All you need in this life is ignorance and confidence, and then success is sure.”',
        name: 'Mark Twain',
        image:'./images/15914_1_large.jpg'
    
    },
    {
        quote: '“You know you are on the road to success if you would do your job, and not be paid for it.”',
        name: 'Oprah Winfrey',
        image:'./images/2022-Sustainability-Report-1920.jpg.pc-adaptive.full.medium.jpg'
    },
    {
        quote: '“The best revenge is massive success.”',
        name: 'Frank Sinatra',
        image:'./images/Highway_400_Extension.jpg'
    },
    {
        quote: '“Failure is the condiment that gives success its flavor.”',
        name: 'Truman Capote',
        image:'./images/images.jpg'
    },
    {
        quote: '“Happiness lies in the joy of achievement and the thrill of creative effort.”',
        name: ' Franklin D. Roosevelt',
        image:'./images/jpg_44-2.jpg'
    },
    {
        quote: '“The secret of success is to do the common thing uncommonly well.”',
        name: 'John D. Rockefeller Jr.',
        image:'./images/pexels-quang-nguyen-vinh-2132126.jpg',
    },
    {
        quote: '“It is hard to fail, but it is worse never to have tried to succeed.”',
        name: 'Theodore Roosevelt',
        image:'./images/timon-klauser-3MAmj1ZKSZA-unsplash.jpg'
    },
    {
        quote: '“Doubt kills more dreams than failure ever will.”',
        name: 'Suzy Kassem',
        image:'./images/Untitled.jpg'
    }
];
var quotes = document.getElementById('quote');
var names = document.getElementById('name');
var images=document.getElementById('img')

var usedQuotes = [];
function getRandomQuotes() {
    if (usedQuotes.length === arr.length) {
       
        usedQuotes = [];
    }

    var random;
    do {
        random = Math.floor(Math.random() * arr.length);
    } while (usedQuotes.includes(random));

    usedQuotes.push(random)

    quotes.innerHTML = arr[random].quote
    names.innerHTML = arr[random].name
    images.style.background = `url('${arr[random].image}') center center / cover`
    images.style.backgroundRepeat = 'no-repeat';
    console.log(images)
}