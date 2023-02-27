import { createTaskLabel } from "./components-task/create-label-input.js";
import { createCheckBox } from "./components-task/create-checkbox.js";
import { createRemoveBtn } from "./components-task/create-remove-btn.js";
export function createTemplate(task, checked) {
    return {
        checkbox: createCheckBox(checked),
        label: createTaskLabel(task),
        removeBtn: createRemoveBtn()
    };
}
