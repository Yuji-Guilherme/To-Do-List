import { removeItemLocalStorageArray, setTaskInLocalStorage } from "../local-storage/get-set-remove-functions.js";
import { tasksForLocalStorageArray } from "../local-storage/show-update-functions.js";

export function createCheckBox(checked?:boolean):HTMLInputElement {
    const newCheckBox = document.createElement('input');
    newCheckBox.classList.add('check__box');
    newCheckBox.type = 'checkbox';
    newCheckBox.checked = checked || false;
    addEventCheckBox(newCheckBox);
    return newCheckBox;
}

function addEventCheckBox(newCheckBox: HTMLInputElement) {
    newCheckBox.addEventListener('change', function() {
        const TaskObjectCompletedForCheckBox = this.parentElement!;
        const inputForCheckBox = this.nextElementSibling?.firstChild as HTMLInputElement;
        const checked:boolean = this.checked;
        TaskObjectCompletedForCheckBox.toggleAttribute("data-checked");
        changeCheckedInLocalStorage(inputForCheckBox.value, checked);
    });
}

function changeCheckedInLocalStorage(task:string, checked:boolean):void {
    removeItemLocalStorageArray(tasksForLocalStorageArray, task, !checked);
    setTaskInLocalStorage(task, checked);
 }