//% color=#700204 icon="\uf254"
//% groups='[]'
namespace timer {
    //% block="after $time do"
    //% time.defl=500
    //% handlerStatement=1
    //% %time=timePicker ms"
    export function after(time: number, thenDo: () => void) {
        setTimeout(thenDo, time)
    }

    /**
     * Background
     */
    //% block="separately do"
    //% handlerStatement=1
    export function background(then: () => void) {
        control.runInBackground(then)
    }

    let decounceTimeouts: {[key: string]: number} = {}
    /**
     * Debounce
     */
    //% block="after $key settled for $time do"
    //% time.defl=500
    //% key.defl="action"
    //% handlerStatement=1
    //% %time=timePicker ms"
    export function debounce(key: string, time: number, thenDo: () => void) {
        if (decounceTimeouts[key]) {
            clearTimeout(decounceTimeouts[key])
        }
        decounceTimeouts[key] = setTimeout(thenDo, time)
    }

    let throttleTimeouts: { [key: string]: number } = {}
    /**
     * Throttle
     */
    //% block="for $key at most once every $time do"
    //% time.defl=500
    //% key.defl="action"
    //% handlerStatement=1
    //% %time=timePicker ms"
    export function throttle(key: string, time: number, thenDo: () => void) {
        if (!throttleTimeouts[key]) {
            throttleTimeouts[key] = setTimeout(() => {
                throttleTimeouts[key] = null;
                thenDo();
            }, time)
        }
    }
}
