import Actions from 'components/blocks/Actions';
import Image, { ImageProps } from 'components/blocks/Image';
import Copy from 'components/typography/Copy';
import * as React from 'react';
import styled from 'styled-components';
import { mq, spacings, withRange } from 'utils/styles';

const Content = styled.a<{
    isVisible?: boolean;
    index: number;
    visibleCards: number;
}>`
    padding: 20px;

    flex: 0 0 50%;

    display: ${({ index, visibleCards }) =>
        index < visibleCards ? 'block' : 'none'};

    text-decoration: none;
`;

const FooterHead = styled(Copy)`
    display: flex;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-top: ${spacings.spacer * 2}px;
    margin-bottom: ${spacings.spacer * 1.5}px;
`;

const Tag = styled.div<{ isInverted?: boolean }>`
    border: 1px solid ${({ isInverted }) => (isInverted ? '#fff' : '#000')};
    border-radius: 15px;

    padding: 5px 10px;
`;

const FooterMain = styled.div`
    & > * + * {
        margin-top: ${spacings.spacer}px;
    }
`;

const StyledActions = styled(Actions)`
    ${withRange([spacings.spacer, spacings.spacer * 2], 'padding-top')}

    @media ${mq.semilarge} {
        align-items: flex-start;

        & > * {
            max-width: ${(19 / 28) * spacings.wrapper + 'px'};
        }
    }
`;

export interface NewsCardProps {
    tag?: string;
    newsLink?: string;
    publishDate?: string;
    title?: string;
    text?: string;
    image?: ImageProps;

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
}

const NewsCard: React.FC<
    NewsCardProps & {
        index: number;

        isInverted?: boolean;
        visibleCards?: number;
    }
> = ({
    tag,
    newsLink,
    publishDate,
    title,
    text,
    image,
    index,
    isInverted,
    visibleCards,
    primaryAction,
    secondaryAction,
}) => {
    return (
        <Content
            index={index}
            href={newsLink}
            visibleCards={visibleCards ? visibleCards : 2}
        >
            <Copy>
                {image && <Image {...image} />}
                <FooterHead isInverted={isInverted}>
                    <Tag isInverted={isInverted}>{tag}</Tag>
                    <div>{publishDate}</div>
                </FooterHead>
                <FooterMain>
                    <Copy isInverted={isInverted} size="big" type="copy-b">
                        {title}
                    </Copy>
                    <Copy isInverted={isInverted} type="copy-b">
                        {text}
                    </Copy>
                    {(primaryAction || secondaryAction) && (
                        <StyledActions
                            primary={primaryAction && primaryAction(isInverted)}
                            secondary={
                                secondaryAction && secondaryAction(isInverted)
                            }
                        />
                    )}
                </FooterMain>
            </Copy>
        </Content>
    );
};

export default NewsCard;
