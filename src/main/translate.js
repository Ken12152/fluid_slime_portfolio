export default function(movecoordinateoint) {
    let coordinate = { width: 0, height: 0 }

    switch(movecoordinateoint) {
        case 'one':
            coordinate.width, coordinate.height = 0, 0
            break
        case 'title':
            coordinate.width, coordinate.height = 100, 50
            break
        default:
            coordinate.width, coordinate.height = 100, 50
    }

    const main = document.querySelector('.main')
    main.setAttribute('style', `transform: translate(-${coordinate.width}, -${coordinate.height})`)

    // not func
    // main.style.transform = `translate(-${coordinate.width}, -${coordinate.height})`
}