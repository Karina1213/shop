class LogoutClass {
    constructor(logoutId = "Log out") {
        this.logoutBtn = document.getElementById(logoutId);
    }

    addListener() {
        this.logoutBtn.addEventListener('click', (e) => {
            e.preventDefault()
            this.logoutEvent();
        })
    }

    logoutEvent() {
        localStorage.setItem('userStatus', 'false');
        location.reload();
    }
}

const logout = new LogoutClass();
if (logout.logoutBtn !== null)
    logout.addListener()