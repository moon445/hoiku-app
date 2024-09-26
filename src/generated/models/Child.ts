/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClassPeriod } from './ClassPeriod';
/**
 * 子供データ
 */
export type Child = {
    /**
     * ID
     */
    id?: number;
    /**
     * 親id
     */
    parentId?: number;
    /**
     * 子供名前
     */
    child_name?: string;
    /**
     * 誕生日
     */
    birthday?: string;
    /**
     * 性別
     */
    gender?: number;
    classPeriod?: ClassPeriod;
    /**
     * 性別名称
     */
    genderName?: string;
};

