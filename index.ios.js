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
    getInitialState: function() {
        return {
            movies: null
        }
    },
    render: function() {
        return (
            <View style={styles.container}>
                <Image source={{uri: this.state.movies.posters.thumbnail}} style={styles.thumbnail}/>
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{this.state.movies.title}</Text>
                    <Text style={styles.year}>{this.state.movies.year}</Text>
                </View>
            </View>
        );
    },
    componentWillMount: function() {
        this.setState({movies: MOCKED_MOVIES_DATA[0]});
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
