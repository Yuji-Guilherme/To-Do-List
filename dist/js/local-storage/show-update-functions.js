import { insertOnPage } from "../app.js";
import { createTemplate } from "../components-task/create-template.js";
import { getTaskInLocalStorage } from "./get-set-remove-functions.js";
export const tasksForLocalStorageArray = [];
export function updateTasksForLocalStorageArray() {
    getTaskInLocalStorage().forEach(item => {
        tasksForLocalStorageArray.push(item);
    });
}
export function showTasksInLocalStorage(array) {
    array.forEach(item => {
        const taskLocalStorageObject = createTemplate(item.name, item.checked);
        insertOnPage(taskLocalStorageObject);
    });
}
