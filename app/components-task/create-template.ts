import { createTaskLabel } from "./create-label-input.js";
import { createCheckBox } from "./create-checkbox.js";
import { createRemoveBtn } from "./create-remove-btn.js";

export type TaskObjectCompleted = {
    checkbox: HTMLInputElement,
    label: HTMLLabelElement,
    removeBtn:HTMLButtonElement,
}

export function createTemplate(task:string, checked?:boolean):TaskObjectCompleted {
    return {
        checkbox: createCheckBox(checked),
        label: createTaskLabel(task),
        removeBtn: createRemoveBtn()
    };
}