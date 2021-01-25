import slimeConfig from '../../utils/js/slimeConfig'

const classOnAnimation = slimeConfig.classOnHighlight

function getSlimeElements(slimeId, containerId) {
    const svg = document.getElementById(slimeId)
    const container = document.getElementById(containerId)

    return { svg, container }
}

export function highlightSlime({ slimeId, containerId }) {
    const { svg, container } = getSlimeElements(slimeId, containerId)

    svg.classList.add(classOnAnimation)
    container.classList.add(classOnAnimation)
}

export function lowlightSlime({ slimeId, containerId }) {
    const { svg, container } = getSlimeElements(slimeId, containerId)

    svg.classList.remove(classOnAnimation)
    container.classList.remove(classOnAnimation)
}