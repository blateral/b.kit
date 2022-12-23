import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsText, { NewsTextComponent } from 'components/sections/news/NewsText';

export default {
    title: 'Sections/News/NewsText',
    component: NewsTextComponent,
    parameters: {
        status: {
            type: ['preview', 'qsReady', 'releaseCandidate'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <NewsText
        text={`
             <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
            </p>
            <p>
                <b>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse</b>
            </p>
            <p>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel
                eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
                iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis
                dolore te feugait nulla facilisi.
            </p>
        `}
    />
);

export const WithBackground: Story = () => (
    <NewsText
        bgMode="full"
        text={`
             <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
            </p>
            <p>
                <b>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse</b>
            </p>
            <p>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel
                eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
                iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis
                dolore te feugait nulla facilisi.
            </p>
        `}
    />
);

export const IsInverted: Story = () => (
    <NewsText
        text={`
             <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
            </p>
            <p>
                <b>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse</b>
            </p>
            <p>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel
                eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
                iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis
                dolore te feugait nulla facilisi.
            </p>
        `}
        bgMode="inverted"
    />
);
