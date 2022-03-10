const Color_Palette_POPUP = document.getElementById("Color_Palette_POPUP")
const OpenColor_Palette_Popup = document.getElementById("Open_Color_Palette_Generator")
const Close_Color_Palette_POPUP = document.getElementById("Close_Color_Palette_POPUP")


function Palette_Popup() {
    OpenColor_Palette_Popup.addEventListener('click', () => {
        Color_Palette_POPUP.style.visibility = 'visible'
    })
    
    Close_Color_Palette_POPUP.addEventListener('click', () => {
        Color_Palette_POPUP.style.visibility = 'hidden'
    })
    
}

export default Palette_Popup