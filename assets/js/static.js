const faq_content = [
    {
        title: "Wat is duurzaam eten?",
        html: `<blockquote cite="https://www.brainyquote.com/authors/mahatma-gandhi">
                    <p>"Earth provides enough to satisfy every man's needs, but not every man's greed."</p>
                    <cite>- Mahatma Gandhi</cite>
                </blockquote>
                <br>
                <p>Duurzaam eten gaat over het maken van <span class="-bold">milieuvriendelijke</span>, <span class="-bold">economisch slimme</span> en <span class="-bold">eerlijke</span> keuzes als het gaat om ons voedsel. Het betekent bijvoorbeeld dat we biologische landbouw steunen en dieren op een goede manier behandelen. Het doel is om zo min mogelijk schade aan het milieu te veroorzaken. Kortom, duurzaam eten is goed voor onze gezondheid en voor de planeet.</p>`
    },
    {
        title: "Wat kan ik doen om te beginnen?",
        html: "<p>Als je wilt beginnen met duurzaam eten is een simpele eerste stap om bewust te zijn van de hoeveelheid producten die je koopt. Koop alleen producten die je nodig hebt en waarvan je weet dat je ze zal eten voordat je een reden hebt om het weg te gooien.</p>"
    },
    {
        title: "Waar kan ik meer vinden over duurzaam eten?",
        html: `<p>Als je meer wilt weten over duurzaam eten buiten de content die beschikbaar is op deze website kun je een kijkje nemen op de website van <a href="https://www.voedingscentrum.nl/" target="_blank">Voeding Centrum</a>. Ze stellen hier veel hoge kwaliteit posts beschikbaar over eten in het algemeen.</p>`
    },
]

const heart_svg = `<svg width="89" height="89" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M81.0999 45.9262L44.9799 88L7.85191 41.6992C4.34844 37.3302 2.21061 32.0253 1.70571 26.4479L1.44812 23.6025C1.15418 20.3554 1.68875 17.0869 3.0018 14.1027C5.24351 9.0079 9.39893 4.99907 14.5709 2.9417L15.6225 2.5234C21.0957 0.346201 27.3172 1.28365 31.9058 4.97696L44.9799 15.5L54.23 6.77843C59.3105 1.98826 66.6123 0.377484 73.2366 2.58558C80.4907 5.00361 85.8765 11.1463 87.3254 18.6542L87.7513 20.8607C89.475 29.7931 87.0256 39.0237 81.0999 45.9262Z"/>
</svg>
`

const tips_content = [
    ` <li>
        <div>
            <h3>Oud brood weer lekker maken</h3>
            <button>${heart_svg}</button>
        </div>
        <ol>
            <li>
                <p>Was je handen</p>
            </li>
            <li>
                <p>Verwarm de oven op 220°C</p>
            </li>
            <li>
                <p>Pak het brood erbij</p>
            </li>
            <li>
                <p>Zet het koud water aan en maak één van je handen lichtelijk nat.</p>
            </li>
            <li>
                <p>Ga met de natte hand over het oude brood heen en zorg dat het hele broodje een beetje damp wordt, maar niet te nat.</p>
            </li>
            <li>
                <p>Zet het lichtelijk natte brood op een oven rooster zodat het aan beide kanten knapperig kan worden.</p>
            </li>
            <li>
                <p>Als de oven al voorverwarmd is kun je het rooster met het brood in de oven plaatsen voor 2-4 min.</p>
            </li>
            <li>
                <p>Geniet 😉</p>
            </li>
        </ol>
    </li>`,
    // ---------------------------
    `<li>
    <div>
        <h3>Gebruik too good to go</h3>
        <button>${heart_svg}</button>
    </div>
    <p><a href="https://www.toogoodtogo.com/nl/" target="_blank">Too good to go</a> is een gratis app beschikbaar voor iOS en Android die voedsel verspilling probeert tegen te gaan. Na een account aan te maken kun je je address invullen en dan zal de app automatisch voor de dichtsbijzijnde winkels zoeken die hier aan mee doen. Je kan dan tegen een lage prijs een voedsel pakket bestellen en deze ophalen bij de winkel waar je hem gereserveerd heb.
        Zo kun je goedkoop boodschappen doen en tegelijkertijd in de strijd tegen voedselverspilling helpen.</p>
    </li>`,
    // ---------------------------
    `<li>
    <div>
        <h3>Glazen flessen</h3>
        <button>${heart_svg}</button>
    </div>
    <p>
        In plaats van appelsap of ander drinken uit een pak te kopen is het aangeraden om glazen fles te kopen.
        Niet alleen is dit beter voor het millieu, omdat je deze fles kan hergebruiken. Het is ook beter voor je gezondheid, omdat je 
        alle microplastics die je bij een plastic pak erbij krijgt compleet vermijd.

        <br>
        <br>

        Eenmalige glazen flessen scoren wel slechter dan een blikje of pak dus als je hem maar een keer gebruikt is het aangeraden
        een andere verpakking te kiezen.
    </p>
    </li>`
]

export {
    faq_content,
    tips_content
}