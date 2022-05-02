import SocialList, { SocialItem } from 'components/blocks/SocialList';
import React, { FC } from 'react';
import FooterArticle from '../skeletons/FooterArticle';

const FooterColumn: FC<{
    isInverted?: boolean;
    title?: string;
    text?: string;
    action?: (props: { isInverted?: boolean }) => React.ReactNode;
    socialTitle?: string;
    socials?: SocialItem[];
}> = ({ isInverted, title, text, action, socialTitle, socials }) => {
    return (
        <React.Fragment>
            {(title || text || action) && (
                <FooterArticle title={title} text={text} action={action} />
            )}
            {socials && socials.length > 0 && (
                <SocialList
                    isInverted={isInverted}
                    title={socialTitle}
                    items={socials}
                />
            )}
        </React.Fragment>
    );
};

export default FooterColumn;
