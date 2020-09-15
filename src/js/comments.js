import {LocalStorage} from "./localStorage.js";

class FotmatDate {
    static getDate(date) {
        this.hours = `0 ${date.getHours()}`;
        this.minutes = `0 ${date.getMinutes()}`;
        return `${this.hours.slice(-2)}:${this.minutes.slice(-2)}`;
    };
}

class Comment {
    constructor(input, form, textarea, commentsBox) {
        this.comments = [];
        this.date = FotmatDate.getDate(new Date());
        this.input = document.getElementById(input);
        this.form = document.getElementById(form);
        this.textarea = document.getElementById(textarea);
        this.commentsBox = document.getElementById(commentsBox);
    }

    addComment(name, comment) {
        if (name !== '' && comment !== '') {
            const data = {
                id: Date.now(),
                name: name,
                comment: comment
            };
            this.comments.push(data);
            this.addCommentsToLocalStorage(this.comments);
            this.input.value = '';
            this.textarea.value = ''
        }
    }

    addListener() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault()
            this.addComment(this.input.value, this.textarea.value)
        })
    }

    addCommentsToLocalStorage(comments) {
        LocalStorage.addToLocalStorage("commentsDate", comments);
        this.render();
    }


    getCommentsFromLocalStorage(key) {
        if (LocalStorage.getFromLocalStorage(key)) {
            this.comments = LocalStorage.getFromLocalStorage(key);
            this.render();
            return this;
        }
    }

    render() {
        this.commentsBox.innerHTML = '';

        this.comments.forEach((point) => {
            const renderHTML =
                `<div class="comments__block">
                     <div class="comments__name-date">
                         <p>${point.name}</p>
                         <p class="sub-title">${this.date}</p>
                    </div>
                    <div class="sub-title">${point.comment}</div>
                </div>`;
            this.commentsBox.insertAdjacentHTML("afterbegin", renderHTML);
        })
    }
}

const newComment = new Comment('input', 'form', 'textarea', 'commentsBox');
newComment.getCommentsFromLocalStorage("commentsDate")
newComment.addListener()