class UColor {

    static random() {

    }

    //UColor
    static fromHEX(hexString) {

    }
    //UColor
    static fromRGBA(rgbaString) {

    }

    /**
     * The constructor function initializes an object with red, green, blue, and alpha values.
     * @param {number} r - The parameter `r` typically represents the red component of a color in RGB (Red, Green,
     * Blue) color model. It specifies the intensity of the red color in the range of 0 to 255.
     * @param {number} g - The parameter `g` in the constructor function represents the green component of a color
     * in RGB (Red, Green, Blue) format. It is used to define the intensity of the green color in the color
     * representation.
     * @param {number} b - The `b` parameter in the constructor function represents the blue component of a color.
     * It is used to define the intensity of the blue color in the RGBA (Red, Green, Blue, Alpha) color
     * model.
     * @param {number} [a=1] - The `a` parameter in the constructor function represents the alpha value, which is
     * used to specify the opacity of a color. It ranges from 0 (completely transparent) to 1 (completely
     * opaque). If no alpha value is provided when creating an instance of this class, it defaults to
     */
    constructor(r, g, b, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }



    /**
     * The `toHEX` function converts RGB values to a hexadecimal color representation, including an alpha
     * channel if present.
     * @returns {string} The `toHEX()` method is returning a hexadecimal string representation of the color values stored
     * in the object. If the alpha value is less than 1, it also includes the alpha value in the
     * hexadecimal representation.
     */
    toHEX() {
        const r = this.r.toString(16).padStart(2, '0');
        const g = this.g.toString(16).padStart(2, '0');
        const b = this.b.toString(16).padStart(2, '0');

        let hex = '#' + r + g + b;

        if (this.a < 1) {
            const aNmb = Math.round(255 * this.a);
            const a = aNmb.toString(16).padStart(2, '0');
            hex += a;
        }

        return hex;
    }

    /**
     * The `toRGBA` function returns a string representing the RGBA values of an object's properties.
     * @returns {string} The `toRGBA()` method is returning a string in the format `rgba(r,g,b,a)` where `r`, `g`,
     * `b`, and `a` are the values of the red, green, blue, and alpha components of the color respectively.
     */
    toRGBA() {
        return `rgba(${this.r},${this.g},${this.b},${this.a})`
    }

    //UColor
    getGrayColor() {

    }

    //UColor
    getContrastColor() {

    }

    //[UColor, UColor, UColor]
    getPalette() {

    }


}


const ucolor1 = new UColor(12, 34, 27);
const ucolor2 = UColor.fromHEX('#ff3400');
const ucolor3 = UColor.random()
const ucolor4 = UColor.fromRGBA('rgba(255,161,12,0.5)')
const ucolor5 = UColor.fromRGBA('rgb(255,161,12)')
const ucolor6 = UColor.fromRGBA('rgb(255,161,12,0.8)')


console.log(ucolor1.toHEX())
console.log(ucolor1.toRGBA())
console.log(ucolor1.getContrastColor())
console.log(ucolor1.getPalette())
console.log(ucolor1.getGrayColor())