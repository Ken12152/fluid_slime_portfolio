import slimeConfig from '../../utils/slimeConfig'

const animationClassName = slimeConfig.highlightAnimationClassName

function getSlimeElements(slimeId, containerId) {
    const svg = document.getElementById(slimeId)
    const container = document.getElementById(containerId)

    return { svg, container }
}

export function highlightSlime({ slimeId, containerId }) {
    const { svg, container } = getSlimeElements(slimeId, containerId)

    svg.classList.add(animationClassName)
    container.classList.add(animationClassName)
}

export function lowlightSlime({ slimeId, containerId }) {
    const { svg, container } = getSlimeElements(slimeId, containerId)

    svg.classList.remove(animationClassName)
    container.classList.remove(animationClassName)
}