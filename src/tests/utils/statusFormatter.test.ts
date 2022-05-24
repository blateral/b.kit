import StatusFormatter from '../../utils/statusFormatter';

describe('StatusFormatter', () => {
    let instance: StatusFormatter;

    beforeEach(() => {
        instance = new StatusFormatter(
            1653404409226,
            '<DATE> <TIME>',
            'dd.mm.yyyy',
            'hh:mm'
        );
    });

    it('is instance of StatusFormatter', () => {
        expect(instance).toBeInstanceOf(StatusFormatter);
    });

    it('get formatted date', () => {
        const formattedDate = instance.getFormattedDate();
        expect(formattedDate).toBeDefined();
        expect(formattedDate).toBe('24.05.2022');
    });

    it('get formatted time', () => {
        const formattedTime = instance.getFormattedTime();
        expect(formattedTime).toBeDefined();
        expect(formattedTime).toBe('17:00');
    });

    it('get formatted timespan', () => {
        const formattedTimespan = instance.getFormattedTimespan(
            '<START><SEP><END>',
            20000
        );
        expect(formattedTimespan).toBeDefined();
        expect(formattedTimespan).toBe('17:00 - 22:33');
    });

    it('get formatted timespan with duration of 0', () => {
        const formattedTimespan = instance.getFormattedTimespan(
            '<START><SEP><END>',
            0
        );
        expect(formattedTimespan).toBeDefined();
        expect(formattedTimespan).toBe('17:00');
    });

    it('get formatted timespan with custom seperator', () => {
        const formattedTimespan = instance.getFormattedTimespan(
            '<START><SEP><END>',
            20000,
            ' = '
        );
        expect(formattedTimespan).toBeDefined();
        expect(formattedTimespan).toBe('17:00 = 22:33');
    });

    it('get formatted timespan with empty format', () => {
        const formattedTimespan = instance.getFormattedTimespan(
            '',
            20000,
            ' = '
        );
        expect(formattedTimespan).toBeDefined();
        expect(formattedTimespan).toBe('');
    });

    it('get formatted timespan with undefined format', () => {
        const formattedTimespan = instance.getFormattedTimespan(
            undefined,
            20000,
            ' = '
        );
        expect(formattedTimespan).toBeDefined();
        expect(formattedTimespan).toBe('');
    });

    it('get formatted status', () => {
        const formattedStatus = instance.getFormattedStatus();
        expect(formattedStatus).toBeDefined();
        expect(formattedStatus).toBe('24.05.2022 17:00');
    });

    it('check if dates are on same day', () => {
        const isOnSameDay = instance.areOnSameDay(
            new Date(1653404409226),
            new Date(1653405451715)
        );
        expect(isOnSameDay).toBe(true);
    });

    it('check if dates are on same day with day switch', () => {
        const isOnSameDay = instance.areOnSameDay(
            new Date(1653404409226),
            new Date(1653429601000) // 1 second in new day
        );
        expect(isOnSameDay).toBe(false);
    });

    it('set date and get new formatted date', () => {
        instance.setDate(1653429601000);
        const formattedDate = instance.getFormattedDate();
        expect(formattedDate).toBe('25.05.2022');
    });
});
