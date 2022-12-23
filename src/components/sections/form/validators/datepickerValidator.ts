import { Datepicker } from '../DynamicForm';

const datepickerValidator = async (
    key: string,
    value: [Date | null, Date | null],
    config: Datepicker
) => {
    let error = '';
    const single = config.singleSelect;

    if (config.isRequired && !value) {
        error = single
            ? config.singleDateError || 'Please submit date!'
            : config.multiDateError || 'Please submit start- and enddate!';
    } else if (config.isRequired && single && !value[0]) {
        error = config.singleDateError || 'Please submit date!';
    } else if (config.isRequired && !single && (!value[0] || !value[1])) {
        error = config.multiDateError || 'Please submit start- and enddate!';
    }

    return error;
};

export default datepickerValidator;
