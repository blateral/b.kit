import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Feature from '../src/components/blocks/Feature';
import Button from '../src/components/buttons/Button';

storiesOf('Blocks / Feature', module).add('default', () => {
    return (
        <Feature
            image={{
                small: 'https://unsplash.it/640/480?image=700',
                medium: 'https://unsplash.it/832/832?image=700',
                large: 'https://unsplash.it/1440/1440?image=700',
                xlarge: 'https://unsplash.it/1690/1680?image=700',
            }}
            title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
            description="Name/ Place/Position/ Telefon/Date"
            intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
            primaryAction={(isInverted) => (
                <Button.View isInverted={isInverted}>
                    <Button.Label>Primary</Button.Label>
                </Button.View>
            )}
            secondaryAction={(isInverted) => (
                <Button.View type="ghost" isInverted={isInverted}>
                    <Button.Label>Secondary</Button.Label>
                </Button.View>
            )}
        />
    );
});
