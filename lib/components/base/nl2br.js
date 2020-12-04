import * as React from 'react';
var Nl2br = function (props) {
    return (React.createElement(React.Fragment, null, props.text.split('\n').map(function (item, key) {
        return (React.createElement(React.Fragment, { key: key },
            item,
            React.createElement("br", null)));
    })));
};
export default Nl2br;
//# sourceMappingURL=nl2br.js.map