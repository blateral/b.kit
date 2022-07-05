import React, { FC } from 'react';
import useArray from 'utils/useArray';
import Section from 'components/base/Section';
import Copy from 'components/typography/Copy';
import Wrapper from 'components/base/Wrapper';

const ArrayHookExample: FC = () => {
    const { array, filter, pop, push, clear, remove, set, update } = useArray([
        'Markus',
        'Lena',
        'Maja',
    ]);

    return (
        <Section addSeperation>
            <Wrapper addWhitespace>
                <div>
                    <button onClick={() => filter((el) => el === 'Maja')}>
                        Maja filter
                    </button>
                    <button onClick={() => pop()}>Remove last</button>
                    <button onClick={() => push('Maja')}>Add Maja</button>
                    <button onClick={() => push(['Markus', 'Lukas'])}>
                        Add Markus and Lukas
                    </button>
                    <button onClick={() => remove(1)}>Remove second</button>
                    <button onClick={() => update(1, 'Lena U.')}>
                        Update second to Lena U.
                    </button>
                    <button
                        onClick={() => set(['Lena U.', 'Lena Z.', 'Lena. K'])}
                    >
                        Set Array to Lena Array
                    </button>
                    <button onClick={() => clear()}>clear</button>
                </div>
                <Copy>{JSON.stringify(array)}</Copy>
            </Wrapper>
        </Section>
    );
};

export default ArrayHookExample;
