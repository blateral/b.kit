import React from 'react';
import { Meta, Story } from '@storybook/react';
import JobArticle, {
    JobArticleComponent,
} from 'components/sections/jobs/JobArticle';
import Button from 'components/buttons/Button';
import * as Icons from 'components/base/icons/Icons';

export default {
    title: 'Sections / Jobs / JobArticle',
    component: JobArticleComponent,
    parameters: {
        status: {
            type: ['preview'],
        },
    },
} as Meta;

export const Default: Story = () => (
    <JobArticle
        jobTitle="Kaufmännischer Mitarbeiter (m/w/d)"
        timeModel="Vollzeit / Teilzeit"
        location="Immenstaaad / Ravensburg / Pfullendorf / Überlingen / Markdorf"
        description={`<b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis ipsum. Egestas purus viverra accumsan in nisl nisi. Justo laoreet sit amet cursus. Rhoncus est pellentesque elit ullamcorper dignissim cras. Scelerisque felis imperdiet proin fermentum leo. Curabitur gravida arcu ac tortor. Pellentesque elit eget gravida cum sociis natoque penatibus. At risus viverra adipiscing at. Facilisis mauris sit amet massa vitae. Fermentum posuere urna nec tincidunt praesent semper. </b><br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis ipsum. Egestas purus viverra accumsan in nisl nisi. Justo laoreet sit amet cursus. Rhoncus est pellentesque elit ullamcorper dignissim cras. Scelerisque felis imperdiet proin fermentum leo. Curabitur gravida arcu ac tortor. Pellentesque elit eget gravida cum sociis natoque penatibus. At risus viverra adipiscing at. Facilisis mauris sit amet massa vitae. Fermentum posuere urna nec tincidunt praesent semper. Diam maecenas sed enim ut sem viverra aliquet. Ultricies leo integer malesuada nunc vel risus. Integer eget aliquet nibh praesent tristique magna. Massa id neque aliquam vestibulum morbi blandit cursus. Faucibus in ornare quam viverra orci sagittis eu. Id nibh tortor id aliquet. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.`}
        organization={{
            name: 'b.lateral GmbH & Co. KG',
            address: {
                streetAddress: 'Lenzensteig 3',
                addressLocality: 'Sipplingen',
                postalCode: '78354',
                addressCountry: 'Germany',
            },
            email: 'hello@blateral.com',
            telephone: '+49 7551 831284',
            url: 'https://www.blateral.com',
            logo: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/092011/blateral_logo_rgb_web.png?itok=Uu7RzGHG',
        }}
    />
);

export const WithActions: Story = () => (
    <JobArticle
        jobTitle="Kaufmännischer Mitarbeiter (m/w/d)"
        timeModel="Vollzeit / Teilzeit"
        location="Immenstaaad / Ravensburg / Pfullendorf / Überlingen / Markdorf"
        description={`<b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis ipsum. Egestas purus viverra accumsan in nisl nisi. Justo laoreet sit amet cursus. Rhoncus est pellentesque elit ullamcorper dignissim cras. Scelerisque felis imperdiet proin fermentum leo. Curabitur gravida arcu ac tortor. Pellentesque elit eget gravida cum sociis natoque penatibus. At risus viverra adipiscing at. Facilisis mauris sit amet massa vitae. Fermentum posuere urna nec tincidunt praesent semper. </b><br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis ipsum. Egestas purus viverra accumsan in nisl nisi. Justo laoreet sit amet cursus. Rhoncus est pellentesque elit ullamcorper dignissim cras. Scelerisque felis imperdiet proin fermentum leo. Curabitur gravida arcu ac tortor. Pellentesque elit eget gravida cum sociis natoque penatibus. At risus viverra adipiscing at. Facilisis mauris sit amet massa vitae. Fermentum posuere urna nec tincidunt praesent semper. Diam maecenas sed enim ut sem viverra aliquet. Ultricies leo integer malesuada nunc vel risus. Integer eget aliquet nibh praesent tristique magna. Massa id neque aliquam vestibulum morbi blandit cursus. Faucibus in ornare quam viverra orci sagittis eu. Id nibh tortor id aliquet. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.`}
        organization={{
            name: 'b.lateral GmbH & Co. KG',
            address: {
                streetAddress: 'Lenzensteig 3',
                addressLocality: 'Sipplingen',
                postalCode: '78354',
                addressCountry: 'Germany',
            },
            email: 'hello@blateral.com',
            telephone: '+49 7551 831284',
            url: 'https://www.blateral.com',
            logo: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/092011/blateral_logo_rgb_web.png?itok=Uu7RzGHG',
        }}
        primaryAction={() => (
            <Button.View>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
    />
);

export const WithBackground: Story = () => (
    <JobArticle
        bgMode="full"
        jobTitle="Kaufmännischer Mitarbeiter (m/w/d)"
        timeModel="Vollzeit / Teilzeit"
        location="Immenstaaad / Ravensburg / Pfullendorf / Überlingen / Markdorf"
        description={`<b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis ipsum. Egestas purus viverra accumsan in nisl nisi. Justo laoreet sit amet cursus. Rhoncus est pellentesque elit ullamcorper dignissim cras. Scelerisque felis imperdiet proin fermentum leo. Curabitur gravida arcu ac tortor. Pellentesque elit eget gravida cum sociis natoque penatibus. At risus viverra adipiscing at. Facilisis mauris sit amet massa vitae. Fermentum posuere urna nec tincidunt praesent semper. </b><br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis ipsum. Egestas purus viverra accumsan in nisl nisi. Justo laoreet sit amet cursus. Rhoncus est pellentesque elit ullamcorper dignissim cras. Scelerisque felis imperdiet proin fermentum leo. Curabitur gravida arcu ac tortor. Pellentesque elit eget gravida cum sociis natoque penatibus. At risus viverra adipiscing at. Facilisis mauris sit amet massa vitae. Fermentum posuere urna nec tincidunt praesent semper. Diam maecenas sed enim ut sem viverra aliquet. Ultricies leo integer malesuada nunc vel risus. Integer eget aliquet nibh praesent tristique magna. Massa id neque aliquam vestibulum morbi blandit cursus. Faucibus in ornare quam viverra orci sagittis eu. Id nibh tortor id aliquet. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.`}
        organization={{
            name: 'b.lateral GmbH & Co. KG',
            address: {
                streetAddress: 'Lenzensteig 3',
                addressLocality: 'Sipplingen',
                postalCode: '78354',
                addressCountry: 'Germany',
            },
            email: 'hello@blateral.com',
            telephone: '+49 7551 831284',
            url: 'https://www.blateral.com',
            logo: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/092011/blateral_logo_rgb_web.png?itok=Uu7RzGHG',
        }}
        primaryAction={() => (
            <Button.View>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
    />
);

export const Inverted: Story = () => (
    <JobArticle
        bgMode="inverted"
        jobTitle="Kaufmännischer Mitarbeiter (m/w/d)"
        timeModel="Vollzeit / Teilzeit"
        location="Immenstaaad / Ravensburg / Pfullendorf / Überlingen / Markdorf"
        description={`<b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis ipsum. Egestas purus viverra accumsan in nisl nisi. Justo laoreet sit amet cursus. Rhoncus est pellentesque elit ullamcorper dignissim cras. Scelerisque felis imperdiet proin fermentum leo. Curabitur gravida arcu ac tortor. Pellentesque elit eget gravida cum sociis natoque penatibus. At risus viverra adipiscing at. Facilisis mauris sit amet massa vitae. Fermentum posuere urna nec tincidunt praesent semper. </b><br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis ipsum. Egestas purus viverra accumsan in nisl nisi. Justo laoreet sit amet cursus. Rhoncus est pellentesque elit ullamcorper dignissim cras. Scelerisque felis imperdiet proin fermentum leo. Curabitur gravida arcu ac tortor. Pellentesque elit eget gravida cum sociis natoque penatibus. At risus viverra adipiscing at. Facilisis mauris sit amet massa vitae. Fermentum posuere urna nec tincidunt praesent semper. Diam maecenas sed enim ut sem viverra aliquet. Ultricies leo integer malesuada nunc vel risus. Integer eget aliquet nibh praesent tristique magna. Massa id neque aliquam vestibulum morbi blandit cursus. Faucibus in ornare quam viverra orci sagittis eu. Id nibh tortor id aliquet. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.`}
        organization={{
            name: 'b.lateral GmbH & Co. KG',
            address: {
                streetAddress: 'Lenzensteig 3',
                addressLocality: 'Sipplingen',
                postalCode: '78354',
                addressCountry: 'Germany',
            },
            email: 'hello@blateral.com',
            telephone: '+49 7551 831284',
            url: 'https://www.blateral.com',
            logo: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/092011/blateral_logo_rgb_web.png?itok=Uu7RzGHG',
        }}
        primaryAction={() => (
            <Button.View>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
    />
);

export const CustomIcon: Story = () => (
    <JobArticle
        jobTitle="Kaufmännischer Mitarbeiter (m/w/d)"
        timeModel="Vollzeit / Teilzeit"
        location="Immenstaaad / Ravensburg / Pfullendorf / Überlingen / Markdorf"
        description={`<b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis ipsum. Egestas purus viverra accumsan in nisl nisi. Justo laoreet sit amet cursus. Rhoncus est pellentesque elit ullamcorper dignissim cras. Scelerisque felis imperdiet proin fermentum leo. Curabitur gravida arcu ac tortor. Pellentesque elit eget gravida cum sociis natoque penatibus. At risus viverra adipiscing at. Facilisis mauris sit amet massa vitae. Fermentum posuere urna nec tincidunt praesent semper. </b><br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis ipsum. Egestas purus viverra accumsan in nisl nisi. Justo laoreet sit amet cursus. Rhoncus est pellentesque elit ullamcorper dignissim cras. Scelerisque felis imperdiet proin fermentum leo. Curabitur gravida arcu ac tortor. Pellentesque elit eget gravida cum sociis natoque penatibus. At risus viverra adipiscing at. Facilisis mauris sit amet massa vitae. Fermentum posuere urna nec tincidunt praesent semper. Diam maecenas sed enim ut sem viverra aliquet. Ultricies leo integer malesuada nunc vel risus. Integer eget aliquet nibh praesent tristique magna. Massa id neque aliquam vestibulum morbi blandit cursus. Faucibus in ornare quam viverra orci sagittis eu. Id nibh tortor id aliquet. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.`}
        organization={{
            name: 'b.lateral GmbH & Co. KG',
            address: {
                streetAddress: 'Lenzensteig 3',
                addressLocality: 'Sipplingen',
                postalCode: '78354',
                addressCountry: 'Germany',
            },
            email: 'hello@blateral.com',
            telephone: '+49 7551 831284',
            url: 'https://www.blateral.com',
            logo: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/092011/blateral_logo_rgb_web.png?itok=Uu7RzGHG',
        }}
        primaryAction={() => (
            <Button.View>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        modelIcon={() => <Icons.CalendarToday />}
        locationIcon={() => <Icons.FlyTo />}
    />
);
