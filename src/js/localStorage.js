export class LocalStorage {
    static addToLocalStorage(item, data) {
        localStorage.setItem(item, JSON.stringify(data));
    }

    static getFromLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }
}