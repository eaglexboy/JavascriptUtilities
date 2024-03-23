// DOM Manipulation Functions
/**
 * Add class(es) to an element
 * @param element The target element
 * @param classToAdd A string of comma-separated classes or an array of classes
 */
declare function addClassToElement(element: Element, classToAdd: string | string[]): void;

/**
 * Disable an element
 * @param element The element to disable
 */
declare function disableElement(element: string | Element): void;

/**
 * Enable an element
 * @param element The element to enable
 */
declare function enableElement(element: string | Element): void;

/**
 * Get the first element matching a CSS selector
 * @param selector The CSS selector string
 * @returns The first matching element or null if not found
 */
declare function getElement(selector: string | Element): Element | null;

/**
 * Get all elements matching a CSS selector
 * @param selector The CSS selector string, element reference, NodeList, or array
 * @returns A NodeList or array of matching elements, or null if not found
 */
declare function getElements(selector: string | Element | NodeList | any[]): NodeList | Element[] | null;

/**
 * Hide an element
 * @param element The element to hide
 * @param removeElementSpace (default: true) Whether to remove the element's space or just hide it
 */
declare function hideElement(element: Element, removeElementSpace?: boolean): void;

/**
 * Add an onChange event listener to a selector
 * @param selector The CSS selector string, element reference, or NodeList
 * @param callback The callback function to execute on change
 */
declare function onChange(selector: string | Element | NodeList, callback: (event: Event) => void): void;

/**
 * Add an onClick event listener to a selector
 * @param selector The CSS selector string, element reference, or NodeList
 * @param callback The callback function to execute on click
 */
declare function onClick(selector: string | Element | NodeList, callback: (event: Event) => void): void;

/**
 * Add an onKeyDown event listener to a selector
 * @param selector The CSS selector string, element reference, or NodeList
 * @param callback The callback function to execute on keydown
 */
declare function onKeyDown(selector: string | Element | NodeList, callback: (event: Event) => void): void;

/**
 * Add a DOMContentLoaded event listener
 * @param functionToRun The function to execute when the DOM is ready
 */
declare function onDocReady(functionToRun: Function): void;

/**
 * Add a window load event listener
 * @param functionToRun The function to execute when the window is fully loaded
 */
declare function onDocLoad(functionToRun: Function): void;

/**
 * Remove class(es) from an element
 * @param element The target element
 * @param classToRemove A string of comma-separated classes or an array of classes
 */
declare function removeClassFromElement(element: Element, classToRemove: string | string[]): void;

/**
 * Show a hidden element
 * @param element The element to show
 */
declare function showElement(element: Element): void;
