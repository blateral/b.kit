import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Article, { ArticleComponent } from 'components/sections/Article';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

export default {
    title: 'Sections/Article',
    component: ArticleComponent,
} as Meta;

export const Default: Story = () => (
    <Article
        title="Haus St. Franziskus – lorem ipsum dolor sit amet"
        superTitle="Haus St. Franziskus"
        text={`<b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem praesentium, alias porro necessitatibus accusantium placeat non sequi ea eos repellendus sapiente facilis fugiat, sunt provident officia quam! Porro inventore quidem libero officia quam? Quasi perferendis laudantium saepe perspiciatis labore inventore corrupti cupiditate ullam beatae illo mollitia quis ea nulla dolores illum voluptatibus dicta, quos sint, eligendi commodi. Laborum aliquam quae necessitatibus ducimus ut maxime eos alias possimus cum, magnam, eum ipsa optio accusantium ullam! Provident eum aliquam saepe facere error deserunt quae tenetur illo rem, ratione velit sed. Dolore harum soluta illum beatae quaerat placeat earum eius nihil, odio omnis!</b><br/><br/><br/>Durch den außergewöhnlichen Grundriss bildet das Gebäude zusammen mit der Franziskanerkirche eine Oase der Geborgenheit mit eindrucksvollen Aussichten auf den Münsterturm und in den mittelalterlichen Stadtgraben.Der gepflegte ehemalige Klostergarten mit seinen von Rabatten gesäumten Wegen lockt zu jeder Jahreszeit zu einem kleinen Spaziergang oder zum müßigen Verweilen im Schatten prächtiger Parkbäume. Ein Meer von unterschiedlichsten Duftpflanzen regt bei einem gemütlichen Plausch auf der Terrasse die Sinne an und weckt fröhliche Erinnerungen. Zudem ermöglicht die zentrale Lage auch alten Menschen das mühelose Erreichen der Seepromenade, der Kirchen, des Stadtgartens mit seiner beeindruckenden Kakteensammlung und aller innerstädtischen Einrichtungen. <br/><br/><b>Lage des Alten und Pflegeheims St- Franziskus</b><br/><br/>Das Alten- und Pflegeheim liegt im doppelten Sinn des Wortes im Herzen der Stadt, was für die Mitbewohner durch Einbindung in das städtische Geschehen erlebbar wird. Stadt- und Kirchenfeste, historische Umzüge und Bräuche tragen zur regelmäßigen Unterhaltung bei und machen gesellschaftliche Zugehörigkeit spürbar. Mittendrin, in einem geschützten und liebevollen Rahmen daheim sein – so kann das Leben im Haus St. Franziskus umschrieben werden. Im Haus St. Franziskus können 46 Mitbewohner zur stationären Pflege, eine weitere Person zur Kurzzeitpflege aufgenommen werden.Sieben Personen, für deren Transport das Haus Sorge trägt, können zur Tagespflege aufgenommen werden.`}
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
