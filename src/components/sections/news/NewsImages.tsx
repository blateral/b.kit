import React from 'react';
import styled from 'styled-components';

import { spacings, getGlobals as global } from 'utils/styles';
import { useLibTheme, withLibTheme } from 'utils/LibThemeProvider';
import Image, { ImageProps } from 'components/blocks/Image';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Actions from 'components/blocks/Actions';
import Grid from 'components/base/Grid';

const StyledImage = styled(Image)`
    overflow: hidden;
    border-radius: ${({ theme }) => global(theme).sections.edgeRadius};
`;

const StyledActions = styled(Actions)`
    margin-top: ${spacings.spacer}px;
`;

const NewsImages: React.FC<{
    /** ID value for targeting section with anchor hashes */
    anchorId?: string;

    images?: Omit<ImageProps, 'coverSpace'>[];
    imageStyle?: 'full' | 'half';

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    bgMode?: 'full' | 'inverted';
}> = ({
    anchorId,
    images,
    imageStyle = 'full',
    primaryAction,
    secondaryAction,
    bgMode,
}) => {
    const { colors } = useLibTheme();

    const isInverted = bgMode === 'inverted';
    const hasBg = bgMode === 'full';

    return (
        <Section
            addSeperation
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.new.sectionBg.dark
                    : hasBg
                    ? colors.new.sectionBg.medium
                    : 'transparent'
            }
            bgMode={mapToBgMode(bgMode, true)}
        >
            <Wrapper clampWidth="small" addWhitespace>
                {images && (imageStyle === 'half' || images.length >= 2) ? (
                    <Grid.Row>
                        {images.map((img, i) => {
                            return (
                                <Grid.Col medium={{ span: 6 / 12 }} key={i}>
                                    <div>
                                        <StyledImage coverSpace {...img} />
                                    </div>
                                </Grid.Col>
                            );
                        })}
                    </Grid.Row>
                ) : (
                    images && (
                        <div>
                            {images.map((img, i) => {
                                return (
                                    <StyledImage coverSpace {...img} key={i} />
                                );
                            })}
                        </div>
                    )
                )}

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

export const NewsImagesComponent = NewsImages;
export default withLibTheme(NewsImages);
