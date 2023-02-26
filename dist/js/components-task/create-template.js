import { createTaskLabel } from "./create-label-input.js";
import { createCheckBox } from "./create-checkbox.js";
import { createRemoveBtn } from "./create-remove-btn.js";
export function createTemplate(task) {
    return {
        checkbox: createCheckBox(),
        label: createTaskLabel(task),
        removeBtn: createRemoveBtn()
    };
}
