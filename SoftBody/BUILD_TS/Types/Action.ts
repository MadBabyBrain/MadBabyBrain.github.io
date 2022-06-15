import { Object as custObj } from './Object';

export interface Action {
    bgColor: string;
    Objects: Array<Array<custObj>>;
    Width: number;
    Height: number;
    isRectangle: boolean;
}