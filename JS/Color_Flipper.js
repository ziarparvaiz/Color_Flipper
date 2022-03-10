const BTN__Change_BG_Color = document.getElementById("Change_BG_Color")
const UI_Color = document.getElementById("color")
const HEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]


function Color_Flipper() {
    BTN__Change_BG_Color.addEventListener('click', () => {
        let HEX_Color = "#"
        for (let i = 0; i < 6; i++) {
            HEX_Color += HEX[GET_Random_Number()]
        }
    
        UI_Color.textContent = HEX_Color
        document.body.style.backgroundColor = HEX_Color
    })
    
    function GET_Random_Number() {
        return Math.floor(Math.random() * HEX.length)
    }
}

export default Color_Flipper