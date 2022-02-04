import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Article, { ArticleComponent } from 'components/sections/Article';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

export default {
    title: 'Sections/Article',
    component: ArticleComponent,
    parameters: {
        status: {
            type: 'releaseCandidate',
        },
    },
} as Meta;

export const Default: Story = () => (
    <Article
        title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
        superTitle="Cum sociis natoque"
        text={`
            <b>Make it look like digital not a hill to die on and red flag diversify kpis. Let's unpack that later that ipo will be a game-changer the closest elephant is the most dangerous so best practices overcome key issues to meet key milestones, or slipstream. Looks great, can we try it a different way cc me on that so can we parallel path dunder mifflin, single wringable neck. Encourage & support business growth talk to the slides nor bottleneck mice circle back reinvent the wheel those options are already baked in with this model.</b>
            <br/>
            <br/>
            <br/>
            Re-inventing the wheel 4-blocker time to open the kimono and i am dead inside. Old boys club all hands on deck. Driving the initiative forward we need to socialize the comms with the wider stakeholder community. Digital literacy anti-pattern upsell our competitors are jumping the shark this is a no-brainer, so big data. Make it more corporate please hammer out, and can we take this offline can we parallel path but fast track , what's the status on the deliverables for eow?. Productize let's pressure test this downselect or we need to touch base off-line before we fire the new ux experience for closing these latest prospects is like putting socks on an octopus, yet let me know if you need me to crack any skulls. Can you put it into a banner that is not alarming, but eye catching and not too giant prethink. Root-and-branch review. Globalize on your plate big data that ipo will be a game-changer loop back. Social currency. Let's unpack that later on-brand but completeley fresh for that is a good problem to have yet downselect. We don't want to boil the ocean. I just wanted to give you a heads-up we just need to put these last issues to bed. We want to empower the team with the right tools and guidance to uplevel our craft and build better quantity. The right info at the right time to the right people powerpoint Bunny herding cats after I ran into Helen at a restaurant, I realized she was just office pretty. 
            <br/>
            <br/>
            <b>We need to have a Come to Jesus meeting</b>
            <br/>
            <br/>
            Upstream selling clear blue water but downselect. Big data we need to harvest synergy effects. In an ideal world shelfware granularity. Your work on this project has been really impactful cannibalize, for the right info at the right time to the right people herding cats we need to socialize the comms with the wider stakeholder community but who's responsible for the ask for this request?. Diversify kpis a tentative event rundown is attached for your reference, including other happenings on the day you are most welcome to join us beforehand for a light lunch we would also like to invite you to other activities on the day, including the interim and closing panel discussions on the intersection of businesses and social innovation, and on building a stronger social innovation eco-system respectively core competencies looks great, can we try it a different way, and let's pressure test this game-plan. Cross sabers not the long pole in my tent, for action item fire up your browser, and open door policy, yet radical candor. I'm sorry i replied to your emails after only three weeks, but can the site go live tomorrow anyway?`}
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithSeperateIntro: Story = () => (
    <Article
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        intro="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem praesentium, alias porro necessitatibus accusantium placeat non sequi ea eos repellendus sapiente facilis fugiat, sunt provident officia quam! Porro inventore quidem libero officia quam? Quasi perferendis laudantium saepe perspiciatis labore inventore corrupti cupiditate ullam beatae illo mollitia quis ea nulla dolores illum voluptatibus dicta, quos sint, eligendi commodi. Laborum aliquam quae necessitatibus ducimus ut maxime eos alias possimus cum, magnam, eum ipsa optio accusantium ullam! Provident eum aliquam saepe facere error deserunt quae tenetur illo rem, ratione velit sed. Dolore harum soluta illum beatae quaerat placeat earum eius nihil, odio omnis!"
        text={`<br/><br/>Durch den außergewöhnlichen Grundriss bildet das Gebäude zusammen mit der Franziskanerkirche eine Oase der Geborgenheit mit eindrucksvollen Aussichten auf den Münsterturm und in den mittelalterlichen Stadtgraben.Der gepflegte ehemalige Klostergarten mit seinen von Rabatten gesäumten Wegen lockt zu jeder Jahreszeit zu einem kleinen Spaziergang oder zum müßigen Verweilen im Schatten prächtiger Parkbäume. Ein Meer von unterschiedlichsten Duftpflanzen regt bei einem gemütlichen Plausch auf der Terrasse die Sinne an und weckt fröhliche Erinnerungen. Zudem ermöglicht die zentrale Lage auch alten Menschen das mühelose Erreichen der Seepromenade, der Kirchen, des Stadtgartens mit seiner beeindruckenden Kakteensammlung und aller innerstädtischen Einrichtungen. <br/><br/><b>Lage des Alten und Pflegeheims St- Franziskus</b><br/><br/>Das Alten- und Pflegeheim liegt im doppelten Sinn des Wortes im Herzen der Stadt, was für die Mitbewohner durch Einbindung in das städtische Geschehen erlebbar wird. Stadt- und Kirchenfeste, historische Umzüge und Bräuche tragen zur regelmäßigen Unterhaltung bei und machen gesellschaftliche Zugehörigkeit spürbar. Mittendrin, in einem geschützten und liebevollen Rahmen daheim sein – so kann das Leben im Haus St. Franziskus umschrieben werden. Im Haus St. Franziskus können 46 Mitbewohner zur stationären Pflege, eine weitere Person zur Kurzzeitpflege aufgenommen werden.Sieben Personen, für deren Transport das Haus Sorge trägt, können zur Tagespflege aufgenommen werden.`}
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithAsideText: Story = () => (
    <Article
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text={`<b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem praesentium, alias porro necessitatibus accusantium placeat non sequi ea eos repellendus sapiente facilis fugiat, sunt provident officia quam! Porro inventore quidem libero officia quam? Quasi perferendis laudantium saepe perspiciatis labore inventore corrupti cupiditate ullam beatae illo mollitia quis ea nulla dolores illum voluptatibus dicta, quos sint, eligendi commodi. Laborum aliquam quae necessitatibus ducimus ut maxime eos alias possimus cum, magnam, eum ipsa optio accusantium ullam! Provident eum aliquam saepe facere error deserunt quae tenetur illo rem, ratione velit sed. Dolore harum soluta illum beatae quaerat placeat earum eius nihil, odio omnis!</b><br/><br/><br/>Durch den außergewöhnlichen Grundriss bildet das Gebäude zusammen mit der Franziskanerkirche eine Oase der Geborgenheit mit eindrucksvollen Aussichten auf den Münsterturm und in den mittelalterlichen Stadtgraben.Der gepflegte ehemalige Klostergarten mit seinen von Rabatten gesäumten Wegen lockt zu jeder Jahreszeit zu einem kleinen Spaziergang oder zum müßigen Verweilen im Schatten prächtiger Parkbäume. Ein Meer von unterschiedlichsten Duftpflanzen regt bei einem gemütlichen Plausch auf der Terrasse die Sinne an und weckt fröhliche Erinnerungen. Zudem ermöglicht die zentrale Lage auch alten Menschen das mühelose Erreichen der Seepromenade, der Kirchen, des Stadtgartens mit seiner beeindruckenden Kakteensammlung und aller innerstädtischen Einrichtungen. <br/><br/><b>Lage des Alten und Pflegeheims St- Franziskus</b><br/><br/>Das Alten- und Pflegeheim liegt im doppelten Sinn des Wortes im Herzen der Stadt, was für die Mitbewohner durch Einbindung in das städtische Geschehen erlebbar wird. Stadt- und Kirchenfeste, historische Umzüge und Bräuche tragen zur regelmäßigen Unterhaltung bei und machen gesellschaftliche Zugehörigkeit spürbar. Mittendrin, in einem geschützten und liebevollen Rahmen daheim sein – so kann das Leben im Haus St. Franziskus umschrieben werden. Im Haus St. Franziskus können 46 Mitbewohner zur stationären Pflege, eine weitere Person zur Kurzzeitpflege aufgenommen werden.Sieben Personen, für deren Transport das Haus Sorge trägt, können zur Tagespflege aufgenommen werden.`}
        asideText={`<b>Lorem ipsum dolor sit amet
                bonum arementert</b><br/><br/>Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte<br/><br/><ol><li>Lorem</li><li>Ipsum</li></ol><br/><br/><ol><li>Lorem</li><li>Ipsum</li></ol>`}
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
    />
);

export const WithHalfAsideText: Story = () => (
    <Article
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text={`<b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem praesentium, alias porro necessitatibus accusantium placeat non sequi ea eos repellendus sapiente facilis fugiat, sunt provident officia quam! Porro inventore quidem libero officia quam? Quasi perferendis laudantium saepe perspiciatis labore inventore corrupti cupiditate ullam beatae illo mollitia quis ea nulla dolores illum voluptatibus dicta, quos sint, eligendi commodi. Laborum aliquam quae necessitatibus ducimus ut maxime eos alias possimus cum, magnam, eum ipsa optio accusantium ullam! Provident eum aliquam saepe facere error deserunt quae tenetur illo rem, ratione velit sed. Dolore harum soluta illum beatae quaerat placeat earum eius nihil, odio omnis!</b><br/><br/><br/>Durch den außergewöhnlichen Grundriss bildet das Gebäude zusammen mit der Franziskanerkirche eine Oase der Geborgenheit mit eindrucksvollen Aussichten auf den Münsterturm und in den mittelalterlichen Stadtgraben.Der gepflegte ehemalige Klostergarten mit seinen von Rabatten gesäumten Wegen lockt zu jeder Jahreszeit zu einem kleinen Spaziergang oder zum müßigen Verweilen im Schatten prächtiger Parkbäume. Ein Meer von unterschiedlichsten Duftpflanzen regt bei einem gemütlichen Plausch auf der Terrasse die Sinne an und weckt fröhliche Erinnerungen. Zudem ermöglicht die zentrale Lage auch alten Menschen das mühelose Erreichen der Seepromenade, der Kirchen, des Stadtgartens mit seiner beeindruckenden Kakteensammlung und aller innerstädtischen Einrichtungen. <br/><br/><b>Lage des Alten und Pflegeheims St- Franziskus</b><br/><br/>Das Alten- und Pflegeheim liegt im doppelten Sinn des Wortes im Herzen der Stadt, was für die Mitbewohner durch Einbindung in das städtische Geschehen erlebbar wird. Stadt- und Kirchenfeste, historische Umzüge und Bräuche tragen zur regelmäßigen Unterhaltung bei und machen gesellschaftliche Zugehörigkeit spürbar. Mittendrin, in einem geschützten und liebevollen Rahmen daheim sein – so kann das Leben im Haus St. Franziskus umschrieben werden. Im Haus St. Franziskus können 46 Mitbewohner zur stationären Pflege, eine weitere Person zur Kurzzeitpflege aufgenommen werden.Sieben Personen, für deren Transport das Haus Sorge trägt, können zur Tagespflege aufgenommen werden.`}
        asideText={`<b>Lorem ipsum dolor sit amet
                bonum arementert</b><br/><br/>Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte<br/><br/><ol><li>Lorem</li><li>Ipsum</li></ol><br/><br/><ol><li>Lorem</li><li>Ipsum</li></ol>`}
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
        halfAside
    />
);

export const Inverted: Story = () => (
    <Article
        bgMode="inverted"
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text={`<b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem praesentium, alias porro necessitatibus accusantium placeat non sequi ea eos repellendus sapiente facilis fugiat, sunt provident officia quam! Porro inventore quidem libero officia quam? Quasi perferendis laudantium saepe perspiciatis labore inventore corrupti cupiditate ullam beatae illo mollitia quis ea nulla dolores illum voluptatibus dicta, quos sint, eligendi commodi. Laborum aliquam quae necessitatibus ducimus ut maxime eos alias possimus cum, magnam, eum ipsa optio accusantium ullam! Provident eum aliquam saepe facere error deserunt quae tenetur illo rem, ratione velit sed. Dolore harum soluta illum beatae quaerat placeat earum eius nihil, odio omnis!</b><br/><br/><br/>Durch den außergewöhnlichen Grundriss bildet das Gebäude zusammen mit der Franziskanerkirche eine Oase der Geborgenheit mit eindrucksvollen Aussichten auf den Münsterturm und in den mittelalterlichen Stadtgraben.Der gepflegte ehemalige Klostergarten mit seinen von Rabatten gesäumten Wegen lockt zu jeder Jahreszeit zu einem kleinen Spaziergang oder zum müßigen Verweilen im Schatten prächtiger Parkbäume. Ein Meer von unterschiedlichsten Duftpflanzen regt bei einem gemütlichen Plausch auf der Terrasse die Sinne an und weckt fröhliche Erinnerungen. Zudem ermöglicht die zentrale Lage auch alten Menschen das mühelose Erreichen der Seepromenade, der Kirchen, des Stadtgartens mit seiner beeindruckenden Kakteensammlung und aller innerstädtischen Einrichtungen. <br/><br/><b>Lage des Alten und Pflegeheims St- Franziskus</b><br/><br/>Das Alten- und Pflegeheim liegt im doppelten Sinn des Wortes im Herzen der Stadt, was für die Mitbewohner durch Einbindung in das städtische Geschehen erlebbar wird. Stadt- und Kirchenfeste, historische Umzüge und Bräuche tragen zur regelmäßigen Unterhaltung bei und machen gesellschaftliche Zugehörigkeit spürbar. Mittendrin, in einem geschützten und liebevollen Rahmen daheim sein – so kann das Leben im Haus St. Franziskus umschrieben werden. Im Haus St. Franziskus können 46 Mitbewohner zur stationären Pflege, eine weitere Person zur Kurzzeitpflege aufgenommen werden.Sieben Personen, für deren Transport das Haus Sorge trägt, können zur Tagespflege aufgenommen werden.`}
        asideText={`<b>Lorem ipsum dolor sit amet
                bonum arementert</b><br/><br/>Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte<br/><br/><ol><li>Lorem</li><li>Ipsum</li></ol><br/><br/><ol><li>Lorem</li><li>Ipsum</li></ol>`}
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
        halfAside
    />
);

export const WithFullBg: Story = () => (
    <Article
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text={`<b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem praesentium, alias porro necessitatibus accusantium placeat non sequi ea eos repellendus sapiente facilis fugiat, sunt provident officia quam! Porro inventore quidem libero officia quam? Quasi perferendis laudantium saepe perspiciatis labore inventore corrupti cupiditate ullam beatae illo mollitia quis ea nulla dolores illum voluptatibus dicta, quos sint, eligendi commodi. Laborum aliquam quae necessitatibus ducimus ut maxime eos alias possimus cum, magnam, eum ipsa optio accusantium ullam! Provident eum aliquam saepe facere error deserunt quae tenetur illo rem, ratione velit sed. Dolore harum soluta illum beatae quaerat placeat earum eius nihil, odio omnis!</b><br/><br/><br/>Durch den außergewöhnlichen Grundriss bildet das Gebäude zusammen mit der Franziskanerkirche eine Oase der Geborgenheit mit eindrucksvollen Aussichten auf den Münsterturm und in den mittelalterlichen Stadtgraben.Der gepflegte ehemalige Klostergarten mit seinen von Rabatten gesäumten Wegen lockt zu jeder Jahreszeit zu einem kleinen Spaziergang oder zum müßigen Verweilen im Schatten prächtiger Parkbäume. Ein Meer von unterschiedlichsten Duftpflanzen regt bei einem gemütlichen Plausch auf der Terrasse die Sinne an und weckt fröhliche Erinnerungen. Zudem ermöglicht die zentrale Lage auch alten Menschen das mühelose Erreichen der Seepromenade, der Kirchen, des Stadtgartens mit seiner beeindruckenden Kakteensammlung und aller innerstädtischen Einrichtungen. <br/><br/><b>Lage des Alten und Pflegeheims St- Franziskus</b><br/><br/>Das Alten- und Pflegeheim liegt im doppelten Sinn des Wortes im Herzen der Stadt, was für die Mitbewohner durch Einbindung in das städtische Geschehen erlebbar wird. Stadt- und Kirchenfeste, historische Umzüge und Bräuche tragen zur regelmäßigen Unterhaltung bei und machen gesellschaftliche Zugehörigkeit spürbar. Mittendrin, in einem geschützten und liebevollen Rahmen daheim sein – so kann das Leben im Haus St. Franziskus umschrieben werden. Im Haus St. Franziskus können 46 Mitbewohner zur stationären Pflege, eine weitere Person zur Kurzzeitpflege aufgenommen werden.Sieben Personen, für deren Transport das Haus Sorge trägt, können zur Tagespflege aufgenommen werden.`}
        asideText={`<b>Lorem ipsum dolor sit amet
                bonum arementert</b><br/><br/>Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte<br/><br/><ol><li>Lorem uidem libero officia quam? Quasi perferendis </li><li>Ipsum uidem libero officia quam? Quasi perferendis </li></ol><br/><br/><ol><li>Lorem</li><li>Ipsum</li></ol>`}
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
        halfAside
        bgMode="full"
    />
);

export const SplittedBackground: Story = () => (
    <Article
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text={`<b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem praesentium, alias porro necessitatibus accusantium placeat non sequi ea eos repellendus sapiente facilis fugiat, sunt provident officia quam! Porro inventore quidem libero officia quam? Quasi perferendis laudantium saepe perspiciatis labore inventore corrupti cupiditate ullam beatae illo mollitia quis ea nulla dolores illum voluptatibus dicta, quos sint, eligendi commodi. Laborum aliquam quae necessitatibus ducimus ut maxime eos alias possimus cum, magnam, eum ipsa optio accusantium ullam! Provident eum aliquam saepe facere error deserunt quae tenetur illo rem, ratione velit sed. Dolore harum soluta illum beatae quaerat placeat earum eius nihil, odio omnis!</b><br/><br/><br/>Durch den außergewöhnlichen Grundriss bildet das Gebäude zusammen mit der Franziskanerkirche eine Oase der Geborgenheit mit eindrucksvollen Aussichten auf den Münsterturm und in den mittelalterlichen Stadtgraben.Der gepflegte ehemalige Klostergarten mit seinen von Rabatten gesäumten Wegen lockt zu jeder Jahreszeit zu einem kleinen Spaziergang oder zum müßigen Verweilen im Schatten prächtiger Parkbäume. Ein Meer von unterschiedlichsten Duftpflanzen regt bei einem gemütlichen Plausch auf der Terrasse die Sinne an und weckt fröhliche Erinnerungen. Zudem ermöglicht die zentrale Lage auch alten Menschen das mühelose Erreichen der Seepromenade, der Kirchen, des Stadtgartens mit seiner beeindruckenden Kakteensammlung und aller innerstädtischen Einrichtungen. <br/><br/><b>Lage des Alten und Pflegeheims St- Franziskus</b><br/><br/>Das Alten- und Pflegeheim liegt im doppelten Sinn des Wortes im Herzen der Stadt, was für die Mitbewohner durch Einbindung in das städtische Geschehen erlebbar wird. Stadt- und Kirchenfeste, historische Umzüge und Bräuche tragen zur regelmäßigen Unterhaltung bei und machen gesellschaftliche Zugehörigkeit spürbar. Mittendrin, in einem geschützten und liebevollen Rahmen daheim sein – so kann das Leben im Haus St. Franziskus umschrieben werden. Im Haus St. Franziskus können 46 Mitbewohner zur stationären Pflege, eine weitere Person zur Kurzzeitpflege aufgenommen werden.Sieben Personen, für deren Transport das Haus Sorge trägt, können zur Tagespflege aufgenommen werden.`}
        asideText={`<b>Lorem ipsum dolor sit amet
                bonum arementert</b><br/><br/>Mitten im historischen Altstadtkern von Überlingen liegt das Haus St. Franziskus. Das prachtvolle Gebäude, ursprünglich als Kloster von Franziskanermönchen errichtet, kann auf eine rund 750-jährige Geschichte<br/><br/><ol><li>Lorem uidem libero officia quam? Quasi perferendis </li><li>Ipsum uidem libero officia quam? Quasi perferendis </li></ol><br/><br/><ol><li>Lorem</li><li>Ipsum</li></ol>`}
        primaryAction={(isInverted) => (
            <Button.View isInverted={isInverted}>
                <Button.Label>Primary</Button.Label>
            </Button.View>
        )}
        secondaryAction={(isInverted) => (
            <ButtonGhost.View isInverted={isInverted}>
                <ButtonGhost.Label>Secondary</ButtonGhost.Label>
            </ButtonGhost.View>
        )}
        halfAside
        bgMode="splitted"
    />
);
