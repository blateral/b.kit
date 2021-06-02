import Wrapper from 'components/base/Wrapper';
import Image, { ImageProps } from 'components/blocks/Image';
import * as React from 'react';
import styled from 'styled-components';
import { mq, spacings, withRange } from 'utils/styles';

const View = styled.header`
    position: relative;
`;

const HeaderWrapper = styled(Wrapper)`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const MobileImage = styled(Image)`
    display: flex;

    pointer-events: none;

    object-fit: cover;

    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    width: 100%;
    min-height: 500px;

    /* ${withRange([spacings.spacer, spacings.spacer * 2], 'padding-top')};
    ${withRange([spacings.spacer, spacings.spacer * 4], 'padding-bottom')}; */

    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: 2;
    }

    /* required to align items at flex-end in ie11 */
    &:before {
        content: '';
        min-height: 1px; // before: 200px
        display: block;
        flex: 1 0 0px;
    }
`;

const MobilePoster = styled.div`
    @media ${mq.semilarge} {
        display: none;
    }
`;

export interface VideoProps {
    url: string;
    mobileImage?: ImageProps;
    autoplay?: boolean;
}

const AutoplayVideo = styled.video<{ isVisible?: boolean }>`
    display: none;
    position: relative;

    @media ${mq.semilarge} {
        position: ${({ isVisible }) => (isVisible ? 'relative' : 'absolute')};
        top: 0;
        left: 0;
        opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
        display: flex;
        width: 100%;

        pointer-events: none;

        object-fit: cover;

        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        height: 100vh;
        max-height: 1100px;

        &:after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
            z-index: 2;
        }

        /* required to align items at flex-end in ie11 */
        &:before {
            content: '';
            min-height: 1px; // before: 200px
            display: block;
            flex: 1 0 0px;
        }
    }
`;

const VideoContent = styled.div<{ isOpen?: boolean }>`
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 450px;
    overflow: hidden;

    transition: width 0.35s ease-in-out;
    will-change: width;

    & > * {
        min-height: 450px;
    }

    @media ${mq.large} {
        width: ${({ isOpen }) => (isOpen ? 'auto' : '50%')};
    }
`;

const StyledImage = styled(Image)`
    position: absolute;
    height: 100%;
`;

const VideoHeader: React.FC<VideoProps & { mobileImage?: ImageProps }> = ({
    url,
    mobileImage,
}) => {
    const [isLoaded, setLoaded] = React.useState(false);
    const [isVideoOpen, setVideoOpen] = React.useState(false);
    console.log(setVideoOpen(isVideoOpen));

    return (
        <View>
            <HeaderWrapper clampWidth="large">
                {mobileImage && (
                    <MobilePoster>
                        <MobileImage {...mobileImage} />
                    </MobilePoster>
                )}
                <VideoContent isOpen={isVideoOpen}>
                    {!isLoaded && !isVideoOpen && mobileImage && (
                        <StyledImage coverSpace {...mobileImage} />
                    )}

                    {!isVideoOpen && url && (
                        <AutoplayVideo
                            isVisible={isLoaded}
                            muted
                            autoPlay
                            loop
                            onCanPlayThrough={() => setLoaded(true)}
                            src={url}
                        />
                    )}
                </VideoContent>
            </HeaderWrapper>
        </View>
    );
};

export default VideoHeader;
