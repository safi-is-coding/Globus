const quoteContent = document.querySelector('.quote')
const authorName = document.querySelector('.author')
const btn = document.querySelector('.btn')



const quotes = [
    {
       quote: `"I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy."`,
       person: "Ray Kroc"
    },

    {
       quote: `"When we have respect for ourselves and others, we gravitate towards connections that encourage that"`,
       person: "Simeon Lindstrom"
    },

    {
       quote: `"Anger is the ultimate destroyer of your own peace of mind."`,
       person: "Dalai Lama"
    },
    {
       quote: `"A man should have the aim and the determination to be honest and upright and sincere in all that he undertakes. If he adds persistency to this he can hardly help being successful."`,
       person: "L. R. Ellert"
    },
    {
       quote: `"Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered."`,
       person: "Michelle Obama"
    },
    {
       quote: `"The fact is that grief today is a family matter as much as it is an individual one."`,
       person: "Barbara Okun"

    },
    {
       quote: `"Children really brighten up a household. They never turn the lights off."`,
       person: "Ralph Bus"
    }

];

quoteContent.innerText = quotes[0].quote
authorName.innerText = quotes[0].person

btn.addEventListener('click', ()=> {

    let random = Math.floor(Math.random() * quotes.length)

    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let color = `rgb(${r}, ${g}, ${b})`

    // console.log(random);

    quoteContent.innerText = quotes[random].quote
    authorName.innerText = quotes[random].person

    authorName.style.color = color

    console.log(color);

})

