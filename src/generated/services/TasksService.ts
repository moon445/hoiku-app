/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Task } from '../models/Task';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TasksService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * タスクを取得する。
     * IDを指定してタスクを取得します。
     * @param id タスクのID
     * @returns Task OK
     * @throws ApiError
     */
    public getTask(
        id: string,
    ): CancelablePromise<Task> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tasks/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * タスクを更新する
     * タスクのリクエストされたプロパティを更新します。
     * @param id タスクのID
     * @param requestBody
     * @returns Task OK
     * @throws ApiError
     */
    public replaceTask(
        id: string,
        requestBody: Task,
    ): CancelablePromise<Task> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/tasks/{id}',
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
     * タスクを削除する。
     * 指定されたIDのタスクを削除します。
     * @param id タスクのID
     * @returns any OK
     * @throws ApiError
     */
    public deleteTask(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/tasks/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * タスクリストを取得する
     * タスクのリストを取得します。
     * @returns Task OK
     * @throws ApiError
     */
    public findAllTasks(): CancelablePromise<Array<Task>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/tasks',
        });
    }
    /**
     * タスクを作成をする
     * タスクを作成します。
     * @param requestBody
     * @returns Task 作成されました。
     * @throws ApiError
     */
    public createTask(
        requestBody: Task,
    ): CancelablePromise<Task> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/tasks',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
