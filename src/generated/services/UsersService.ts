/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Users } from '../models/Users';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UsersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * ユーザーを取得
     * IDを指定してユーザーを取得
     * @param id タスクのID
     * @returns Users OK
     * @throws ApiError
     */
    public getUser(
        id: number,
    ): CancelablePromise<Users> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * ユーザーを更新する
     * ユーザーのリクエストされたプロパティを更新します。
     * @param id ユーザーのID
     * @param requestBody
     * @returns Users OK
     * @throws ApiError
     */
    public replaceUser(
        id: number,
        requestBody: Users,
    ): CancelablePromise<Users> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/user/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * ユーザーリストを取得
     * ユーザーのリストを取得
     * @returns Users OK
     * @throws ApiError
     */
    public findAllUser(): CancelablePromise<Array<Users>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user',
        });
    }
    /**
     * ユーザーの存在確認
     * mailとpasswaordで一致するレコードを取得
     * @param mail メールアドレス
     * @param password パスワード
     * @returns Users OK
     * @throws ApiError
     */
    public login(
        mail: string,
        password: string,
    ): CancelablePromise<Users> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/login',
            query: {
                'mail': mail,
                'password': password,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
