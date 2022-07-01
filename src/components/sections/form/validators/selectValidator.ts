import { Select } from '../DynamicForm';

const selectValidator = async (key: string, value: string, config: Select) => {
    let error = '';

    if (config.isRequired && !value) {
        error = config.errorMsg || 'Required field';
    }

    return error;
};

export default selectValidator;
