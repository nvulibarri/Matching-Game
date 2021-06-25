document.addEventListener('DOMContentLoaded', () => {

    //card options:
    const cardArray = [
        {
            name: 'circle',
            img: 'https://i.postimg.cc/cJpqWQLJ/Circle.png'
        },
        {
            name: 'diamond',
            img: 'https://i.postimg.cc/JhDwSTmg/Diamond.png'
        },        
        {
            name: 'flower',
            img: 'https://i.postimg.cc/VvF2XpBS/Flower.png'
        },        
        {
            name: 'heart',
            img: 'https://i.postimg.cc/6qKD2tRJ/Heart.png'
        },
        {
            name: 'spiral',
            img: 'https://i.postimg.cc/mZNxx1fb/Spiral.png'
        },
        {
            name: 'square',
            img: 'https://i.postimg.cc/RVMkvC4w/Square.png'
        },
        {
            name: 'star',
            img: 'https://i.postimg.cc/02cLjgyF/Star.png'
        },
        {
            name: 'triangle',
            img: 'https://i.postimg.cc/P5J086Lx/Triangle.png'
        },
        {
            name: 'circle',
            img: 'https://i.postimg.cc/cJpqWQLJ/Circle.png'
        },
        {
            name: 'diamond',
            img: 'https://i.postimg.cc/JhDwSTmg/Diamond.png'
        },        
        {
            name: 'flower',
            img: 'https://i.postimg.cc/VvF2XpBS/Flower.png'
        },        
        {
            name: 'heart',
            img: 'https://i.postimg.cc/6qKD2tRJ/Heart.png'
        },
        {
            name: 'spiral',
            img: 'https://i.postimg.cc/mZNxx1fb/Spiral.png'
        },
        {
            name: 'square',
            img: 'https://i.postimg.cc/RVMkvC4w/Square.png'
        },
        {
            name: 'star',
            img: 'https://i.postimg.cc/02cLjgyF/Star.png'
        },
        {
            name: 'triangle',
            img: 'https://i.postimg.cc/P5J086Lx/Triangle.png'
        }
    ]

    cardArray.sort( () => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []


    //game board:
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'https://i.postimg.cc/Twgz3pKJ/Place-Hold.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if ( cardsChosen[0] === cardsChosen[1]) {
//            alert('Match!')
            cards[optionOneId].setAttribute('src', 'https://i.postimg.cc/T3HM788g/Blank.png')
            cards[optionTwoId].setAttribute('src', 'https://i.postimg.cc/T3HM788g/Blank.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src','https://i.postimg.cc/Twgz3pKJ/Place-Hold.png')
            cards[optionTwoId].setAttribute('src','https://i.postimg.cc/Twgz3pKJ/Place-Hold.png')
//            alert('Try Again')
        }
        cardsChosen = []
        cardsChosenId= []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You Matched Them All!'
        }



    }

    //flip card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 400)
        }
    }



    createBoard()

})



