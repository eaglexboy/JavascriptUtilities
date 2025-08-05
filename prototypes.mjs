import { 
    addClassToElement, 
    removeClassFromElement, 
    hideElement, 
    showElement, 
    enableElement, 
    disableElement 
} from './core-dom.mjs';

// Prototypes for Array
Array.prototype.includesIgnoreCase = function (objectToFind){
    for(const item of this){
        if(
            (typeof item === 'string' && item.equalsIgnoreCase(objectToFind))
            || item === objectToFind
        ){
            return true
        }
    }

    return false;
}

//prototypes for Element

/**
 * This adds function to call wrapper function addClassToElement
 */
if(typeof Element.prototype.addClass !== 'function'){
    Element.prototype.addClass = function(classToAdd){
        addClassToElement(this, classToAdd);
    }
}

/**
 * This adds function to call wrapper function removeClassFromElement
 */
if(typeof Element.prototype.removeClass !== 'function'){
    Element.prototype.removeClass = function(classToAdd){
        removeClassFromElement(this, classToAdd);
    }
}

/**
 * This adds function to dispatch the specified event for the Element
*/
Element.prototype.trigger = function(event){
    this.dispatchEvent(new Event(event));
}

/**
 * This adds function to call wrapper function addEventListener
 */
Element.prototype.on = function(event, callback){
    this.addEventListener(event, callback);
}

/**
 * This adds function to call wrapper function enableElement
 */
if(typeof Element.prototype.enable !== 'function'){
    Element.prototype.enable = function(){
        enableElement(this);
    }
}

/**
 * This adds function to call wrapper function disableElement
 */
if(typeof Element.prototype.disable !== 'function'){
    Element.prototype.disable = function(){
        disableElement(this);
    }
}

/**
 * This function returns the value of the disabled property
 */
if(typeof Element.prototype.isDisabled !== 'function'){
    Element.prototype.isDisabled = function(){
        return this.disabled;
    }
}

/**
 * This adds function to determine if the element is visible
 */
if(typeof Element.prototype.isVisible !== 'function'){
    Element.prototype.isVisible = function(){
        return !!(
            elem.offsetWidth
            || elem.offsetHeight
            || elem.getClientRects().length
        );
    }
}

/**
 * This adds function to call wrapper function hideElement
 */
if(typeof Element.prototype.hide !== 'function'){
    Element.prototype.hide = function(){
        hideElement(this);
    }
}

/**
 * This adds function to call wrapper function showElement
 */
if(typeof Element.prototype.show !== 'function'){
    Element.prototype.show = function(){
        showElement(this);
    }
}

//prototypes for NodeList

/**
 * This adds function to call the addClass function for the elements in the NodeList
 */
if(typeof NodeList.prototype.addClass !== 'function'){
    NodeList.prototype.addClass = function(classToAdd){
        for(const e of this){
            e.addClass(classToAdd);
        }
    }
}

/**
 * This adds function to call the removeClass function for the elements in the NodeList
 */
if(typeof NodeList.prototype.removeClass !== 'function'){
    NodeList.prototype.removeClass = function(classToRemove){
        for(const e of this){
            e.removeClass(classToRemove)
        }
    }
}

/**
 * This adds function to call the trigger function for the elements in the NodeList
 */
NodeList.prototype.trigger = function(event){
    for(const e of this){
        e.trigger(event);
    }
}

/**
 * This adds function to call the on function for the elements in the NodeList
 */
NodeList.prototype.on = function(event, callback){
    for(const e of this){
        e.on(event, callback);
    }
}

/**
 * This adds function to call the enable function for the elements in the NodeList
 */
if(typeof NodeList.prototype.enable !== 'function'){
    NodeList.prototype.enable = function(){
        for(const e of this){
            e.enable();
        }
    }
}

/**
 * This adds function to call wrapper function disableElement
 */
if(typeof NodeList.prototype.disable !== 'function'){
    NodeList.prototype.disable = function(){
        for(const e of this){
            e.disable();
        }
    }
}

/**
 * This adds function to call wrapper function hideElement
 */
if(typeof NodeList.prototype.hide !== 'function'){
    NodeList.prototype.hide = function(){
        for(const e of this){
            e.hide();
        }
    }
}

/**
 * This adds function to call wrapper function showElement
 */
if(typeof NodeList.prototype.show !== 'function'){
    NodeList.prototype.show = function(){
        for(const e of this){
            e.show();
        }
    }
}


// Prototypes for String
/**
 * This adds function will perform a case insensitive compare of string values
 */
String.prototype.equalsIgnoreCase = function (compareString){
    return this.toLowerCase() === compareString.toLowerCase();
}

export default {};
