'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Text,
  View,
} = React;
var styles = require('./stylesheet');

var AwesomeProject = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello world
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js{'\n'}
          Press Cmd+R to reload
        </Text>
      </View>
    );
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
