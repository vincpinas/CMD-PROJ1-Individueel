const translations = {
    EN: {

    },
    NL: {

    }
}

class localization {
    constructor() {
        this.lang = this.getLang();
    }

    getLang() {
        if(localStorage.getItem("lang")) {
            return JSON.parse(localStorage.getItem("lang"))
        } else {
            return { lang: "Nederlands", code: "NL" }
        }
    }

    setLang(lang) {
        localStorage.setItem("lang", JSON.stringify(lang));
    }

    findLocalizationFields() {
        return document.querySelectorAll(".t")
    }

    popuplateLocalizationFields() {

    }
}