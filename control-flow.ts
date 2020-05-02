//% color=#29918a icon="\uf27b"
//% groups='[]'
namespace control_flow {
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

    let decounceTimeouts = {
        "_": 0
    }
    /**
     * Debounce
     */
    //% block="after $key settled for $time do"
    //% time.defl=500
    //% key.defl="action"
    //% handlerStatement=1
    //% %time=timePicker ms"
    export function debounce(key: string, time: number, thenDo: () => void) {
        let oldTimeout = decounceTimeouts[key]
        if (oldTimeout) {
            clearTimeout(oldTimeout)
            setTimeout(thenDo, time)
        } else {

        }
        const id = setTimeout(thenDo, time)

    }

    /**
     * Throttle
     */
    //% block="for $key at most once every $time do"
    //% time.defl=500
    //% key.defl="action"
    //% handlerStatement=1
    //% %time=timePicker ms"
    export function throttle(key: string, time: number, thenDo: () => void) {
        setTimeout(thenDo, time)
    }
}
