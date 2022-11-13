// ==UserScript==
// @name         Yahoo bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot for Yahoo!
// @author       Vera Degtyareva
// @match        https://search.yahoo.com/*
// @match        https://napli.ru/*
// @match        https://kiteuniverse.ru/*
// @match        https://motoreforma.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
let links = document.links;
let btnK = document.getElementsByClassName("sbb")[0];
let sites = {
"napli.ru":["Установка и настройка Git", "10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress", "Вывод произвольных типов записей и полей в WordPress",],
"kiteuniverse.ru":["Kite Universe", "Ветровые арт инсталляции", "Фестиваль воздушных змеев"],
"motoreforma.com":["Мотореформа", "тюнинг для квадроциклов CAN-AM", "вариатор CV-Tech для Can-Am",]
};
let site = Object.keys(sites)[getRandom(0, Object.keys(sites).length)];
let keywords = sites[site];
let keyword = keywords[getRandom(0,keywords.length)];
let yInput = document.getElementById("yschsp");

if (location.hostname == "search.yahoo.com" && document.getElementsByClassName("next")[0] == undefined){
document.cookie = `site=${site}`;
} else if (location.hostname == "search.yahoo.com") {
site = getCookie("site");
} else {site = location.hostname;
}

if (location.hostname == "search.yahoo.com" && document.getElementsByClassName("next")[0] == undefined) {
    let i = 0;
    let timerId = setInterval(()=>{
        yInput.value += keyword[i];
        i++;
        if(i == keyword.length) {
            clearInterval(timerId);
            btnK.click();
        }
    }, 300);

} else if (location.hostname == site) {
    setInterval(() => {
        let index = getRandom(0, links.length);
        if (getRandom(0, 101) > 70) {
            location.href = "https://search.yahoo.com/";
        }
        if (links[index].href.indexOf(site) !== -1) links[index].click();
    }, getRandom(3000, 5000));
} else {
    let nextPage = true;
    for(let i = 0; i < links.length; i++) {
        if (links[i].href.indexOf(site) !== -1) {
            let link = links[i];
            nextPage = false;
            link.click();
            setTimeout(()=>{
                link.click();
            }, getRandom(2000, 4000));
            break;
        }
    }

if (document.getElementsByClassName("pages")[0].innerHTML.includes("<strong>5</strong>")) {
        nextPage = false;
        location.href = "https://search.yahoo.com/";
    }

    if (nextPage) {
        setTimeout(()=>{
          document.getElementsByClassName("next")[0].click();
        }, getRandom(2000, 4000))
    }
}
function getRandom(min,max) {
    return Math.floor(Math.random()*(max - min) + min);
}
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
