declare const Methods: {
    CONNECT: string;
    DELETE: string;
    GET: string;
    HEAD: string;
    OPTIONS: string;
    PATCH: string;
    POST: string;
    PUT: string;
    TRACE: string;
};

declare function defaultHeaders(): Record<string, string>;

declare function formDataToString(formData: FormData): string;

declare function getPayload(response: Response): Promise<string | Record<string, unknown>>;

declare function makeHttpGetCall(
    url: string, options: RequestInit): Promise<Response>;

declare function makeHttpDeleteCall(
    url: string, payload: BodyInit| any, options: RequestInit): Promise<Response>;

declare function makeHttpPostCall(
    url: string, payload: BodyInit| any, options: RequestInit): Promise<Response>;

declare function makeHttpPutCall(
    url: string, payload: BodyInit| any, options: RequestInit): Promise<Response>;

export {
    Methods,
    makeHttpDeleteCall,
    makeHttpGetCall,
    makeHttpPostCall,
    makeHttpPutCall
};