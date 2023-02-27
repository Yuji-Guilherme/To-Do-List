import { tasksForLocalStorageArray } from "./show-update-functions.js";
import { TaskObjectForLocalStorage } from "./type-object.js";

export function getTaskInLocalStorage():TaskObjectForLocalStorage[] {
    return JSON.parse(localStorage.getItem("local-save-task")!);
}

export function setTaskInLocalStorage(task: string, checked?:boolean):void {
    const objectForLocalStorage = {
        name: task,
        checked: checked || false
    }
    tasksForLocalStorageArray.push(objectForLocalStorage);
    localStorage.setItem("local-save-task", JSON.stringify(tasksForLocalStorageArray));
}

export function removeItemLocalStorageArray(
        array:Partial<TaskObjectForLocalStorage>[], 
        task:string, 
        checked:boolean
    ):void {  
        array.splice((getTaskInLocalStorage().findIndex(item => item.name === task && item.checked === checked)), 1);
}