import gridAreaName from '../../config/gridAreaName'

export default gridArea => {
    const coordinate = {
        [gridAreaName.title]:   [100,  50],
        [gridAreaName.profile]: [  0,  50],
        [gridAreaName.work]:    [200,   0],
        [gridAreaName.contact]: [200, 100],
    }

    // is also ok ~ 
    // const [x, y] = coordinate[(coordinate.hasOwnProperty(gridArea)) ? gridArea : gridAreaName.title]
    const [x, y] = coordinate[(gridArea in coordinate) ? gridArea : gridAreaName.title]

    const main = document.getElementById('main')
    main.setAttribute('style', `transform: translate(-${x}vw, -${y}vh)`)

    // ainda testar se functiona
    // main.style.transform = `translate(-${x}vw, -${y}vh)`
}