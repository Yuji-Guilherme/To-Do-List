import { listContainer } from "./app.js";
import { getTaskInLocalStorage } from "./local-storage/get-set-remove-functions.js";
import { showTasksInLocalStorage, tasksForLocalStorageArray } from "./local-storage/show-update-functions.js";

const allBtn = document.querySelector("#all-btn") as HTMLButtonElement;
const activeBtn = document.querySelector("#active-btn") as HTMLButtonElement;
const completedBtn = document.querySelector("#completed-btn") as HTMLButtonElement;
const clearAllBtn = document.querySelector("#clear-all-btn") as HTMLButtonElement;

allBtn.addEventListener('click', () => {
    clearList();
    const allTasksArray = getTaskInLocalStorage();
    showTasksInLocalStorage(allTasksArray);
})

activeBtn.addEventListener('click', () => {
    clearList();
    const activeTasksArray = getTaskInLocalStorage().filter(item => item.checked === false);
    showTasksInLocalStorage(activeTasksArray);
})

completedBtn.addEventListener('click', () => {
    clearList();
    const completedTasksArray = getTaskInLocalStorage().filter(item => item.checked === true);
    showTasksInLocalStorage(completedTasksArray);
})

clearAllBtn.addEventListener('click', () => {
    clearList();
    const clearTasksArray:readonly[] = [];
    tasksForLocalStorageArray.length = 0;
    localStorage.setItem("local-save-task", JSON.stringify(clearTasksArray));
})


function clearList() {
    listContainer.innerHTML = "";
}