import gridAreaData from '../../utils/js/gridAreaData'

export default gridAreaName => {
    const homeAreaName = gridAreaData.home.name

    // pode ser tbm ~
    // const areaExists = gridAreaData.hasOwnProperty(gridAreaName)
    const areaExists = gridAreaName in gridAreaData

    const [x, y] = gridAreaData[areaExists ? gridAreaName : homeAreaName].coordinate

    const main = document.getElementById('main')
    main.setAttribute('style', `transform: translate(-${x}vw, -${y}vh)`)

    // testar se functiona
    // main.style.transform = `translate(-${x}vw, -${y}vh)`
}