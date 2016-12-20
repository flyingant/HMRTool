import React from 'react';
require('./dist/style.css');

export default React.createClass({
    render: function () {
        return <div dangerouslySetInnerHTML={{__html: require('./dist/index.html')}}></div>;
    }
});