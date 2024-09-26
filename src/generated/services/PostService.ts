/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Post } from '../models/Post';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PostService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * ユーザーリストを取得
     * ユーザーのリストを取得
     * @returns Post OK
     * @throws ApiError
     */
    public findAllUser1(): CancelablePromise<Array<Post>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/post',
        });
    }
    /**
     * クラスidごとの投稿リストを取得
     * クラス単位の投稿を取得
     * @param classId クラスID
     * @returns Post OK
     * @throws ApiError
     */
    public findAllClassidByPost(
        classId: number,
    ): CancelablePromise<Array<Post>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/post/{classId}',
            path: {
                'classId': classId,
            },
        });
    }
}
