import React from 'react';
import { Meta, Story } from '@storybook/react';
import JobArticle from 'components/sections/JobArticle';
import Button from 'components/buttons/Button';

export default {
    title: 'Sections / JobArticle',
    component: JobArticle,
} as Meta;

export const Default: Story = () => (
    <JobArticle
        jobTitle="Kaufmännischer Mitarbeiter (m/w/d)"
        timeModel="Vollzeit / Teilzeit"
        location="Immenstaaad / Ravensburg / Pfullendorf / Überlingen / Markdorf"
        jobDesc={`<b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis ipsum. Egestas purus viverra accumsan in nisl nisi. Justo laoreet sit amet cursus. Rhoncus est pellentesque elit ullamcorper dignissim cras. Scelerisque felis imperdiet proin fermentum leo. Curabitur gravida arcu ac tortor. Pellentesque elit eget gravida cum sociis natoque penatibus. At risus viverra adipiscing at. Facilisis mauris sit amet massa vitae. Fermentum posuere urna nec tincidunt praesent semper. </b><br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis ipsum. Egestas purus viverra accumsan in nisl nisi. Justo laoreet sit amet cursus. Rhoncus est pellentesque elit ullamcorper dignissim cras. Scelerisque felis imperdiet proin fermentum leo. Curabitur gravida arcu ac tortor. Pellentesque elit eget gravida cum sociis natoque penatibus. At risus viverra adipiscing at. Facilisis mauris sit amet massa vitae. Fermentum posuere urna nec tincidunt praesent semper. Diam maecenas sed enim ut sem viverra aliquet. Ultricies leo integer malesuada nunc vel risus. Integer eget aliquet nibh praesent tristique magna. Massa id neque aliquam vestibulum morbi blandit cursus. Faucibus in ornare quam viverra orci sagittis eu. Id nibh tortor id aliquet. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.`}
        primaryAction={() => (
            <Button.View>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
    />
);
