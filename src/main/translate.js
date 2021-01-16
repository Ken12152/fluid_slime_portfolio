export default function(movepoint) {
    let width, height

    switch(movepoint) {
        case 'title':
            [width, height] = [100, 50]
            break
        case 'work':
            [width, height] = [0, 50]
            break
        case 'profile':
            [width, height] = [200, 0]
            break
        case 'contact':
            [width, height] = [200, 100]
            break
        default:
            [width, height] = [100, 50]
    }

    const main = document.querySelector('.main')
    main.setAttribute('style', `transform: translate(-${width}vw, -${height}vh)`)

    // not func
    // main.style.transform = `translate(-${coordinate.width}, -${coordinate.height})`
}