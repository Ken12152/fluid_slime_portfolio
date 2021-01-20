import gridAreaName from '../../config/gridAreaName'

export default gridArea => {
    const coordinate = {
        [gridAreaName.title]:   [100,  50],
        [gridAreaName.profile]: [  0,  50],
        [gridAreaName.work]:    [200,   0],
        [gridAreaName.contact]: [200, 100],
    }

    // is also ok ~ 
    // const [width, height] = coordinate[(coordinate.hasOwnProperty(gridArea)) ? gridArea : 'title']
    const [width, height] = coordinate[(gridArea in coordinate) ? gridArea : 'title']

    const main = document.getElementById('main')
    main.setAttribute('style', `transform: translate(-${width}vw, -${height}vh)`)

    // ainda testar se functiona
    // main.style.transform = `translate(-${coordinate.width}, -${coordinate.height})`
}