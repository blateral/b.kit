import * as React from 'react';

const Nl2br: React.FC<{
    text: string;
}> = ({ text }) => {
    return (
        <React.Fragment>
            {text.split('\n').map((item, key) => {
                return (
                    <React.Fragment key={key}>
                        {item}
                        <br />
                    </React.Fragment>
                );
            })}
        </React.Fragment>
    );
};

export default Nl2br;
