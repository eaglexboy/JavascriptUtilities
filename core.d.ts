/**
 * This function will check if the provided obj is empty. If white space flag set it will consider
 * the object empty if it only has white spaces
 * @param {any} obj Object to check
 * @param {boolean} [whiteSpaceIsEmpty=false] Treat white spaces as empty
 * @returns {boolean} Result of checking if object is empty
 */
declare function isEmpty(obj: any, whiteSpaceIsEmpty: boolean): boolean;

/**
 * This function will check to see if the provided object is a Function
 * @param {any} obj Object to check if it's a function
 * @returns {boolean} Returns outcome of test
 */
declare function isBoolean(potentialBoolean: any): boolean;

/**
 * This function will check if the provided number|string is a number
 * @param {number|string} potentialNumber 
 * @returns {boolean} Result of check
 */
declare function isFunction(obj: number|string): boolean;

/**
 * This function will check if the provided obj is undefined or null
 * @param {any} obj Object to check
 * @returns {boolean} Result of check
 */
declare function isNullOrUndefined(obj: any): boolean;

/**
 * This function will check if the provided value is Undefined or Null or Empty (if the
 * replaceOnEmpty flag is set) and if so return the default value
 * @param {any} self Value to check
 * @param {any} defaultValue Default Value to use if self is missing
 * @param {boolean} [replaceOnEmpty=false] Flag to indicate if replace on empty should be done
 * @return {any}
 */
declare function selfOrDefault(self: any, defaultValue: any, replaceOnEmpty: boolean): any;

/**
 * This method will check if object is Array, if not convert it to array. If value is undefined or
 * null then empty list is returned.
 * @param potentialArray Object to check if Array
 * @returns {any[]} Returns an Array
 */
declare function toArray(potentialArray: any): any[];

/**
 * Will convert value to boolean
 * @param {any} booleanString
 * @returns {boolean}
 */
declare function toBoolean(booleanString: any): boolean;

/**
 * Function to format a number to currency format
 * @param {number|string} moneyValue Value to format as currency
 * @param {boolean} [withSymbol=true] Should the formatted value include the currency symbol
 * @returns {string} Formatted number as currency
 */
declare function toCurrency(moneyValue: number|string, withSymbol: boolean): string;

/**
 * Function to convert the provided string/number to a float
 * @param {number|string} potentialNumber Potential string/number to convert to float
 * @param {number} [defaultValue=0.0] Default value to use if potential number cannot be used
 * @returns 
 */
declare function toFloat(potentialNumber: number|string, defaultValue: number): number;

/**
 * Function to convert the provided string/number to a integer
 * @param {number|string} potentialNumber Potential string/number to convert to integer
 * @param {number} [defaultValue=0.0] Default value to use if potential number cannot be used
 * @returns 
 */
declare function toInteger(potentialNumber: number|string, defaultValue: number): number;