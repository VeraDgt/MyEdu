// ==UserScript==
// @name         Google bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot for Google!
// @author       Vera Degtyareva
// @match        https://www.google.com/*
// @match        https://napli.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
let links = document.links;
let btnK = document.getElementsByName("btnK")[0];
let keywords = ["установка и настройка Git","10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress", "Вывод произвольных типов записей и полей в WordPress"];
let keyword = keywords[getRandom(0,keywords.length)];
let googleInput = document.getElementsByName("q")[0];

if (btnK !== undefined) {
    let i = 0;
    let timerId = setInterval(()=>{
        googleInput.value += keyword[i];
        i++;
        if(i == keyword.length) {
            clearInterval(timerId);
            btnK.click();
        }
    }, 500);

} else if (location.hostname == "napli.ru") {
    // console.log("Мы на целевом сайте");
    setInterval(() => {
        let index = getRandom(0, links.length);
        if (getRandom(0, 101) > 70) {
            location.href = "https://www.google.com/";
        }
        if (links[index].href.indexOf("napli.ru") !== -1) links[index].click();
    }, getRandom(3000, 5000));
} else {
    let nextPage = true;
    for(let i = 0; i < links.length; i++) {
        if (links[i].href.indexOf("napli.ru") !== -1) {
            let link = links[i];
            nextPage = false;
            console.log("Нашел строку " + link);
            link.click();
            setTimeout(()=>{
                link.click();
            }, getRandom(2000, 4000));
            break;
        }
    }
    if (document.querySelector(".YyVfkd").InnerText == 5) {
        nextPage = false;
        location.href = "https://www.google.com/";
    }
    if (nextPage) {
        setTimeout(()=>{
            pnnext.click();
        }, getRandom(2000, 4000))
    }
}
function getRandom(min,max) {
    return Math.floor(Math.random()*(max - min) + min);
}
