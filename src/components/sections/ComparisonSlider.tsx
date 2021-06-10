import React, { FC, useState } from 'react';
import styled from 'styled-components';

import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Image, { ImageProps } from 'components/blocks/Image';

const Images = styled.div`
    position: relative;
`;

const BackgroundImg = styled(Image)`
    position: relative;
    display: block;
    width: 100%;
`;

const ForegroundContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 50%;
    overflow: hidden;
`;

const ForegroundImg = styled(Image)`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    max-width: none;
`;

const ComparisonSlider: FC<{
    foregroundImg?: ImageProps;
    backgroundImg?: ImageProps;
}> = ({ foregroundImg, backgroundImg }) => {
    const [slideValue, setSlideValue] = useState<string>('50');

    return (
        <Section>
            <Wrapper>
                {backgroundImg && foregroundImg && (
                    <Images>
                        <BackgroundImg {...backgroundImg} />
                        <ForegroundContainer
                            style={{ width: slideValue + '%' }}
                        >
                            <ForegroundImg {...foregroundImg} />
                        </ForegroundContainer>
                    </Images>
                )}
                <input
                    type="range"
                    min="0"
                    max="100"
                    step="0.01"
                    value={slideValue}
                    onChange={(e: React.SyntheticEvent<HTMLInputElement>) =>
                        setSlideValue(e.currentTarget.value)
                    }
                    style={{ width: '100%' }}
                />
            </Wrapper>
        </Section>
    );
};

export default ComparisonSlider;
