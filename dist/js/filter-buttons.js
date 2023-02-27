import { arrayInLocalStorage, listContainer } from "./app.js";
import { getTaskInLocalStorage } from "./local-storage/get-set-remove-functions.js";
import { showTasksInLocalStorage } from "./local-storage/show-update-functions.js";
const allBtn = document.querySelector("#all-btn");
const activeBtn = document.querySelector("#active-btn");
const completedBtn = document.querySelector("#completed-btn");
allBtn.addEventListener('click', () => {
    clearList();
    showTasksInLocalStorage(arrayInLocalStorage);
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
function clearList() {
    listContainer.innerHTML = "";
}
