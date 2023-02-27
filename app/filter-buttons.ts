import { arrayInLocalStorage, listContainer } from "./app.js";
import { getTaskInLocalStorage } from "./local-storage/get-set-remove-functions.js";
import { showTasksInLocalStorage } from "./local-storage/show-update-functions.js";

const allBtn = document.querySelector("#all-btn") as HTMLButtonElement;
const activeBtn = document.querySelector("#active-btn") as HTMLButtonElement;
const completedBtn = document.querySelector("#completed-btn") as HTMLButtonElement;

allBtn.addEventListener('click', () => {
    clearList();
    showTasksInLocalStorage(arrayInLocalStorage);
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

function clearList() {
    listContainer.innerHTML = "";
}