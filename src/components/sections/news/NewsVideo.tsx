import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { ImageProps } from 'components/blocks/Image';
import Section, { mapToBgMode } from 'components/base/Section';
import { getColors as color, spacings, withRange } from 'utils/styles';
import Wrapper from 'components/base/Wrapper';
import VideoCard from 'components/blocks/VideoCard';
import Actions from 'components/blocks/Actions';

const StyledActions = styled(Actions)`
    ${withRange([spacings.spacer, spacings.spacer * 2], 'margin-top')};
`;

const NewsVideo: React.FC<{
    bgImage?: ImageProps;
    embedId?: string;
    playIcon?: React.ReactChild;

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    bgMode?: 'full' | 'inverted';
}> = ({
    bgImage,
    embedId,
    playIcon,
    primaryAction,
    secondaryAction,
    bgMode,
}) => {
    const theme = useContext(ThemeContext);

    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';
    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).dark
                    : hasBg
                    ? color(theme).mono.light
                    : 'transparent'
            }
            bgMode={mapToBgMode(bgMode)}
        >
            <Wrapper addWhitespace clampWidth="small">
                <div>
                    {embedId && bgImage && (
                        <VideoCard
                            bgImage={bgImage}
                            embedId={embedId}
                            playIcon={playIcon}
                        />
                    )}
                </div>
                {(primaryAction || secondaryAction) && (
                    <StyledActions
                        primary={primaryAction && primaryAction(isInverted)}
                        secondary={
                            secondaryAction && secondaryAction(isInverted)
                        }
                    />
                )}
            </Wrapper>
        </Section>
    );
};

export default NewsVideo;
