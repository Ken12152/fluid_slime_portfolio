import slimeConfig from '../../config/slimeConfig'

export function highlightSlime({ slimeId, containerId }) {
    const animationClassName = slimeConfig.animationClassName

    const svg = document.getElementById(slimeId)
    const container = document.getElementById(containerId)

    svg.classList.add(animationClassName)
    container.classList.add(animationClassName)
}

export function lowlightSlime({ slimeId, containerId }) {
    const animationClassName = slimeConfig.animationClassName

    const svg = document.getElementById(slimeId)
    const container = document.getElementById(containerId)

    svg.classList.remove(animationClassName)
    container.classList.remove(animationClassName)
}