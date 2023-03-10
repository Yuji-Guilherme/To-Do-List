import { removeItemLocalStorageArray } from "../local-storage/get-set-remove-functions.js";
import { tasksForLocalStorageArray } from "../local-storage/show-update-functions.js";

export function createRemoveBtn():HTMLButtonElement {
    const newRemoveBtn = document.createElement('button');
    newRemoveBtn.classList.add('remove__btn');
    newRemoveBtn.innerHTML = `<span class="material-symbols-rounded">close</span>`;
    addEventRemoveBtn(newRemoveBtn);
    return newRemoveBtn;
}

function addEventRemoveBtn(newRemoveBtn:HTMLButtonElement) {
    newRemoveBtn.addEventListener('click', function(){
        const inputForRemoveBtn = this.previousElementSibling?.firstChild as HTMLInputElement;
        const TaskObjectCompletedForRemoveBtn = this.parentElement!;
        const checked:boolean = TaskObjectCompletedForRemoveBtn.hasAttribute("data-checked");
        removeTaskLocalStorage(inputForRemoveBtn.value, checked);
        TaskObjectCompletedForRemoveBtn.remove();
    });
}

function removeTaskLocalStorage(task:string, checked:boolean):void {
    removeItemLocalStorageArray(tasksForLocalStorageArray, task, checked);
    localStorage.setItem("local-save-task", JSON.stringify(tasksForLocalStorageArray));
}
