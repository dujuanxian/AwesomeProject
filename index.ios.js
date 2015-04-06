'use strict';

var React = require('react-native');
var {
    AppRegistry,
    Text,
    View,
    Image
} = React;
var styles = require('./stylesheet');
var MOCKED_MOVIES_DATA = require('./movies');

var AwesomeProject = React.createClass({
    render: function() {
        var movie = MOCKED_MOVIES_DATA[0];
        return (
            <View style={styles.container}>
                <Text>{movie.title}</Text>
                <Text>{movie.year}</Text>
                <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail}/>
            </View>
        );
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
