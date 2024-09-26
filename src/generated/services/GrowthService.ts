/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Growth } from '../models/Growth';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class GrowthService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * 成長記録リストを取得
     * 成長記録をリストで取得
     * @returns Growth OK
     * @throws ApiError
     */
    public findAllUser2(): CancelablePromise<Array<Growth>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/growth',
        });
    }
    /**
     * クラスidごとの成長記録を取得
     * クラス単位の成長記録を取得
     * @param classId クラスID
     * @returns Growth OK
     * @throws ApiError
     */
    public findAllClassidByGrowth(
        classId: number,
    ): CancelablePromise<Array<Growth>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/growth/{classId}',
            path: {
                'classId': classId,
            },
        });
    }
    /**
     * 子供idごとの成長記録を取得
     * 子供単位の成長記録を取得
     * @param childId 子供ID
     * @returns Growth OK
     * @throws ApiError
     */
    public getGrowthsByChild(
        childId: number,
    ): CancelablePromise<Array<Growth>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/growth/child/{childId}',
            path: {
                'childId': childId,
            },
        });
    }
    /**
     * クラスidごとの成長記録を取得
     * クラス単位の成長記録を取得
     * @param childId 子供ID
     * @param classId クラスID
     * @returns Growth OK
     * @throws ApiError
     */
    public getGrowthsByChildAndClass(
        childId: number,
        classId: number,
    ): CancelablePromise<Array<Growth>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/child/{childId}/growth/{classId}',
            path: {
                'childId': childId,
                'classId': classId,
            },
        });
    }
}
