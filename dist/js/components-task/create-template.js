import { createTaskLabel } from "./create-label-input.js";
import { createCheckBox } from "./create-checkbox.js";
import { createRemoveBtn } from "./create-remove-btn.js";
export function createTemplate(task, checked) {
    return {
        checkbox: createCheckBox(checked),
        label: createTaskLabel(task),
        removeBtn: createRemoveBtn()
    };
}
