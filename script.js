const image = document.querySelector('#myPic')
const text = document.querySelector('h1')
const oneBtn = document.querySelector('#oneBtn')
const twoBtn = document.querySelector('#twoBtn')
const threeBtn = document.querySelector('#threeBtn')

oneBtn.addEventListener('click', past);
twoBtn.addEventListener('click', present);
threeBtn.addEventListener('click', future);

function past() {
    image.setAttribute("src", "https://i.pinimg.com/564x/0d/df/6f/0ddf6f0cc35950ac14215f7c62ae4892.jpg")
    text.innerHTML = "If you understand this rule,you have learned 👍"
    oneBtn.innerHTML = "I understood";
    twoBtn.style = "display: none"
    threeBtn.innerHTML = "Show me another variant";

    oneBtn.addEventListener('click', understood)
    threeBtn.addEventListener('click', anotherPast)
}
function understood() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1499306215218-42e51ae058b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uZ3JhdHVsYXRpb25zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60")
    text.innerHTML = "Congratulations!You have known yet!"
    oneBtn.style = "display: none"
    twoBtn.style = "display: none"
    threeBtn.style = "display: none"
}
function anotherPast() {
    image.setAttribute("src", "https://www.woodwardenglish.com/wp-content/uploads/2022/01/past-simple-tense-english.jpg")
    text.innerHTML = "Second variant"
    oneBtn.innerHTML = "Yeh!I knew!";
    twoBtn.style = "display: none"
    threeBtn.innerHTML = "I will return to this topic later... ";

    oneBtn.addEventListener('click', understood)
    threeBtn.addEventListener('click', seeYou)
}

function seeYou() {
    image.setAttribute("src", "https://ichef.bbci.co.uk/news/640/cpsprodpb/06FD/production/_93998710_16427450_10206889967482441_7675184686226534234_n.jpg")
    text.innerHTML = "Ok,See you later 👋"
    oneBtn.style = "display: none"
    twoBtn.style = "display: none"
    threeBtn.style = "display: none"
}
function present() {
    image.setAttribute("src", "https://7esl.com/wp-content/uploads/2018/05/PRESENT-SIMPLE-1.jpg")
    text.innerHTML = "If you understand this rule,you have learned 👍"
    oneBtn.innerHTML = "I understood";
    twoBtn.style = "display: none"
    threeBtn.innerHTML = "Show me another variant";

    oneBtn.addEventListener('click', understood)
    threeBtn.addEventListener('click', anotherPresent)
}
function understood() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1499306215218-42e51ae058b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uZ3JhdHVsYXRpb25zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60")
    text.innerHTML = "Congratulations!You have known yet!"
    oneBtn.style = "display: none"
    twoBtn.style = "display: none"
    threeBtn.style = "display: none"
}
function anotherPresent() {
    image.setAttribute("src", "https://files.liveworksheets.com/def_files/2021/9/1/109012108581362271/109012108581362271001.jpg")
    text.innerHTML = "Second variant"
    oneBtn.innerHTML = "Yeh!I knew!";
    twoBtn.style = "display: none"
    threeBtn.innerHTML = "I will return to this topic later... ";

    oneBtn.addEventListener('click', understood)
    threeBtn.addEventListener('click', seeYou)
}

function seeYou() {
    image.setAttribute("src", "https://ichef.bbci.co.uk/news/640/cpsprodpb/06FD/production/_93998710_16427450_10206889967482441_7675184686226534234_n.jpg")
    text.innerHTML = "Ok,See you later 👋"
    oneBtn.style = "display: none"
    twoBtn.style = "display: none"
    threeBtn.style = "display: none"
}
function future() {
    image.setAttribute("src", "https://i.pinimg.com/originals/5b/49/df/5b49df337887f1f2ea88b6ae2982df54.jpg")
    text.innerHTML = "If you understand this rule,you have learned 👍"
    oneBtn.innerHTML = "I understood";
    twoBtn.style = "display: none"
    threeBtn.innerHTML = "Show me another variant";

    oneBtn.addEventListener('click', understood)
    threeBtn.addEventListener('click', anotherFuture)
}
function understood() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1499306215218-42e51ae058b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uZ3JhdHVsYXRpb25zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60")
    text.innerHTML = "Congratulations!You have known yet!"
    oneBtn.style = "display: none"
    twoBtn.style = "display: none"
    threeBtn.style = "display: none"
}
function anotherFuture() {
    image.setAttribute("src", "https://7esl.com/wp-content/uploads/2018/04/future-simple-1.jpg")
    text.innerHTML = "Second variant"
    oneBtn.innerHTML = "Yeh!I knew!";
    twoBtn.style = "display: none"
    threeBtn.innerHTML = "I will return to this topic later... ";

    oneBtn.addEventListener('click', understood)
    threeBtn.addEventListener('click', seeYou)
}

function seeYou() {
    image.setAttribute("src", "https://ichef.bbci.co.uk/news/640/cpsprodpb/06FD/production/_93998710_16427450_10206889967482441_7675184686226534234_n.jpg")
    text.innerHTML = "Ok,See you later 👋"
    oneBtn.style = "display: none"
    twoBtn.style = "display: none"
    threeBtn.style = "display: none"
}
