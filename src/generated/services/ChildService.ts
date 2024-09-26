/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Child } from '../models/Child';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ChildService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * ユーザーリストを取得
     * ユーザーのリストを取得
     * @param id タスクのID
     * @returns Child OK
     * @throws ApiError
     */
    public findAllchildByUser(
        id: number,
    ): CancelablePromise<Array<Child>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/{id}/child',
            path: {
                'id': id,
            },
        });
    }
    /**
     * ユーザーリストを取得
     * ユーザーのリストを取得
     * @returns Child OK
     * @throws ApiError
     */
    public findAllUser3(): CancelablePromise<Array<Child>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/child',
        });
    }
    /**
     * ユーザーを取得
     * IDを指定してユーザーを取得
     * @param id タスクのID
     * @returns Child OK
     * @throws ApiError
     */
    public getUser1(
        id: number,
    ): CancelablePromise<Child> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/child/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
