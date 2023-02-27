export type TaskForLocalStorage = {
    name: string;
    checked: boolean;
};

export const tasksForLocalStorageArray:Partial<TaskForLocalStorage>[] = [];

export function getTaskInLocalStorage(): TaskForLocalStorage[] {
    return JSON.parse(localStorage.getItem("local-save-task")!);
}

export function setTaskInLocalStorage(task: string, checked?:boolean) {
    const objectForLocalStorage = {
        name: task,
        checked: checked || false
    }
    tasksForLocalStorageArray.push(objectForLocalStorage);
    localStorage.setItem("local-save-task", JSON.stringify(tasksForLocalStorageArray));
}

export function removeItemLocalStorageArray(array:Partial<TaskForLocalStorage>[], task:string, checked:boolean) {
    array.splice((getTaskInLocalStorage().findIndex(item => item.name === task && item.checked === checked)), 1);
}