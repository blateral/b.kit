import React from 'react';
import { Meta, Story } from '@storybook/react';
import PointOfInterest from 'components/sections/PointOfInterest';

export default {
    title: 'Sections / PointOfInterest',
    component: PointOfInterest,
} as Meta;

export const Default: Story = () => (
    <PointOfInterest
        typeAs="list"
        name="Beispiel POI 1"
        shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas non tempore fugit dolore numquam quidem adipisci cum fugiat a."
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima at nobis eligendi nesciunt neque aliquid, earum, similique repellendus soluta dolorum odio hic eos veritatis possimus magnam, nemo rem id aut ipsum harum molestias architecto quia? Temporibus ut fugit iste, voluptates culpa quam aperiam soluta qui error consectetur quas. Iure cupiditate id similique maiores quam quis nemo adipisci illum est incidunt, culpa laborum tempore aperiam tempora obcaecati veniam ex nulla eum corrupti et eius, dolorem, ipsum porro sapiente? Ratione est voluptas inventore obcaecati, quod deleniti iusto quibusdam molestias dicta autem laborum excepturi velit! Earum illo enim, molestias vel excepturi officiis sunt amet aperiam adipisci tempora dolores ab iste delectus ea ipsum laborum sit maiores repellendus. Voluptas, sed laborum quae voluptatem unde ipsam doloremque ad, tenetur velit aspernatur commodi soluta necessitatibus temporibus numquam. Quos soluta molestias tempora ab libero! Dolorum voluptatum saepe nulla tenetur ab illo optio eveniet minus nihil in quisquam nesciunt, laborum necessitatibus quibusdam quod id aperiam placeat officia velit adipisci asperiores cupiditate expedita. Asperiores debitis ipsum iure, ab accusamus vitae vel optio nulla distinctio architecto cum aliquid at, consequuntur inventore odit nisi error quidem explicabo voluptatibus. Assumenda earum consequuntur voluptate aliquam aut alias eveniet sunt omnis voluptates possimus. Itaque."
        address="Example Address 1"
        street="Example Address 1"
        postalCode="12345"
        city="Example City"
        coordinates={{ lat: 47.763243, long: 9.195936 }}
        mail="example@mail.de"
        phone="+49 123 456789"
        web=""
    />
);

export const AsMap: Story = () => (
    <PointOfInterest
        typeAs="map"
        name="Beispiel POI 1"
        shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas non tempore fugit dolore numquam quidem adipisci cum fugiat a."
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima at nobis eligendi nesciunt neque aliquid, earum, similique repellendus soluta dolorum odio hic eos veritatis possimus magnam, nemo rem id aut ipsum harum molestias architecto quia? Temporibus ut fugit iste, voluptates culpa quam aperiam soluta qui error consectetur quas. Iure cupiditate id similique maiores quam quis nemo adipisci illum est incidunt, culpa laborum tempore aperiam tempora obcaecati veniam ex nulla eum corrupti et eius, dolorem, ipsum porro sapiente? Ratione est voluptas inventore obcaecati, quod deleniti iusto quibusdam molestias dicta autem laborum excepturi velit! Earum illo enim, molestias vel excepturi officiis sunt amet aperiam adipisci tempora dolores ab iste delectus ea ipsum laborum sit maiores repellendus. Voluptas, sed laborum quae voluptatem unde ipsam doloremque ad, tenetur velit aspernatur commodi soluta necessitatibus temporibus numquam. Quos soluta molestias tempora ab libero! Dolorum voluptatum saepe nulla tenetur ab illo optio eveniet minus nihil in quisquam nesciunt, laborum necessitatibus quibusdam quod id aperiam placeat officia velit adipisci asperiores cupiditate expedita. Asperiores debitis ipsum iure, ab accusamus vitae vel optio nulla distinctio architecto cum aliquid at, consequuntur inventore odit nisi error quidem explicabo voluptatibus. Assumenda earum consequuntur voluptate aliquam aut alias eveniet sunt omnis voluptates possimus. Itaque."
        address="Example Address 1"
        street="Example Address 1"
        postalCode="12345"
        city="Example City"
        coordinates={{ lat: 47.763243, long: 9.195936 }}
        mail="example@mail.de"
        phone="+49 123 456789"
        web=""
    />
);
