/**
 * Collection of functions to enhance the Element, NodeList and String objects
 * 
 * @requires core.js
 * @requires core-dom.js
 */

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
 * This adds function to call wrapper function disableElement
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


// Prototypes for String
/**
 * This adds function will perform a case insensitive compare of string values
 */
String.prototype.equalsIgnoreCase = function (compareString){
    return this.toLowerCase() === compareString.toLowerCase();
}
