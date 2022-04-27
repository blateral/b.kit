import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import Link from 'components/typography/Link';
import React from 'react';
import { useLibTheme } from 'utils/LibThemeProvider';

const FooterNew: React.FC<{
    bgMode?: 'inverted';
    siteLinks?: {
        siteColTitle?: string;
        colLinks?: { href?: string; label?: string }[];
    }[];
}> = ({ bgMode, siteLinks }) => {
    const { colors } = useLibTheme();
    return (
        <Section
            renderAs="footer"
            bgMode={mapToBgMode(bgMode)}
            bgColor={bgMode ? colors.sectionBg.dark : colors.sectionBg.light}
        >
            <Wrapper addWhitespace>
                {siteLinks &&
                    siteLinks.map((links, i) => {
                        return (
                            <div key={i} className="col">
                                <Copy type="copy-b">{links.siteColTitle}</Copy>
                                <ul>
                                    {links.colLinks?.map((link, ii) => {
                                        return (
                                            <li key={ii}>
                                                <Link href={link.href}>
                                                    <Copy>{link.label}</Copy>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
            </Wrapper>
        </Section>
    );
};

export default FooterNew;
