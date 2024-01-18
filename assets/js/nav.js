class Nav {
    constructor() {
        this.links = document.querySelectorAll("header nav ul li a")

        this.init();
    }

    init() {
        this.links.forEach(link => {
            if(!location.href.toLowerCase().includes(link.href.toLowerCase())) return;

            link.setAttribute("style", "color:#FFF0DB;")
        })
    }
}

new Nav();