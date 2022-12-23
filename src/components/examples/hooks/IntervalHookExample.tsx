import React, { FC, useState } from 'react';
import useInterval from 'utils/useInterval';
import Section from 'components/base/Section';
import Copy from 'components/typography/Copy';
import Wrapper from 'components/base/Wrapper';
import Heading from 'components/typography/Heading';

const IntervalHookExample: FC = () => {
    const [counter, setCounter] = useState<number>(0);

    const { clear, reset } = useInterval(
        () => setCounter((prev) => ++prev),
        1000
    );

    return (
        <Section addSeperation>
            <Wrapper addWhitespace>
                <Heading>Interval hook example</Heading>
                <div>
                    <button onClick={() => clear()}>clear</button>
                    <button onClick={() => reset()}>reset</button>
                </div>
                <Copy>{counter}</Copy>
            </Wrapper>
        </Section>
    );
};

export default IntervalHookExample;
