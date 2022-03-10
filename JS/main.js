import Palette_Popup from './Palette_POPUP.js'
import Color_Flipper from './Color_Flipper.js'
import Palette_Color_Generate from './Palette_Color_Generate.js'


const Generate_Platte = document.getElementById("Generate_Platte")
Generate_Platte.addEventListener('click', () => {
    Palette_Color_Generate()
})


Palette_Color_Generate()
Color_Flipper()
Palette_Popup()