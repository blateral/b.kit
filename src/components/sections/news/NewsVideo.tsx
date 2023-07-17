import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { ImageProps } from 'components/blocks/Image';
import Section from 'components/base/Section';
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

    isInverted?: boolean;
    hasBack?: boolean;

    consentText?: string;
    consentAction?: (props: {
        label: string;
        handleClick?: () => void;
        consentProps: Record<string, string>;
    }) => React.ReactNode;
    /**
     * Custom handler for play button click
     * @returns true if video should be played
     */
    onPlayClick?: () => Promise<boolean>;
}> = ({
    bgImage,
    embedId,
    playIcon,
    primaryAction,
    secondaryAction,
    isInverted = false,
    hasBack = false,
    consentText,
    consentAction,
    onPlayClick,
}) => {
    const theme = useContext(ThemeContext);
    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).dark
                    : hasBack
                    ? color(theme).mono.light
                    : 'transparent'
            }
        >
            <Wrapper addWhitespace clampWidth="small">
                <div>
                    {embedId && bgImage && (
                        <VideoCard
                            bgImage={bgImage}
                            embedId={embedId}
                            playIcon={playIcon}
                            consentText={consentText}
                            consentAction={consentAction}
                            onPlayClick={onPlayClick}
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
