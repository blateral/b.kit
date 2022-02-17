import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import {
    getColors as color,
    spacings,
    withRange,
    getGlobals as global,
} from 'utils/styles';
import { withLibTheme } from 'utils/LibThemeProvider';
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
    ${withRange([spacings.spacer, spacings.spacer * 2], 'margin-top')};
`;

const NewsImages: React.FC<{
    images?: Omit<ImageProps, 'coverSpace'>[];
    imageStyle?: 'full' | 'half';

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;

    bgMode?: 'full' | 'inverted';
}> = ({
    images,
    imageStyle = 'full',
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
                    ? color(theme).new.sectionBg.dark
                    : hasBg
                    ? color(theme).new.sectionBg.medium
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
