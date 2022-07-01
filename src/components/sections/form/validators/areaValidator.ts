import { Area } from '../DynamicForm';

const areaValidator = async (key: string, value: string, config: Area) => {
    let error = '';

    if (config.isRequired && !value) {
        error = config.errorMsg || 'Required field';
    }

    return error;
};

export default areaValidator;
