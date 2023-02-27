import { removeItemLocalStorageArray, tasksForLocalStorageArray } from "../local-storage/local-storage-functions.js";

export function createRemoveBtn():HTMLButtonElement {
    const newRemoveBtn = document.createElement('button');
    newRemoveBtn.classList.add('remove-btn');
    newRemoveBtn.textContent = 'x';
    addEventRemoveBtn(newRemoveBtn);
    return newRemoveBtn;
}

function addEventRemoveBtn(newRemoveBtn:HTMLButtonElement) {
    newRemoveBtn.addEventListener('click', function(){
        const inputForRemoveBtn = this.previousElementSibling?.firstChild as HTMLInputElement;
        const taskCompletedForRemoveBtn = this.parentElement!;
        const checked = taskCompletedForRemoveBtn.hasAttribute("data-checked");
        removeTaskLocalStorage(inputForRemoveBtn.value, checked);
        taskCompletedForRemoveBtn.remove();
    });
}

function removeTaskLocalStorage(task:string, checked:boolean) {
    removeItemLocalStorageArray(tasksForLocalStorageArray, task, checked);
    localStorage.setItem("local-save-task", JSON.stringify(tasksForLocalStorageArray));
}
