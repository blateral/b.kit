import { FieldGroup } from '../DynamicForm';

const fieldGroupValidator = async (
    key: string,
    value: Array<string> | string,
    config: FieldGroup
) => {
    const type = config.groupType;
    let error = '';

    if (type === 'Checkbox') {
        const selectValues = value as string[];
        if (config.isRequired && (!selectValues || selectValues?.length < 1)) {
            error = config.errorMsg || 'Please select at least one item!';
        }
    } else if (type === 'Radio') {
        if (config.isRequired && !value) {
            error = config.errorMsg || 'Selection required';
        }
    }
    return error;
};

export default fieldGroupValidator;
