import { LocationData } from 'components/fields/LocationField';
import { Location } from '../DynamicForm';

const locationValidator = async (
    key: string,
    value: LocationData,
    config: Location
) => {
    let error = '';

    if (
        config.isRequired &&
        !value.description &&
        !value.position?.[0] &&
        !value.position?.[1]
    ) {
        error = config.errorMsg || 'Please submit location info!';
    }

    return error;
};

export default locationValidator;
