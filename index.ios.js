'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Text,
  View,
} = React;
var styles = require('./stylesheet');
var MOCKED_MOVIES_DATA = require('./movies');

var AwesomeProject = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
        {MOCKED_MOVIES_DATA[0].title}
        </Text>
      </View>
    );
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
