/**
 * This function will check if the provided obj is empty. If white space flag set it will consider
 * the object empty if it only has white spaces
 * @param {unknown} obj Object to check
 * @param {boolean} [whiteSpaceIsEmpty=false] Treat white spaces as empty
 * @returns {boolean} Result of checking if object is empty
 */
declare function isEmpty(obj: unknown, whiteSpaceIsEmpty: boolean): boolean;

/**
 * This function will check to see if the provided object is a Function
 * @param {unknown} obj Object to check if it's a function
 * @returns {boolean} Returns outcome of test
 */
declare function isBoolean(potentialBoolean: unknown): boolean;

/**
 * This function will check if the provided number|string is a number
 * @param {unknown} potentialNumber 
 * @returns {boolean} Result of check
 */
declare function isFunction(obj: unknown): boolean;

/**
 * This function will check if the provided obj is undefined or null
 * @param {unknown} obj Object to check
 * @returns {boolean} Result of check
 */
declare function isNullOrUndefined(obj: unknown): boolean;

/**
 * This function will check if the provided value is Undefined or Null or Empty (if the
 * replaceOnEmpty flag is set) and if so return the default value
 * @param {T} self Value to check
 * @param {T} defaultValue Default Value to use if self is missing
 * @param {boolean} [replaceOnEmpty=false] Flag to indicate if replace on empty should be done
 * @return {T}
 */
declare function selfOrDefault<T>(self: T, defaultValue: T, replaceOnEmpty: boolean): T;

/**
 * This method will check if object is Array, if not convert it to array. If value is undefined or
 * null then empty list is returned.
 * @param {unknown} potentialArray Object to check if Array
 * @returns {unknown[]} Returns an Array
 */
declare function toArray(potentialArray: unknown): unknown[];

/**
 * Will convert value to boolean
 * @param {unknown} booleanString
 * @returns {boolean}
 */
declare function toBoolean(booleanString: unknown): boolean;

/**
 * Function to format a number to currency format
 * @param {number|string} moneyValue Value to format as currency
 * @param {boolean} [withSymbol=true] Should the formatted value include the currency symbol
 * @returns {string} Formatted number as currency
 */
declare function toCurrency(moneyValue: number|string, withSymbol: boolean): string;

/**
 * Function to convert the provided string/number to a float
 * @param {unknown} potentialNumber Potential unknown to convert to float
 * @param {number} [defaultValue=0.0] Default value to use if potential number cannot be used
 * @returns {nunmber}
 */
declare function toFloat(potentialNumber: unknown, defaultValue: number): number;

/**
 * Function to convert the provided string/number to a integer
 * @param {unknown} potentialNumber Potential string/number to convert to integer
 * @param {number} [defaultValue=0.0] Default value to use if potential number cannot be used
 * @returns {number}
 */
declare function toInteger(potentialNumber: number|string, defaultValue: number): number;
