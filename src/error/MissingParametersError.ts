import { BaseError } from "./BaseError";

export class MissingParametersError extends BaseError {
    constructor(message: string) {
        super(message, 400);
    }
}