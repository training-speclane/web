import { getTime } from "./arrow-functions.js";


export function getTodaysDate (){
    return new Date().getFullYear() + "time: " + getTime();
}