import { tips_content } from "./static.js"

class Tips {
    constructor() {
        this.reloadAnimationMs = 450;
        this.favoriteTimeout = 50;
        this.reloadButton = document.querySelector(".tips > span > button");
        this.randomContainer = document.querySelector("#tips-random");
        this.favoriteContainer = document.querySelector("#tips-favorite");
        this.lastRandomIndex = null;

        this.FAVORITES_KEY = "favorites"

        this.storage = this.refreshStorage();

        this.init();
    }

    init() {

        this.attachReloadEvent(this.reloadButton);

        this.reloadFavoriteList();
    }

    /* ------------------
Events
---------------------*/

    attachReloadEvent(button) {
        button.addEventListener("click", () => {
            button.disabled = true;
            button.style.animation = `rotate ${this.reloadAnimationMs}ms ease-out infinite forwards`

            const random_tip = this.random();

            this.randomContainer.innerHTML = `<li class="info"><h3>Je hebt alles al tussen je favorieten staan!</p></h3>`

            if(!this.tipsLeft()) {
                button.style.animation = "none"
                button.style.animation = ""
                button.disabled = false;
                return;
            }

            this.randomContainer.innerHTML = random_tip.tip;

            setTimeout(() => {
                button.style.animation = "none"
                button.style.animation = ""
                button.disabled = false;
            }, this.reloadAnimationMs)

            const favorite_button = document.querySelector("#tips-random li > div > button")

            if(!favorite_button) return;

            this.attachFavoriteEvent(favorite_button, random_tip);
        })

        button.click()
    }

    attachFavoriteEvent(button, tip) {
        button.addEventListener("click", () => {
            button.disabled = true;
            button.classList.add("active")

            this.refreshStorage();

            let inStorage = false;

            for (let i = 0; i < this.storage.favorites.length; i++) {
                const element = this.storage.favorites[i];
                if (element.index === tip.index) inStorage = true;
            }

            if (!inStorage) {
                this.storage.favorites.push(tip)
                this.setStorage(this.FAVORITES_KEY, this.storage.favorites)
            }

            setTimeout(() => {
                this.reloadFavoriteList();
                this.reloadButton.click();
                button.disabled = false;
            }, this.favoriteTimeout)
        })
    }

    attachFavoriteRemoveEvent(button, tip) {
        button.addEventListener("click", () => {
            button.disabled = true;
            button.classList.remove("active")

            this.refreshStorage();

            let inStorage = false;
            let foundIndex = null;

            for (let i = 0; i < this.storage.favorites.length; i++) {
                const element = this.storage.favorites[i];
                if (element.index === tip.index) {
                    inStorage = true;
                    foundIndex = element.index;
                }
            }

            if (inStorage) {
                const filtered_arr = this.storage.favorites.filter(favorite => favorite.index !== foundIndex)
                this.setStorage(this.FAVORITES_KEY, filtered_arr)
            }

            setTimeout(() => {
                this.reloadFavoriteList();
            }, this.favoriteTimeout)
        })
    }

        /* ------------------
    Actions / Partials
    ---------------------*/

    reloadFavoriteList() {
        const favorites = this.refreshStorage().favorites

        this.favoriteContainer.innerHTML = ""

        if(!this.storage.favorites) return;

        this.storage.favorites.forEach(favorite => {
            this.favoriteContainer.innerHTML += favorite.tip;
        })

        document.querySelectorAll("#tips-favorite li > div > button").forEach((button, index) => {
            button.classList.add("active")
            this.attachFavoriteRemoveEvent(button, favorites[index])
        })
    }

    tipFavorited(check_index) {
        let favorited_tips = [];

        for (let i = 0; i < this.storage.favorites.length; i++) {
            favorited_tips.push(this.storage.favorites[i].index)
        }

        if(favorited_tips.indexOf(check_index) >= 0) return true;
        else return false;
    }

    favoritedIds() {
        return this.storage.favorites.map(favorite => {
            return favorite.index
        })
    }

    tipsLeft() {
        if(this.storage.favorites && this.storage.favorites.length >= tips_content.length) return false;
        else return true;
    }

    random() {
        if(!this.tipsLeft()) return null;

        let available_tips = [...tips_content];

        this.storage.favorites.forEach(favorite => {
            let item = available_tips.indexOf(favorite.tip)
            available_tips.splice(item, 1)
        })

        const rnd = Math.floor((Math.random()) * (available_tips.length));
        if (rnd === this.lastRandomIndex && available_tips.length > 1) {
            return this.random()
        } else {
            this.lastRandomIndex = rnd
            return { index: rnd, tip: available_tips[rnd] }
        }
    }

    /* ------------------
    Helper Functions
    ---------------------*/

    setStorage = (key, obj) => {
        localStorage.setItem(key, JSON.stringify(obj));
    }

    validateStorage = (key, initialState) => {
        const temp = localStorage.getItem(key)

        if(temp) return JSON.parse(temp);
        else this.setStorage(key, initialState)
    }

    refreshStorage = () => {
        this.storage = {
            favorites: this.validateStorage(this.FAVORITES_KEY, [])
        }

        return this.storage;
    }
}

new Tips();