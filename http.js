const Methods = {
    CONNECT: 'CONNECT',
    DELETE: 'DELETE',
    GET: 'GET',
    HEAD: 'HEAD',
    OPTIONS: 'OPTIONS',
    PATCH: 'PATCH',
    POST: 'POST',
    PUT: 'PUT',
    TRACE: 'TRACE'
};

/**
 * This function will return the default headers to use with a fetch call
 * @returns {Object} Object with default headers
 */
function defaultHeaders(){
    return {};
}

/**
 * This function will convert a FormData to a string
 * @param {FormData} formData FormData object to convert
    * @returns {string}
 */
function formDataToString(formData){
    const formDataArray = [];
    for(const entry of formData){
        formDataArray.push(`${entry[0]}=${entry[1]}`);
    }

    return formDataArray.join('&');
}

/**
 * This function will get the payload from a response
 * @param {Respone} response Response object to get payload from
 * @returns {Object | string} Payload from response
 */
async function getPayload(response){
    let payload;
    if(response.headers.get('Content-Type').includes('json')){
        payload = await response.json();
    }
    else {
        payload = await response.text();
    }

    return payload;
}


/**
 * Function makes a HTTP call
 * @param {string} url URL to make call against
 * @param {RequestInit} options Options to use with call
 * @returns {Promise<Response>}
 */
async function makeHttpCall(url, options) {
    return fetch(
        url,
        {
            ...options,
            headers: {
                ...defaultHeaders(),
                ...options?.headers
            }
        }
    );
}


/**
 * Function makes a HTTP GET call
 * @param {string} url URL to make call against
 * @param {RequestInit} [options={}] Options to use with call
 * @returns {Promise<Response>}
 */
async function makeHttpGetCall(url, options = {}) {
    return makeHttpCall(
        url,
        {
            ...options,
            method: Methods.GET,
            headers: {
                ...options?.headers
            }
        }
    );
}

/**
 * Function makes a HTTP DELETE call
 * @param {string} url URL to make call against
 * @param {BodyInit | any} payload Payload to send with request
 * @param {RequestInit} [options={}] Options to use with call
 * @returns {Promise<Response>}
 */
async function makeHttpDeleteCall(url, payload, options={}) {
    let payloadToSend;

    if(payload instanceof FormData){
        payloadToSend = formDataToString(payload);
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/x-www-form-urlencoded'
        };
    }
    else if(typeof payload === 'object'){
        payloadToSend = JSON.stringify(payload);
    }
    else {
        payloadToSend = payload;
    }
    
    return makeHttpCall(
        url,
        {
            ...options,
            method: Methods.DELETE,
            headers: {
                ...options?.headers
            }
        }
    );
}

/**
 * Function makes a HTTP POST call
 * @param {string} url URL to make call against
 * @param {BodyInit | any} payload Payload to send with request
 * @param {RequestInit} [options={}] Options to use with call
 * @returns {Promise<Response>}
 */
async function makeHttpPostCall(url, payload, options = {}) {
    let payloadToSend;

    if(payload instanceof FormData){
        payloadToSend = formDataToString(payload);
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/x-www-form-urlencoded'
        };
    }
    else if(typeof payload === 'object'){
        payloadToSend = JSON.stringify(payload);
    }
    else {
        payloadToSend = payload;
    }



    return makeHttpCall(
        url, 
        {
            ...options,
            body: payloadToSend,
            method: Methods.POST,
            headers: {
                ...options?.headers
            }
        }
    );
}

