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
                <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail}/>
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        );
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
