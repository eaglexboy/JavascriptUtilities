/**
 * Collection of function to work with the DOM
 * 
 * @requires core.js
 */

/**
 * This function will add the provided classes to the element
 * @param {Element} element Element to add class to
 * @param {string|Array} classToAdd comma seperated list of classes to add to the element
 */
const addClassToElement = (element, classToAdd) => {
    if(isEmpty(element) || isEmpty(classToAdd)){
        return;
    }

    classToAdd = !Array.isArray(classToAdd) ? classToAdd.split(",").map(c => c.trim()) : classToAdd;
    element.classList.add(...classToAdd);
}

/**
 * Disabled the specified element
 * @param {string|Element} element element to disable;
 */
const disableElement = (element) => {
    const el = getElement(element);

    if(!isUndefinedOrNull(el)){
        el.disabled = true;
    }
}

/**
 * Enable the specified Element
 * @param {Element|string} element Element to enable
 */
const enableElement = (element) => {
    const el = getElement(element);

    if(!isUndefinedOrNull(el)){
        el.disabled = false;
    }
};


/**
 * This will return the Element that matches the CSS selector provided
 * @param {String|Element} selector CSS Selector for the desired element
 * @return {Element} First DOM Element that matches the CSS Selector provided
 */
const getElement = (selector) => {
    if (isUndefinedOrNull(selector)) {
        return null;
    }

    if (typeof selector === 'string') {
        return document.querySelector(selector);
    } else if (selector instanceof Element) {
        return selector;
    }

    // Should never reach here but just in case
    throw Error('selector provided is not valid');
}

/**
 * This will return all the Elements that match the CSS selector provided
 * @param {String|Element|NodeList|Array} selector CSS Selector for the desired element
 * @return {NodeList | Element[] | Array} All DOM Element that matches the CSS Selector provided
 */
const getElements = (selector) => {
    if(isUndefinedOrNull(selector)){
        return null;
    }

    if(typeof selector === 'string'){
        return document.querySelectorAll(selector);
    }
    else if(selector instanceof Element){
        return [selector];
    }
    else if(selector instanceof NodeList || Array.isArray(selector)){
        return selector;
    }

    // Should never reach here but just in case
    throw Error('selector provided is not valid');
}

/**
 * This function will hide the element and remove the element's space if indicated (default is
 * true)
 * @param {Element} element Element to hide
 * @param {boolean} [removeElementSpace=true] Remove Element's space
 */
const hideElement = (element, removeElementSpace = true) => {
    let el = getElement(element);
    if(!isUndefinedOrNull(el)){
        if (getComputedStyle(el).display !== 'none') {
            el.dataset.xxxDisplay = getComputedStyle(el).display;
        }
        if(removeElementSpace) {
            el.style.display = 'none';
        }
        else {
            el.style.visibility = 'hidden';
        }
    }
};

/**
 * Function to add callback to selector on change
 * @param {string | Element | NodeList } selector Selector to add onChange event listner
 * @param {(Event)=>void} callback Callback function to call
 */
const onChange = (selector, callback) => {
    if(isUndefinedOrNull(selector)){
        return;
    }

    for(const element of getElements(selector)) {
        element.addEventListener('change', callback);
    }
}

/**
 * Function to add callback to selector on click
 * @param {string | Element | NodeList } selector Selector to add onClick event listner
 * @param {(Event)=>void} callback Callback function to call
 */
const onClick = (selector, callback) => {
    if(isUndefinedOrNull(selector)){
        return;
    }

    const elements = getElements(selector);
    if(Array.isArray(elements)){
        for (const element of elements) {
            element.on('click', callback);
        }
    }
    else{
        elements.on('click', callback);
    }
}

/**
 * This method will fire when entire window is loaded (everything) or immediately if window is already loaded
 * @param {Function} functionToRun function to run when window is loaded
 */
const onDocLoad = (functionToRun) => {
    if (document.readyState === "complete") {
        functionToRun();
    }
    else {
        window.addEventListener("load", functionToRun);
    }
};

/**
 * This method will fire when DOM and scripts are downloaded and parsed
 * @param {Function} functionToRun function to run when DOM is ready
 */
const onDocReady = (functionToRun) => {
    if (document.readyState !== "loading") {
        functionToRun();
    }
    else {
        window.addEventListener("DOMContentLoaded", functionToRun);
    }
}

/**
 * Function to add callback to selector on key down
 * @param {string | Element | NodeList } selector Selector to add onClick event listner
 * @param {(Event)=>void} callback Callback function to call
 */
const onKeyDown = (selector, callback) => {
    if(isUndefinedOrNull(selector)){
        return;
    }

    for(const element of getElements(selector)) {
        element.addEventListener('keydown', callback);
    }
}

/**
 *  This function will remove the specified classes from the element
 * @param {Element} element element to remove class from
 * @param {string|Array} classToRemove comma seperated list or array of classes to remove
 * @returns 
 */
const removeClassFromElement = (element, classToRemove) => {
    if(isEmpty(element) || isEmpty(classToRemove)){
        return;
    }

    classToRemove = !Array.isArray(classToRemove) ? classToRemove.split(",").map(c => c.trim()) : classToRemove;
    element.classList.remove(...classToRemove);
}

/**
 * Show specified Element
 * @param {Element} element Element to show
 */
const showElement = (element) => {
    let el = getElement(element);
    if(!isUndefinedOrNull(el)){
        if(getComputedStyle(el).visibility.equalsIgnoreCase('hidden')){
            el.style.visibility = 'visible';
        }
        else {
            if(getComputedStyle(el).display === 'none'){
                el.style.display = el.dataset.xxxDisplay || 'block';
            }
        }
    }
};
