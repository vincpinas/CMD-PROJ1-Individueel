import { tips_content } from "./static.js"

class Tips {
    constructor() {
        this.reloadAnimationMs = 500;
        this.reloadButton = document.querySelector(".tips > span > button");
        this.randomContainer = document.querySelector("#tips-random");
        this.favoriteContainer = document.querySelector("#tips-favorite");
        this.lastRandomIndex = null;
        this.favoriteStorageKey = "favorites"

        this.init();
    }

    init() {
        if (!localStorage.getItem(this.favoriteStorageKey)) localStorage.setItem(this.favoriteStorageKey, "[]");

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

            const random_tip = this.getRandomTip();

            this.randomContainer.innerHTML = random_tip.tip;

            setTimeout(() => {
                button.style.animation = "none"
                button.style.animation = ""

                button.disabled = false;
            }, this.reloadAnimationMs)

            const favorite_button = document.querySelector("#tips-random li > span > button")

            this.attachFavoriteEvent(favorite_button, random_tip);
        })

        button.click()
    }

    attachFavoriteEvent(button, tip) {
        button.addEventListener("click", () => {
            button.disabled = true;
            button.classList.add("active")

            const storage = JSON.parse(localStorage.getItem(this.favoriteStorageKey));
            let inStorage = false;

            for (let i = 0; i < storage.length; i++) {
                const element = storage[i];
                if (element.index === tip.index) inStorage = true;;
            }

            if (!inStorage) {
                storage.push(tip)
                localStorage.setItem(this.favoriteStorageKey, JSON.stringify(storage))
            }

            setTimeout(() => {
                this.reloadFavoriteList();
                this.reloadButton.click();
                button.disabled = false;
            }, 200)
        })
    }

    attachFavoriteRemoveEvent(button, tip) {
        button.addEventListener("click", () => {
            button.disabled = true;
            button.classList.remove("active")

            const storage = JSON.parse(localStorage.getItem(this.favoriteStorageKey));
            let inStorage = false;
            let foundIndex = null;

            for (let i = 0; i < storage.length; i++) {
                const element = storage[i];
                if (!element.index === tip.index) return;

                inStorage = true;
                foundIndex = i;
            }

            if (inStorage) {
                storage.splice(foundIndex, 1)
                localStorage.setItem(this.favoriteStorageKey, JSON.stringify(storage))
            }

            setTimeout(() => {
                this.reloadFavoriteList();
            }, 100)
        })
    }

    /* ------------------
    Helper Functions
    ---------------------*/

    reloadFavoriteList() {
        const favorites = JSON.parse(localStorage.getItem(this.favoriteStorageKey));

        this.favoriteContainer.innerHTML = ""

        favorites.forEach(favorite => {
            this.favoriteContainer.innerHTML += favorite.tip;
        })

        document.querySelectorAll("#tips-favorite li > span > button").forEach((button, index) => {
            button.classList.add("active")
            this.attachFavoriteRemoveEvent(button, favorites[index])
        })
    }

    random() {
        const rnd = Math.floor((Math.random()) * (tips_content.length - 1));
        if (rnd === this.lastRandomIndex) {
            return this.random()
        } else {
            this.lastRandomIndex = rnd
            return rnd
        }
    }

    getRandomTip() {
        const index = this.random()

        return { index, tip: tips_content[index] }
    }
}

new Tips();