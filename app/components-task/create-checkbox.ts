import { removeItemLocalStorageArray, tasksForLocalStorageArray, setTaskInLocalStorage } from "../local-storage/local-storage-functions.js";


export function createCheckBox(checked?:boolean):HTMLInputElement {
    const newCheckBox = document.createElement('input');
    newCheckBox.classList.add('check-box');
    newCheckBox.type = 'checkbox';
    newCheckBox.checked = checked || false;
    addEventCheckBox(newCheckBox);
    return newCheckBox;
}

function addEventCheckBox(newCheckBox: HTMLInputElement) {
    newCheckBox.addEventListener('change', function() {
        const taskCompletedForCheckBox = this.parentElement!;
        const inputForCheckBox = this.nextElementSibling?.firstChild as HTMLInputElement;
        const checked = this.checked;
        taskCompletedForCheckBox.classList.toggle("checked");
        taskCompletedForCheckBox.toggleAttribute("data-checked");
        checkedInputInLocalStorage(inputForCheckBox.value, checked);
    });
}

function checkedInputInLocalStorage(task:string, checked:boolean) {
    removeItemLocalStorageArray(tasksForLocalStorageArray, task, !checked);
    setTaskInLocalStorage(task, checked);
 }