var React = require('react');
var ListElement = require('./ListElement.js');

var data = [{"id": 1, "name": "first element"},{"id": 2, "name": "second element"},{"id": 1, "name": "third element"}];

var List = React.createClass({
    render: function(){

        var listElements = data.map(function(element) {
            return <ListElement id={element.id} name={element.name}/>;
        });

        return (
            <div>
            <h2>It works!</h2>
            <h3>You have build the list in React with browserify, babel-preset-react, babelify and watchify.</h3>
            <ul>{listElements}</ul>
            </div>
        );
    }
});

module.exports = List;
