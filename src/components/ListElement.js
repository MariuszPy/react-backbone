var React = require('react');

var ListElement = React.createClass({
    render: function(){
        return (
            <li>{this.props.name}</li>
        );
    }
});

module.exports = ListElement;
