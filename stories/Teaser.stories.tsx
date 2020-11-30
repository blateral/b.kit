import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Teaser from 'components/sections/Teaser';
// import Button from 'components/buttons/Button';
// import ArrowRight from 'components/base/icons/ArrowRight';

// Bilgrößen: Breiten wie angegeben, Höhen in Prismic variabel wählbar
storiesOf('Sections / Teaser', module)
    .add('with content', () => (
        <Teaser
            superTitle={'Lorem Ipsum Dolor'}
            title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
            image={{
                small: 'https://unsplash.it/587/350',
                medium: 'https://unsplash.it/852/508',
                large: 'https://unsplash.it/1200/911',
                xlarge: 'https://unsplash.it/1400/1063',
            }}
            intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><ul><li>Lorem Ipsum</li><li>Lorem Ipsum</li><li>Lorem Ipsum</li></ul>"
        />
    ))
    .add('with image description', () => (
        <Teaser
            superTitle={'Lorem Ipsum Dolor'}
            title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
            image={{
                small: 'https://unsplash.it/587/350',
                medium: 'https://unsplash.it/852/508',
                large: 'https://unsplash.it/1200/911',
                xlarge: 'https://unsplash.it/1400/1063',
                description:
                    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
            }}
            intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><ul><li>Lorem Ipsum</li><li>Lorem Ipsum</li><li>Lorem Ipsum</li></ul>"
        />
    ));
// .add('with action', () => (
//     <Teaser
//         superTitle={'Lorem Ipsum Dolor'}
//         title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
//         image={{
//             small: 'https://unsplash.it/587/350',
//             medium: 'https://unsplash.it/852/508',
//             large: 'https://unsplash.it/1200/911',
//             xlarge: 'https://unsplash.it/1400/1063',
//             description:
//                 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
//         }}
//         intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
//         text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><ul><li>Lorem Ipsum</li><li>Lorem Ipsum</li><li>Lorem Ipsum</li></ul>"
//         action={
//             <>
//                 <Button.View>
//                     <Button.Label>Zur ärztlichen Versorgung</Button.Label>
//                     <Button.Icon>
//                         <ArrowRight />
//                     </Button.Icon>
//                 </Button.View>
//                 <Button.View type="ghost">
//                     <Button.Label>mehr lesen</Button.Label>
//                 </Button.View>
//             </>
//         }
//     />
// ))
// .add('with background', () => (
//     <Teaser
//         hasBack
//         superTitle={'Lorem Ipsum Dolor'}
//         title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
//         image={{
//             small: 'https://unsplash.it/587/350',
//             medium: 'https://unsplash.it/852/508',
//             large: 'https://unsplash.it/1200/911',
//             xlarge: 'https://unsplash.it/1400/1063',
//             description:
//                 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
//         }}
//         intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
//         text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><ul><li>Lorem Ipsum</li><li>Lorem Ipsum</li><li>Lorem Ipsum</li></ul>"
//         action={
//             <>
//                 <Button.View>
//                     <Button.Label>Zur ärztlichen Versorgung</Button.Label>
//                     <Button.Icon>
//                         <ArrowRight />
//                     </Button.Icon>
//                 </Button.View>
//                 <Button.View type="ghost">
//                     <Button.Label>mehr lesen</Button.Label>
//                 </Button.View>
//             </>
//         }
//     />
// ))
// .add('with decorator', () => (
//     <Teaser
//         hasBack
//         hasDecorator
//         superTitle={'Lorem Ipsum Dolor'}
//         title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
//         image={{
//             small: 'https://unsplash.it/587/350',
//             medium: 'https://unsplash.it/852/508',
//             large: 'https://unsplash.it/1200/911',
//             xlarge: 'https://unsplash.it/1400/1063',
//             description:
//                 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
//         }}
//         intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
//         text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><ul><li>Lorem Ipsum</li><li>Lorem Ipsum</li><li>Lorem Ipsum</li></ul>"
//         action={
//             <>
//                 <Button.View>
//                     <Button.Label>Zur ärztlichen Versorgung</Button.Label>
//                     <Button.Icon>
//                         <ArrowRight />
//                     </Button.Icon>
//                 </Button.View>
//                 <Button.View type="ghost">
//                     <Button.Label>mehr lesen</Button.Label>
//                 </Button.View>
//             </>
//         }
//     />
// ))
// .add('mirrored', () => (
//     <Teaser
//         hasBack
//         hasDecorator
//         isMirrored
//         superTitle={'Lorem Ipsum Dolor'}
//         title={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'}
//         image={{
//             small: 'https://unsplash.it/587/350',
//             medium: 'https://unsplash.it/852/508',
//             large: 'https://unsplash.it/1200/911',
//             xlarge: 'https://unsplash.it/1400/1063',
//             description:
//                 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
//         }}
//         intro="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
//         text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br /><ul><li>Lorem Ipsum</li><li>Lorem Ipsum</li><li>Lorem Ipsum</li></ul>"
//         action={
//             <>
//                 <Button.View>
//                     <Button.Label>Zur ärztlichen Versorgung</Button.Label>
//                     <Button.Icon>
//                         <ArrowRight />
//                     </Button.Icon>
//                 </Button.View>
//                 <Button.View type="ghost">
//                     <Button.Label>mehr lesen</Button.Label>
//                 </Button.View>
//             </>
//         }
//     />
// ));
