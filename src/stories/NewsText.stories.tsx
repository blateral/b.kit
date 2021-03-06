import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NewsText from '../components/sections/news/NewsText';
import Button from 'components/buttons/Button';
import ButtonGhost from 'components/buttons/ButtonGhost';

export default {
    title: 'Sections/News/NewsText',
    component: NewsText,
} as Meta;

export const Default: Story = () => (
    <NewsText
        text={`
        Durch den außergewöhnlichen Grundriss bildet das Gebäude zusammen mit der Franziskanerkirche eine Oase der Geborgenheit mit eindrucksvollen Aussichten auf den Münsterturm und in den mittelalterlichen Stadtgraben.Der gepflegte ehemalige Klostergarten mit seinen von Rabatten gesäumten Wegen lockt zu jeder Jahreszeit zu einem kleinen Spaziergang oder zum müßigen Verweilen im Schatten prächtiger Parkbäume. Ein Meer von unterschiedlichsten Duftpflanzen regt bei einem gemütlichen Plausch auf der Terrasse die Sinne an und weckt fröhliche Erinnerungen. Zudem ermöglicht die zentrale Lage auch alten Menschen das mühelose Erreichen der Seepromenade, der Kirchen, des Stadtgartens mit seiner beeindruckenden Kakteensammlung und aller innerstädtischen Einrichtungen.
        <br />
        <br />
        <b>Lage des Alten und Pflegeheims St- Franziskus</b>
        <br />
        <br />
        Durch den außergewöhnlichen Grundriss bildet das Gebäude zusammen mit der Franziskanerkirche eine Oase der Geborgenheit mit eindrucksvollen Aussichten auf den Münsterturm und in den mittelalterlichen Stadtgraben.Der gepflegte ehemalige Klostergarten mit seinen von Rabatten gesäumten Wegen lockt zu jeder Jahreszeit zu einem kleinen Spaziergang oder zum müßigen Verweilen im Schatten prächtiger Parkbäume. Ein Meer von unterschiedlichsten Duftpflanzen regt bei einem gemütlichen Plausch auf der Terrasse die Sinne an und weckt fröhliche Erinnerungen. Zudem ermöglicht die zentrale Lage auch alten Menschen das mühelose Erreichen der Seepromenade, der Kirchen, des Stadtgartens mit seiner beeindruckenden Kakteensammlung und aller innerstädtischen Einrichtungen.
Durch den außergewöhnlichen Grundriss bildet das Gebäude zusammen mit der Franziskanerkirche eine Oase der Geborgenheit mit eindrucksvollen Aussichten auf den Münsterturm und in den mittelalterlichen Stadtgraben.Der gepflegte ehemalige Klostergarten mit seinen von Rabatten gesäumten Wegen lockt zu jeder Jahreszeit zu einem kleinen Spaziergang oder zum müßigen Verweilen im Schatten prächtiger Parkbäume. Ein Meer von unterschiedlichsten Duftpflanzen regt bei einem gemütlichen Plausch auf der Terrasse die Sinne an und weckt fröhliche Erinnerungen. Zudem ermöglicht die zentrale Lage auch alten Menschen das mühelose Erreichen der Seepromenade, der Kirchen, des Stadtgartens mit seiner beeindruckenden Kakteensammlung und aller innerstädtischen Einrichtungen.Durch den außergewöhnlichen Grundriss bildet das Gebäude zusammen mit der Franziskanerkirche eine Oase der Geborgenheit mit eindrucksvollen Aussichten auf den Münsterturm und in den mittelalterlichen Stadtgraben.Der gepflegte ehemalige Klostergarten mit seinen von Rabatten gesäumten Wegen lockt zu jeder Jahreszeit zu einem kleinen Spaziergang oder zum müßigen Verweilen im Schatten prächtiger Parkbäume. Ein Meer von unterschiedlichsten Duftpflanzen regt bei einem gemütlichen Plausch auf der Terrasse die Sinne an und weckt fröhliche Erinnerungen. Zudem ermöglicht die zentrale Lage auch alten Menschen das mühelose Erreichen der Seepromenade, der Kirchen, des Stadtgartens mit seiner beeindruckenden Kakteensammlung und aller innerstädtischen Einrichtungen.
        `}
    />
);

export const WithActions: Story = () => (
    <NewsText
        text={`
        Durch den außergewöhnlichen Grundriss bildet das Gebäude zusammen mit der Franziskanerkirche eine Oase der Geborgenheit mit eindrucksvollen Aussichten auf den Münsterturm und in den mittelalterlichen Stadtgraben.Der gepflegte ehemalige Klostergarten mit seinen von Rabatten gesäumten Wegen lockt zu jeder Jahreszeit zu einem kleinen Spaziergang oder zum müßigen Verweilen im Schatten prächtiger Parkbäume. Ein Meer von unterschiedlichsten Duftpflanzen regt bei einem gemütlichen Plausch auf der Terrasse die Sinne an und weckt fröhliche Erinnerungen. Zudem ermöglicht die zentrale Lage auch alten Menschen das mühelose Erreichen der Seepromenade, der Kirchen, des Stadtgartens mit seiner beeindruckenden Kakteensammlung und aller innerstädtischen Einrichtungen.
        <br />
        <br />
        <b>Lage des Alten und Pflegeheims St- Franziskus</b>
        <br />
        <br />
        Durch den außergewöhnlichen Grundriss bildet das Gebäude zusammen mit der Franziskanerkirche eine Oase der Geborgenheit mit eindrucksvollen Aussichten auf den Münsterturm und in den mittelalterlichen Stadtgraben.Der gepflegte ehemalige Klostergarten mit seinen von Rabatten gesäumten Wegen lockt zu jeder Jahreszeit zu einem kleinen Spaziergang oder zum müßigen Verweilen im Schatten prächtiger Parkbäume. Ein Meer von unterschiedlichsten Duftpflanzen regt bei einem gemütlichen Plausch auf der Terrasse die Sinne an und weckt fröhliche Erinnerungen. Zudem ermöglicht die zentrale Lage auch alten Menschen das mühelose Erreichen der Seepromenade, der Kirchen, des Stadtgartens mit seiner beeindruckenden Kakteensammlung und aller innerstädtischen Einrichtungen.
Durch den außergewöhnlichen Grundriss bildet das Gebäude zusammen mit der Franziskanerkirche eine Oase der Geborgenheit mit eindrucksvollen Aussichten auf den Münsterturm und in den mittelalterlichen Stadtgraben.Der gepflegte ehemalige Klostergarten mit seinen von Rabatten gesäumten Wegen lockt zu jeder Jahreszeit zu einem kleinen Spaziergang oder zum müßigen Verweilen im Schatten prächtiger Parkbäume. Ein Meer von unterschiedlichsten Duftpflanzen regt bei einem gemütlichen Plausch auf der Terrasse die Sinne an und weckt fröhliche Erinnerungen. Zudem ermöglicht die zentrale Lage auch alten Menschen das mühelose Erreichen der Seepromenade, der Kirchen, des Stadtgartens mit seiner beeindruckenden Kakteensammlung und aller innerstädtischen Einrichtungen.Durch den außergewöhnlichen Grundriss bildet das Gebäude zusammen mit der Franziskanerkirche eine Oase der Geborgenheit mit eindrucksvollen Aussichten auf den Münsterturm und in den mittelalterlichen Stadtgraben.Der gepflegte ehemalige Klostergarten mit seinen von Rabatten gesäumten Wegen lockt zu jeder Jahreszeit zu einem kleinen Spaziergang oder zum müßigen Verweilen im Schatten prächtiger Parkbäume. Ein Meer von unterschiedlichsten Duftpflanzen regt bei einem gemütlichen Plausch auf der Terrasse die Sinne an und weckt fröhliche Erinnerungen. Zudem ermöglicht die zentrale Lage auch alten Menschen das mühelose Erreichen der Seepromenade, der Kirchen, des Stadtgartens mit seiner beeindruckenden Kakteensammlung und aller innerstädtischen Einrichtungen.
        `}
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

export const WithBackground: Story = () => (
    <NewsText
        hasBack
        text={`
        Durch den außergewöhnlichen Grundriss bildet das Gebäude zusammen mit der Franziskanerkirche eine Oase der Geborgenheit mit eindrucksvollen Aussichten auf den Münsterturm und in den mittelalterlichen Stadtgraben.Der gepflegte ehemalige Klostergarten mit seinen von Rabatten gesäumten Wegen lockt zu jeder Jahreszeit zu einem kleinen Spaziergang oder zum müßigen Verweilen im Schatten prächtiger Parkbäume. Ein Meer von unterschiedlichsten Duftpflanzen regt bei einem gemütlichen Plausch auf der Terrasse die Sinne an und weckt fröhliche Erinnerungen. Zudem ermöglicht die zentrale Lage auch alten Menschen das mühelose Erreichen der Seepromenade, der Kirchen, des Stadtgartens mit seiner beeindruckenden Kakteensammlung und aller innerstädtischen Einrichtungen.
        <br />
        <br />
        <b>Lage des Alten und Pflegeheims St- Franziskus</b>
        <br />
        <br />
        Durch den außergewöhnlichen Grundriss bildet das Gebäude zusammen mit der Franziskanerkirche eine Oase der Geborgenheit mit eindrucksvollen Aussichten auf den Münsterturm und in den mittelalterlichen Stadtgraben.Der gepflegte ehemalige Klostergarten mit seinen von Rabatten gesäumten Wegen lockt zu jeder Jahreszeit zu einem kleinen Spaziergang oder zum müßigen Verweilen im Schatten prächtiger Parkbäume. Ein Meer von unterschiedlichsten Duftpflanzen regt bei einem gemütlichen Plausch auf der Terrasse die Sinne an und weckt fröhliche Erinnerungen. Zudem ermöglicht die zentrale Lage auch alten Menschen das mühelose Erreichen der Seepromenade, der Kirchen, des Stadtgartens mit seiner beeindruckenden Kakteensammlung und aller innerstädtischen Einrichtungen.
Durch den außergewöhnlichen Grundriss bildet das Gebäude zusammen mit der Franziskanerkirche eine Oase der Geborgenheit mit eindrucksvollen Aussichten auf den Münsterturm und in den mittelalterlichen Stadtgraben.Der gepflegte ehemalige Klostergarten mit seinen von Rabatten gesäumten Wegen lockt zu jeder Jahreszeit zu einem kleinen Spaziergang oder zum müßigen Verweilen im Schatten prächtiger Parkbäume. Ein Meer von unterschiedlichsten Duftpflanzen regt bei einem gemütlichen Plausch auf der Terrasse die Sinne an und weckt fröhliche Erinnerungen. Zudem ermöglicht die zentrale Lage auch alten Menschen das mühelose Erreichen der Seepromenade, der Kirchen, des Stadtgartens mit seiner beeindruckenden Kakteensammlung und aller innerstädtischen Einrichtungen.Durch den außergewöhnlichen Grundriss bildet das Gebäude zusammen mit der Franziskanerkirche eine Oase der Geborgenheit mit eindrucksvollen Aussichten auf den Münsterturm und in den mittelalterlichen Stadtgraben.Der gepflegte ehemalige Klostergarten mit seinen von Rabatten gesäumten Wegen lockt zu jeder Jahreszeit zu einem kleinen Spaziergang oder zum müßigen Verweilen im Schatten prächtiger Parkbäume. Ein Meer von unterschiedlichsten Duftpflanzen regt bei einem gemütlichen Plausch auf der Terrasse die Sinne an und weckt fröhliche Erinnerungen. Zudem ermöglicht die zentrale Lage auch alten Menschen das mühelose Erreichen der Seepromenade, der Kirchen, des Stadtgartens mit seiner beeindruckenden Kakteensammlung und aller innerstädtischen Einrichtungen.
        `}
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

export const IsInverted: Story = () => (
    <NewsText
        text={`
        Durch den außergewöhnlichen Grundriss bildet das Gebäude zusammen mit der Franziskanerkirche eine Oase der Geborgenheit mit eindrucksvollen Aussichten auf den Münsterturm und in den mittelalterlichen Stadtgraben.Der gepflegte ehemalige Klostergarten mit seinen von Rabatten gesäumten Wegen lockt zu jeder Jahreszeit zu einem kleinen Spaziergang oder zum müßigen Verweilen im Schatten prächtiger Parkbäume. Ein Meer von unterschiedlichsten Duftpflanzen regt bei einem gemütlichen Plausch auf der Terrasse die Sinne an und weckt fröhliche Erinnerungen. Zudem ermöglicht die zentrale Lage auch alten Menschen das mühelose Erreichen der Seepromenade, der Kirchen, des Stadtgartens mit seiner beeindruckenden Kakteensammlung und aller innerstädtischen Einrichtungen.
        <br />
        <br />
        <b>Lage des Alten und Pflegeheims St- Franziskus</b>
        <br />
        <br />
        Durch den außergewöhnlichen Grundriss bildet das Gebäude zusammen mit der Franziskanerkirche eine Oase der Geborgenheit mit eindrucksvollen Aussichten auf den Münsterturm und in den mittelalterlichen Stadtgraben.Der gepflegte ehemalige Klostergarten mit seinen von Rabatten gesäumten Wegen lockt zu jeder Jahreszeit zu einem kleinen Spaziergang oder zum müßigen Verweilen im Schatten prächtiger Parkbäume. Ein Meer von unterschiedlichsten Duftpflanzen regt bei einem gemütlichen Plausch auf der Terrasse die Sinne an und weckt fröhliche Erinnerungen. Zudem ermöglicht die zentrale Lage auch alten Menschen das mühelose Erreichen der Seepromenade, der Kirchen, des Stadtgartens mit seiner beeindruckenden Kakteensammlung und aller innerstädtischen Einrichtungen.
Durch den außergewöhnlichen Grundriss bildet das Gebäude zusammen mit der Franziskanerkirche eine Oase der Geborgenheit mit eindrucksvollen Aussichten auf den Münsterturm und in den mittelalterlichen Stadtgraben.Der gepflegte ehemalige Klostergarten mit seinen von Rabatten gesäumten Wegen lockt zu jeder Jahreszeit zu einem kleinen Spaziergang oder zum müßigen Verweilen im Schatten prächtiger Parkbäume. Ein Meer von unterschiedlichsten Duftpflanzen regt bei einem gemütlichen Plausch auf der Terrasse die Sinne an und weckt fröhliche Erinnerungen. Zudem ermöglicht die zentrale Lage auch alten Menschen das mühelose Erreichen der Seepromenade, der Kirchen, des Stadtgartens mit seiner beeindruckenden Kakteensammlung und aller innerstädtischen Einrichtungen.Durch den außergewöhnlichen Grundriss bildet das Gebäude zusammen mit der Franziskanerkirche eine Oase der Geborgenheit mit eindrucksvollen Aussichten auf den Münsterturm und in den mittelalterlichen Stadtgraben.Der gepflegte ehemalige Klostergarten mit seinen von Rabatten gesäumten Wegen lockt zu jeder Jahreszeit zu einem kleinen Spaziergang oder zum müßigen Verweilen im Schatten prächtiger Parkbäume. Ein Meer von unterschiedlichsten Duftpflanzen regt bei einem gemütlichen Plausch auf der Terrasse die Sinne an und weckt fröhliche Erinnerungen. Zudem ermöglicht die zentrale Lage auch alten Menschen das mühelose Erreichen der Seepromenade, der Kirchen, des Stadtgartens mit seiner beeindruckenden Kakteensammlung und aller innerstädtischen Einrichtungen.
        `}
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
        isInverted
    />
);
