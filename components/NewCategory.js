'use strict';

var React = require('react-native');
var {View, TextInput} = React;
var NavigationBar = require('react-native-navbar');
var Button = require('react-native-button');
var Home = require('./Home');
var store = require('../redux/store');
class TabView extends React.Component {

    _handlePress() {
        store.dispatch({
            type: 'ADD_NEW_CATEGORY',
            item: {
                name: this.txt, count: 0, id: Date.now()
            }
        });
        this.props.navigator.pop();
    }

    render(){
        var self = this;
        var rightButtonConfig = {
            title: 'Done',
            handler: () => self.props.navigator.pop()
        };
        var leftButtonConfig = {
            title: 'Cancel',
            handler: () => self.props.navigator.pop()
        };


        return (
            <View>
                <NavigationBar
                    title={{ title: 'Title' }}
                    leftButton={leftButtonConfig}
                    rightButton={rightButtonConfig} />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => self.txt = text}

                />
                <Button onPress={this._handlePress.bind(this)}>Add</Button>
            </View>
        );
    }
}

module.exports = TabView;