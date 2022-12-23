import { Select } from '../DynamicForm';

const selectValidator = async (
    key: string,
    selectedItem: string,
    config: Select
) => {
    let error = '';

    if (config.isRequired && !selectedItem) {
        error = config.errorMsg || 'Required field';
    }

    return error;
};

export default selectValidator;
