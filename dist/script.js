let inputHex = document.getElementById('inp-hex')
let button = document.getElementById('generate')
let hex = 0
let outDisplay = document.getElementById('inp-color-display')
let outDisplay1 = document.getElementById('out-color-display-1')
let outDisplay2 = document.getElementById('out-color-display-2')
let outDisplay3 = document.getElementById('out-color-display-3')
let outDisplay4 = document.getElementById('out-color-display-4')

button.onclick = () => {
    console.log("enter")
    let inputColor = inputHex.value;
    const validHex = (inputColor) => {
        if(!inputColor) {
            console.log("false")
            return false
        }

        
        if(inputColor.length === 3 || inputColor.length === 6){
            return true
        }
        else{
            return false
        }
    }

    if(validHex(inputColor)){
        const HextoRGB = (inputColor) => {
        hex = inputColor
            if(inputColor.length === 3){
                hex = inputColor[0] + inputColor[0] + inputColor[1] + inputColor[1] + inputColor[2] + inputColor[2];
            }

            const r = parseInt(hex.substring(0,2), 16);
            const g = parseInt(hex.substring(2,4), 16);
            const b = parseInt(hex.substring(4,6), 16);

            return [r,g,b]
        }

        const RGBToHSL = (r, g, b) => {
            r /= 255;
            g /= 255;
            b /= 255;
            const l = Math.max(r, g, b);
            const s = l - Math.min(r, g, b);
            const h = s
              ? l === r
                ? (g - b) / s
                : l === g
                ? 2 + (b - r) / s
                : 4 + (r - g) / s
              : 0;
            return [
              (60 * h < 0 ? 60 * h + 360 : 60 * h).toFixed(2),
              (100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0)).toFixed(2),
              ((100 * (2 * l - s)) / 2).toFixed(2),
            ];
          };

          function HSLToHex(h, s, l) {
            l /= 100;
            const a = s * Math.min(l, 1 - l) / 100;
            const f = n => {
              const k = (n + h / 30) % 12;
              const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
              return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
            };
            return `#${f(0)}${f(8)}${f(4)}`;
          }

        const RGB = HextoRGB(inputColor)
        const HSL = RGBToHSL(RGB[0],RGB[1],RGB[2])
        const Hex = HSLToHex(HSL[0],HSL[1],HSL[2])
        
        outDisplay.style.backgroundColor =  `#${inputColor}`
        outDisplay.firstChild.innerText = `#${hex}`
        
        console.log("hex-rgb " + HextoRGB(inputColor))
        console.log("rgb-hsl " + RGBToHSL(RGB[0],RGB[1],RGB[2]))
        console.log("hsl-hex " + HSLToHex(HSL[0],HSL[1],HSL[2]))

        const lum = ((90 - HSL[2])/4).toFixed(2)

        outDisplay1.style.backgroundColor = `hsl(${HSL[0]}, ${HSL[1]}%, ${parseFloat(HSL[2]) +(1 * parseFloat(lum))}%)`
        outDisplay1.firstChild.innerText = HSLToHex(HSL[0],HSL[1],(parseFloat(HSL[2]) +(1 * parseFloat(lum))))

        outDisplay2.style.backgroundColor = `hsl(${HSL[0]}, ${HSL[1]}%, ${parseFloat(HSL[2]) +(2 * parseFloat(lum))}%)`
        outDisplay2.firstChild.innerText = HSLToHex(HSL[0],HSL[1],(parseFloat(HSL[2]) +(2 * parseFloat(lum))))

        outDisplay3.style.backgroundColor = `hsl(${HSL[0]}, ${HSL[1]}%, ${parseFloat(HSL[2]) +(3 * parseFloat(lum))}%)`
        outDisplay3.firstChild.innerText = HSLToHex(HSL[0],HSL[1],(parseFloat(HSL[2]) +(3 * parseFloat(lum))))

        outDisplay4.style.backgroundColor = `hsl(${HSL[0]}, ${HSL[1]}%, ${parseFloat(HSL[2]) +(4 * parseFloat(lum))}%)`
        outDisplay4.firstChild.innerText = HSLToHex(HSL[0],HSL[1],(parseFloat(HSL[2]) +(4 * parseFloat(lum))))
        
        //outDisplay1.style.backgroundColor = `hsl(" + ${HSL[0]} + "%, " + ${HSL[1]} + "%, " + ${HSL[2]} + "%)`
    }
}