import { IncomingMessage } from 'http';
import { parse } from 'url';
import { ParsedRequest } from './types';

export function parseRequest(req: IncomingMessage) {
    console.log('HTTP ' + req.url);
    const { query } = parse(req.url || '/', true);
    const { zesnuly, datum, image } = (query || {});


    const parsedRequest: ParsedRequest = {
        zesnuly: zesnuly!,
        datum: datum!,
        image: image!,
    };

    return parsedRequest;
}
