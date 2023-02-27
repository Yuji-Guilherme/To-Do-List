import { tasksForLocalStorageArray } from "./show-update-functions.js";
export function getTaskInLocalStorage() {
    return JSON.parse(localStorage.getItem("local-save-task"));
}
export function setTaskInLocalStorage(task, checked) {
    const objectForLocalStorage = {
        name: task,
        checked: checked || false
    };
    tasksForLocalStorageArray.push(objectForLocalStorage);
    localStorage.setItem("local-save-task", JSON.stringify(tasksForLocalStorageArray));
}
export function removeItemLocalStorageArray(array, task, checked) {
    array.splice((getTaskInLocalStorage().findIndex(item => item.name === task && item.checked === checked)), 1);
}
