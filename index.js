class UColor {

    static random(){

    }

    static fromHEX(hexString){

    }

    static fromRGBA(rgbaString){

    }

    constructor(r, g, b, a = 1) {
        
    }

    toHEX(){

    }

    toRGBA(){

    }

    toGrayScale(){

    }

    getContrastColor(){

    }

    getPalette(){

    }


}


const ucolor1 = new UColor(12, 34, 27);
const ucolor2 = UColor.fromHEX('#ff3400');
const ucolor3 = UColor.random()
const ucolor4 = UColor.fromRGBA('rgba(255,161,12,0.5)')
const ucolor5 = UColor.fromRGBA('rgb(255,161,12)')
const ucolor6 = UColor.fromRGBA('rgb(255,161,12,0.8)')


console.log(ucolor2.toHEX())//'#ff3400'
console.log(ucolor2.toRGBA())//'rgba(255,52,0,1)'
console.log(ucolor2.getContrastColor())//UColor
console.log(ucolor2.getPalette())//[UColor, UColor, UColor]
console.log(ucolor2.getGrayScale())//UColor