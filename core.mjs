import prototypes from './prototypes.mjs';

/**
 * This function will check if the provided obj is empty. If white space flag set it will consider
 * the object empty if it only has white spaces
 * @param {*} obj Object to check
 * @param {boolean} [whiteSpaceIsEmpty=false] Treat white spaces as empty
 * @returns {boolean} Result of checking if object is empty
 */
const isEmpty = (obj, whiteSpaceIsEmpty = false) => {
    if(isUndefinedOrNull(obj)){
        return true;
    }
    // Empty Array
    if(Array.isArray(obj)){
        return obj.length === 0;
    }

    // Regular Object with no properties
    return (obj.constructor === Object && Object.entries(obj).length === 0)
           // Object with property of length and set to 0
        || (typeof obj === 'object' && obj['length'] && obj.length === 0)
           // Empty string
        || (!whiteSpaceIsEmpty && obj === '')
        || (whiteSpaceIsEmpty && obj.trim() === '');
};

/**
 * This function will test if the provided value is boolean
 * @param {*} potentialBoolean object to test if boolean
 * @returns {boolean} Returns outcome of test
 */
const isBoolean = (potentialBoolean) => {
    if(typeof potentialBoolean === 'boolean'){
        return true;
    }

    if(typeof potentialBoolean === 'string'){
        return potentialBoolean.equalsIgnoreCase('true')
            || potentialBoolean.equalsIgnoreCase('false');
    }

    return false;
}

/**
 * This function will check to see if the provided object is a Function
 * @param {*} obj Object to check if it's a function
 * @returns {boolean} Returns outcome of test
 */
const isFunction = (obj) => {
    return !isUndefinedOrNull(obj) && typeof obj === 'function';
}

/**
 * This function will check if the provided number|string is a number
 * @param {number|string} potentialNumber 
 * @returns {boolean} Result of check
 */
const isNumber = (potentialNumber) => {
    return !isEmpty(potentialNumber)
        && !Number.isNaN(potentialNumber)
        && (typeof potentialNumber === 'number' || !isNaN(potentialNumber));
}

/**
 * This function will check if the provided obj is undefined or null
 * @param {*} obj Object to check
 * @returns {boolean} Result of check
 */
const isUndefinedOrNull = (obj) => {
    return obj === undefined || obj === null;
}

/**
 * This function will check if the provided value is Undefined or Null or Empty (if the
 * replaceOnEmpty flag is set) and if so return the default value
 * @param {*} self Value to check
 * @param {*} defaultValue Default Value to use if self is missing
 * @param {boolean} [replaceOnEmpty=false] Flag to indicate if replace on empty should be done
 * @return {*}
 */
const selfOrDefault = (self, defaultValue, replaceOnEmpty = false) => {
    if(replaceOnEmpty && isEmpty(self)){
        return defaultValue;
    }

    if(isUndefinedOrNull(self)){
        return defaultValue;
    }

    return self;
};

/**
 * This method will check if object is Array, if not convert it to array. If value is undefined or
 * null then empty list is returned.
 * @param potentialArray Object to check if Array
 * @returns {*[]} Returns an Array
 */
const toArray = (potentialArray) => {
    if(Array.isArray(potentialArray)){
        return potentialArray;
    }

    return isUndefinedOrNull(potentialArray) ? [] : [potentialArray];
}

/**
 * Will convert value to boolean
 * @param booleanString
 * @returns {boolean}
 */
const toBoolean = (booleanString) => {
    if(isUndefinedOrNull(booleanString)){
        return false;
    }

    if(isBoolean(booleanString) && typeof booleanString !== 'string') {
        return booleanString;
    }

    return booleanString.equalsIgnoreCase('true');
}

const currencyFormatter = Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD'
});
/**
 * Function to format a number to currency format
 * @param {number|string} moneyValue Value to format as currency
 * @param {boolean} [withSymbol=true] Should the formatted value include the currency symbol
 * @returns {string} Formatted number as currency
 */
const toCurrency = (moneyValue, withSymbol = true) => {
    if(typeof moneyValue === 'string'){
        moneyValue = toFloat(moneyValue);
    }

    const value = currencyFormatter.format(moneyValue);
    return withSymbol ? value : value.replaceAll('$', '').trim();
}

/**
 * Function to convert the provided string/number to a float
 * @param {number|string} potentialNumber Potential string/number to convert to float
 * @param {number} [defaultValue=0.0] Default value to use if potential number cannot be used
 * @returns 
 */
const toFloat = (potentialNumber, defaultValue) => {
    if(!isNumber(potentialNumber)){
        return selfOrDefault(defaultValue, 0.0);
    }

    return (typeof potentialNumber === 'number') ? potentialNumber : parseFloat(potentialNumber);
}

/**
 * Function to convert the provided string/number to a integer
 * @param {number|string} potentialNumber Potential string/number to convert to integer
 * @param {number} [defaultValue=0] Default value to use if potential number cannot be used
 * @returns 
 */
const toInteger = (potentialNumber, defaultValue) => {
    if(!isNumber(potentialNumber)){
        return selfOrDefault(defaultValue, 0);
    }

    return parseInt(potentialNumber, 10);
};

export {
    isEmpty,
    isBoolean,
    isFunction,
    isNumber,
    isUndefinedOrNull,
    selfOrDefault,
    toArray,
    toBoolean,
    toCurrency,
    toFloat,
    toInteger,
    currencyFormatter
};
