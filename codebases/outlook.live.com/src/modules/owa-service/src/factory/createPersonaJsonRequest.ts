// This file is auto-generated by the "tsproxygen.exe" tool. Manual modification is not recommended.
import type CreatePersonaJsonRequest from '../contract/CreatePersonaJsonRequest';

export default function createPersonaJsonRequest(
    data: CreatePersonaJsonRequest
): CreatePersonaJsonRequest {
    let result: CreatePersonaJsonRequest = {
        __type: 'CreatePersonaJsonRequest:#Exchange',
        ...data,
    };

    return result;
}