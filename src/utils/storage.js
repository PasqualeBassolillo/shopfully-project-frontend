import Cookies from 'universal-cookie';

function getItem (item) {
    if(typeof Storage == "undefined") {
        return localStorage.getItem(item) !== null ? JSON.parse(localStorage.getItem(item)) : [];
    } else {
        const cookies = new Cookies();
        return cookies.get(item) !== undefined ? cookies.get(item) : [];
    }
}

function setItem (key, items) {
    if(typeof Storage == "undefined") {
        localStorage.setItem(key, JSON.stringify(items));
    } else {
        const cookies = new Cookies();
        cookies.set(key, JSON.stringify(items), { path: '/' });
    }
}

export {getItem, setItem};