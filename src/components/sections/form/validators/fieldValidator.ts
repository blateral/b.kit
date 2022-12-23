import { Field } from '../DynamicForm';

const fieldValidator = async (key: string, value: string, config: Field) => {
    const inputType = config.inputType;
    let error = '';

    if (config.isRequired && !value) {
        error = config.errorMsg || 'Required field';
    }

    switch (inputType) {
        case 'email':
            if (
                value &&
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
            ) {
                error = config.errorMsg || 'Invalid Mail format';
            }
            break;
        case 'tel':
            if (value && /[A-Z]/gi.test(value)) {
                error = config.errorMsg || 'Ungültige Telefonnummer';
            }
            break;
        case 'number':
            if (value && !/^[+]?\d+([.]\d+)?$/gm.test(value as string)) {
                error = config.errorMsg || 'Zahlenformat ungültig';
            }
            break;
    }

    return error;
};

export default fieldValidator;
