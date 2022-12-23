import { FileUpload } from '../DynamicForm';

const uploadValidator = async (
    key: string,
    files: Array<File>,
    config: FileUpload
) => {
    let error = '';

    if (config.isRequired && (!files || files?.length < 1)) {
        error = config.errorMsg || 'Please submit at least one file!';
    }

    return error;
};

export default uploadValidator;
