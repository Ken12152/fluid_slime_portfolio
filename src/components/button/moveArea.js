export default gridArea => {
    const coordinate = {
        title:   [100,  50],
        profile: [  0,  50],
        work:    [200,   0],
        contact: [200, 100],
    }

    // is also ok ~ 
    // const [width, height] = coordinate[(coordinate.hasOwnProperty(gridArea)) ? gridArea : 'title']
    const [width, height] = coordinate[(gridArea in coordinate) ? gridArea : 'title']

    const main = document.getElementById('main')
    main.setAttribute('style', `transform: translate(-${width}vw, -${height}vh)`)

    // ainda testar se functiona
    // main.style.transform = `translate(-${coordinate.width}, -${coordinate.height})`
}