import { listContainer } from "./app.js";
import { getTaskInLocalStorage } from "./local-storage/get-set-remove-functions.js";
import { showTasksInLocalStorage, tasksForLocalStorageArray } from "./local-storage/show-update-functions.js";
const allBtn = document.querySelector("#all-btn");
const activeBtn = document.querySelector("#active-btn");
const completedBtn = document.querySelector("#completed-btn");
const clearAllBtn = document.querySelector("#clear-all-btn");
allBtn.addEventListener('click', () => {
    clearList();
    const allTasksArray = getTaskInLocalStorage();
    showTasksInLocalStorage(allTasksArray);
});
activeBtn.addEventListener('click', () => {
    clearList();
    const activeTasksArray = getTaskInLocalStorage().filter(item => item.checked === false);
    showTasksInLocalStorage(activeTasksArray);
});
completedBtn.addEventListener('click', () => {
    clearList();
    const completedTasksArray = getTaskInLocalStorage().filter(item => item.checked === true);
    showTasksInLocalStorage(completedTasksArray);
});
clearAllBtn.addEventListener('click', () => {
    clearList();
    const clearTasksArray = [];
    tasksForLocalStorageArray.length = 0;
    localStorage.setItem("local-save-task", JSON.stringify(clearTasksArray));
});
function clearList() {
    listContainer.innerHTML = "";
}
