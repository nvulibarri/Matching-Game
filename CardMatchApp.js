document.addEventListener('DOMContentLoaded', () => {

    //card options:
    const cardArray = [
        {
            name: 'circle',
            img: 'C:\\Users\\Nick&Nikki\\matching-game\\MatchCard\\Cards\\Circle.png'
        },
        {
            name: 'diamond',
            img: 'C:\\Users\\Nick&Nikki\\matching-game\\MatchCard\\Cards\\Diamond.png'
        },        
        {
            name: 'flower',
            img: 'C:\\Users\\Nick&Nikki\\matching-game\\MatchCard\\Cards\\Flower.png'
        },        
        {
            name: 'heart',
            img: 'C:\\Users\\Nick&Nikki\\matching-game\\MatchCard\\Cards\\Heart.png'
        },
        {
            name: 'spiral',
            img: 'C:\\Users\\Nick&Nikki\\matching-game\\MatchCard\\Cards\\Spiral.png'
        },
        {
            name: 'square',
            img: 'C:\\Users\\Nick&Nikki\\matching-game\\MatchCard\\Cards\\Square.png'
        },
        {
            name: 'star',
            img: 'C:\\Users\\Nick&Nikki\\matching-game\\MatchCard\\Cards\\Star.png'
        },
        {
            name: 'triangle',
            img: 'C:\\Users\\Nick&Nikki\\matching-game\\MatchCard\\Cards\\Triangle.png'
        },
        {
            name: 'circle',
            img: 'C:\\Users\\Nick&Nikki\\matching-game\\MatchCard\\Cards\\Circle.png'
        },
        {
            name: 'diamond',
            img: 'C:\\Users\\Nick&Nikki\\matching-game\\MatchCard\\Cards\\Diamond.png'
        },        
        {
            name: 'flower',
            img: 'C:\\Users\\Nick&Nikki\\matching-game\\MatchCard\\Cards\\Flower.png'
        },        
        {
            name: 'heart',
            img: 'C:\\Users\\Nick&Nikki\\matching-game\\MatchCard\\Cards\\Heart.png'
        },
        {
            name: 'spiral',
            img: 'C:\\Users\\Nick&Nikki\\matching-game\\MatchCard\\Cards\\Spiral.png'
        },
        {
            name: 'square',
            img: 'C:\\Users\\Nick&Nikki\\matching-game\\MatchCard\\Cards\\Square.png'
        },
        {
            name: 'star',
            img: 'C:\\Users\\Nick&Nikki\\matching-game\\MatchCard\\Cards\\Star.png'
        },
        {
            name: 'triangle',
            img: 'C:\\Users\\Nick&Nikki\\matching-game\\MatchCard\\Cards\\Triangle.png'
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
            card.setAttribute('src', 'C:\\Users\\Nick&Nikki\\matching-game\\MatchCard\\Cards\\PlaceHold.png')
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
            cards[optionOneId].setAttribute('src', 'C:\\Users\\Nick&Nikki\\matching-game\\MatchCard\\Cards\\Blank.png')
            cards[optionTwoId].setAttribute('src', 'C:\\Users\\Nick&Nikki\\matching-game\\MatchCard\\Cards\\Blank.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src','C:\\Users\\Nick&Nikki\\matching-game\\MatchCard\\Cards\\PlaceHold.png')
            cards[optionTwoId].setAttribute('src','C:\\Users\\Nick&Nikki\\matching-game\\MatchCard\\Cards\\PlaceHold.png')
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



