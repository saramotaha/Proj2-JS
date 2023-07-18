// function quote(){
//     var arrQuote = ['“Be yourself; everyone else is already taken.”', "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”", "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", "“So many books, so little time.”", "“A room without books is like a body without a soul.”", "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”"];
//     var randIndex = Math.floor(Math.random() * arrQuote.length);
//     var randValue = arrQuote[randIndex];
//     document.getElementById('NewQuote').innerHTML =randValue;
// }
function quote() {
    var arrQuote = [{
        text: "“Be yourself; everyone else is already taken.”",
        writer: "― Oscar Wilde"
    },
    {
        text: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        writer: "― Marilyn Monroe"
    },
    {
        text: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        writer: "― Albert Einstein"
    },
    {
        text: "“So many books, so little time.”",
        writer: "― Frank Zappa"
    },
    {
        text: "“A room without books is like a body without a soul.”",
        writer: "― Marcus Tullius Cicero"
    },
    {
        text: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        writer: "― Bernard M. Baruch"
    },
    {
        text: "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",
        writer: "― William W. Purkey"
    }
    ]
    var randIndex = Math.floor(Math.random() * arrQuote.length);
    var randValue = arrQuote[randIndex];
    document.getElementById('NewQuote').innerHTML = randValue.text;
    document.getElementById('Writer').innerHTML = randValue.writer;
}