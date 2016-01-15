var React = require('react-native');
const {
    Text,
    TouchableOpacity,
    } = React;

class List extends React.Component {

    render() {
        return (
            <TouchableOpacity onPress={this._handlePress}>
                <Text style={styles.add} >+</Text>
            </TouchableOpacity>
        );
    }
}

var styles = {
    add: {
        fontSize: 40,
        fontWeight: 'normal',
        marginRight: 10,
        marginTop: -14,
        color: 'blue'
    }
};

module.exports = List;