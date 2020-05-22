/**
 * Turn hex string into normal string
 * @param str Hex string
 */
export function hexstr2str(str: string) {
    return ab2str(hexstring2ab(str));
}

/*
* Turn ArrayBuffer or array-like oject into normal string
* @param buf
*/
export function ab2str(buf: ArrayBuffer | number[]): string {
   return String.fromCharCode.apply(null, new Uint8Array(buf));
}

/**
 * Turn hex string into array buffer
 * @param str hex string
 */
export function hexstring2ab(str: string): number[] {
    const result = [];

    while (str.length >= 2) {
        result.push(parseInt(str.substring(0, 2), 16));
        str = str.substring(2, str.length);
    }

    return result;
}
