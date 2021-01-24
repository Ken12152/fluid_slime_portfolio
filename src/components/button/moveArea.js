import gridAreaData from '../../utils/gridAreaData'

export default gridAreaName => {
    const homeAreaName = gridAreaData.title.name

    // is also ok ~ 
    // const [x, y] = gridAreaData[areaExists ? gridArea : homeAreaName]

    const areaExists = gridAreaName in gridAreaData
    const [x, y] = gridAreaData[areaExists ? gridAreaName : homeAreaName].coordinate

    const main = document.getElementById('main')
    main.setAttribute('style', `transform: translate(-${x}vw, -${y}vh)`)

    // ainda testar se functiona
    // main.style.transform = `translate(-${x}vw, -${y}vh)`
}