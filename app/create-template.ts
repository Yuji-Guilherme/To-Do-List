import { createTaskLabel } from "./components-task/create-label-input.js";
import { createCheckBox } from "./components-task/create-checkbox.js";
import { createRemoveBtn } from "./components-task/create-remove-btn.js";

export type TaskCompleted = {
    checkbox: HTMLInputElement,
    label: HTMLLabelElement,
    removeBtn:HTMLButtonElement,
}

export function createTemplate(task:string):TaskCompleted {
    return {
        checkbox: createCheckBox(),
        label: createTaskLabel(task),
        removeBtn: createRemoveBtn()
    };
}