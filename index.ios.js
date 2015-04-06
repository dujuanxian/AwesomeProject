'use strict';

var React = require('react-native');
var {
    AppRegistry,
    Text,
    View,
    Image
} = React;
var styles = require('./stylesheet');

var AwesomeProject = React.createClass({
    getInitialState: function() {
        return {
            movies: null
        }
    },
    render: function() {
        if (!this.state.movies) {
            return this.renderLoadingView();
        }
        return this.renderMovie(this.state.movies[0]);
    },
    renderMovie: function(movie) {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: movie.posters.thumbnail}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        );
    },
    renderLoadingView: function() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading movies...
                </Text>
            </View>
        );
    },
    componentDidMount: function() {
        var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    movies: responseData.movies
                });
            })
            .done();
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
