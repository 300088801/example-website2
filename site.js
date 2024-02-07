const products =[{
        "title": "Nike",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
        "color": "#deaf01"
    }, {
        "title": "Independent",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/5657417/pexels-photo-5657417.jpeg",
        "color": "#554a33"
    }, {
        "title": "Michael Kors",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg",
        "color": "#01322f"
    },{
        "title": "Venus Make-up",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/2633986/pexels-photo-2633986.jpeg",
        "color": "#01322f"
    },{
        "title": "Sibaristica Coffee",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/4829069/pexels-photo-4829069.jpeg",
        "color": "#01322f"
    },{
        "title": "Sennheiser Headphones",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg",
        "color": "#01322f"
    }]

//console.log({cardInfo4})   creating an object on the fly 

//traditional function
//function bla(text){
 //   console.log(text|| "This is the default text")
 //   return 5}

//console.log(bla("hi"))

/*function createCard(card, cardInfo){

    card.style.backgroundImage = `url(${cardInfo.image}?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`
    card.style.color = cardInfo.color

    const h1=card.querySelector('h1')
    h1.textContent= cardInfo.title

    const p= card.querySelector('p')
    p.textContent=cardInfo.text
}*/
const container = document.querySelector('#container')
const previousButton =document.querySelector('button.previous')
const nextButton = document.querySelector('button.next')

container.removeChild(nextButton.parentNode)

//create additional card in html

const newCard = document.createElement('div')
newCard.id = "card-4"
newCard.classList.add('card')
//newCard.textContent = "HEYYYYYYYYYYYYYYY"
container.append(newCard)

const infoDiv = document.createElement('div')
newCard.append(infoDiv)
const header = document.createElement('h1')
infoDiv.append(header)

const paragraph = document.createElement('p')
infoDiv.append(paragraph)


container.append(nextButton.parentNode)
//aarow function
const displayProduct= (card, {image, title,text,color})=>{


    card.style.backgroundImage = `url(${image}?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`
    card.style.color = color

    const h1=card.querySelector('h1')
    h1.textContent= title

    const p= card.querySelector('p')
    p.textContent=text
}

const cards = document.querySelectorAll('.card')

let offset = 0
const updateCards = shift => {
    offset += shift || 0
    
    cards.forEach((card, index) => {
        const productIndex = (index + offset) % products.length
        displayProduct(card, products[productIndex])
    })

}
updateCards(0)


previousButton.addEventListener('click',() =>updateCards(-1) )
nextButton.addEventListener('click', ()=> updateCards(1))


/*
const greeting = name=> `hello ${name}!`

console.log(greeting("Erich"))

//Arrays
const names =["ryan","erich", "dylan","john"]
//names.push("Tevin") don't change a const
const names2 = [...names, "Tevin"]
const names3 = [...names2.slice(1,4)] //slice

const uppercase = text => `${text.at(0).toUpperCase()}${text.slice(1).toLowerCase()}`
//console.log(uppercase("ashton"))

names2.forEach(name=> console.log(uppercase(name)))
const input = "Valentines Day"
if(['Christmas', 'Halloween', 'St. Patricks Day','Valentines Day'].includes(input)){
    console.log("Found")
}

console.log(names[names.length -1])

const [fav1, leastFav, fav2]= names
console.log({fav1, leastFav, fav2})

const sentence = "This is a bunch of words."
const words = sentence.split(' ')

console.log(words)

const printNames = (name1, name2) => {
    console.log(name1)
    console.log(name2)
}
//printNames(names[0],names[1])
//spread operator
//printNames(...names) //prints off the names array in order but only for how many arguments are taken in to the function 
*/
