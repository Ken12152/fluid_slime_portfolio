export default function(gridAreaName) {

    const coordinate = {
        title:   [100,  50],
        profile: [  0,  50],
        work:    [200,   0],
        contact: [200, 100],
    }

    const [width, height] = coordinate.hasOwnProperty(gridAreaName) ?
        coordinate[gridAreaName] : coordinate['title']

    // is also ok ~ 
    // const [width, height] = gridAreaName in coordinate ?
    //     coordinate[gridAreaName] : coordinate['title']

    const main = document.querySelector('.main')
    main.setAttribute('style', `transform: translate(-${width}vw, -${height}vh)`)

    // not func
    // main.style.transform = `translate(-${coordinate.width}, -${coordinate.height})`
}