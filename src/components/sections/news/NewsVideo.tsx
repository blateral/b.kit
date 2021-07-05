import * as React from 'react';
import { ImageProps } from 'components/blocks/Image';
import styled, { ThemeContext } from 'styled-components';
import Section from 'components/base/Section';
import { getColors, spacings, withRange } from 'utils/styles';
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

    isInverted?: boolean;
}> = ({
    bgImage,
    embedId,
    playIcon,
    primaryAction,
    secondaryAction,
    isInverted,
}) => {
    const theme = React.useContext(ThemeContext);
    return (
        <Section
            addSeperation
            bgColor={isInverted ? getColors(theme).dark : 'transparent'}
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
