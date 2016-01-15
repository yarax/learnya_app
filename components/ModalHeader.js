var React = require('react-native');
var { AppRegistry, View,  Text} = React;
var TableView = require('react-native-tableview');
var Button = require('react-native-button');
var Actions = require('react-native-router-flux').Actions;

class List extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Button style={styles.text}>Cancel</Button>
                <Text style={styles.text}>New</Text>
                <Button style={styles.add} onPress={Actions.loginModal}>Ready</Button>
            </View>
        );
    }
}

var styles = {
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
        //alignItems: 'flex-end'
    },
    text: {
        paddingTop: 20,
        height: 40,
        alignSelf: 'center'
    },
    add: {
        height: 40,
        fontSize: 40,
        fontWeight: 'normal',
        marginRight: 10,
        color: 'blue'
    }
};

module.exports = List;