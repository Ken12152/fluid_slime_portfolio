export function highlightSlime(slimeName) {
    const className = "slime-highlight"

    const svg = document.getElementById(slimeName)
    const container = document.getElementById(`${slimeName}-container`)

    svg.classList.add(className)
    container.classList.add(className)
}

export function lowlightSlime(slimeName) {
    const className = 'slime-highlight'

    const svg = document.getElementById(slimeName)
    const container = document.getElementById(`${slimeName}-container`)

    svg.classList.remove(className)
    container.classList.remove(className)
}