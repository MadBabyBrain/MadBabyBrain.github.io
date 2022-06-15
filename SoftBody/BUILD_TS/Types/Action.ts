import { Object } from './Object';

export interface Action {
    bgColor: string;
    Objects: Array<Array<Object>>;
    Width: number;
    Height: number;
    isRectangle: boolean;
}