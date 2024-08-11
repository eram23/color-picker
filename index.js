const hexColorPickerEl = document.getElementById('hex-color-picker')
const colorSchemeSelectorEl = document.getElementById('color-scheme-selector')
const getColorBtn = document.getElementById('get-color-btn')
const colorSchemeContainerEl = document.getElementById('color-scheme-container')
const hexNamesListEl = document.getElementById('hex-names-list')

let colorsArr

getColorBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const hexColor = hexColorPickerEl.value.slice(1)
    const colorScheme = colorSchemeSelectorEl.value

    fetch(`https://www.thecolorapi.com/scheme?hex=${hexColor}&mode=${colorScheme}&count=5`)
        .then(res => res.json())
        .then(data => {
            colorsArr = data.colors
            console.log(colorsArr)
            renderColors()
        })
    
    
})

// renders the color scheme to html
function renderColors() {
    let html = ''
    let hexNamesHtml = ''

    for (const color of colorsArr) {
            html += `
                <div class="color-block" style="background-color: ${color.hex.value}"></div>
            `

            hexNamesHtml += `
                <li>${color.hex.value}</li>
            `
    }

    console.log(html)
    colorSchemeContainerEl.innerHTML = html
    hexNamesListEl.innerHTML = hexNamesHtml
}