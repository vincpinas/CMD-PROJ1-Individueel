import { faq_content } from "./static.js";

class Faq {
    constructor() {
        this.faq = document.querySelector(".faq ul")
        this.state = {};

        this.init()
    }

    init() {
        faq_content.forEach((paragraph, index)=> {
            const li = document.createElement("li"),
            h2 = document.createElement("h2"),
            article = document.createElement("article"),
            span = document.createElement("span")

            this.state[index] = false

            span.innerHTML = "►";
            
            h2.appendChild(span)
            h2.innerHTML = h2.innerHTML + paragraph.title

            article.innerHTML = paragraph.html;

            li.appendChild(h2)
            li.appendChild(article)

            li.addEventListener("click", () => {
                this.state[index] ? this.state[index] = false : this.state[index] = true;

                if(this.state[index]) {
                    li.classList.add("active")
                } else {
                    li.classList.remove("active")
                }
            })

            this.faq.appendChild(li)

            if(index === 0) {
                li.classList.add("active")
            }
        })
    }
}

new Faq();