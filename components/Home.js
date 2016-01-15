var React = require('react-native');
var { AppRegistry, View,  Text, TouchableOpacity} = React;
var TableView = require('react-native-tableview');
var Section = TableView.Section;
var NavigationBar = require('react-native-navbar');
var Cell = TableView.Cell;
var Item = TableView.Item;
var NewCategory = require('./NewCategory');
var AddButton = require('./AddButton');
var CategoryList = require('./CategoryList');

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [{name: 'English', count: 324}, {name: 'German', count: 93}]
        };
    }

    _handleAdd() {
        this.props.navigator.push({
            component: NewCategory
        })
    }

    render() {
        return (
            <View>
                <NavigationBar
                    title={{ title: 'My subjects' }}
                    rightButton={
                        <TouchableOpacity onPress={this._handleAdd.bind(this)}>
                            <Text style={styles.add} >+</Text>
                        </TouchableOpacity>
                    } />
                <CategoryList/>
            </View>
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
    },
    cell : {
        display: 'flex',
        height: 52,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontFamily: 'Helvetica',
        fontSize: 16,
        color: '#42557d',
        marginLeft: 10,
        alignSelf: 'center',
        width: 100
    },
    label: {
        marginRight: 5,
        alignSelf: 'center',
        backgroundColor: '#fbdd87',
        height: 20,
        width: 40,
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    inner : {
        alignSelf: 'center',
        fontFamily: 'Helvetica',
        fontSize: 13,
        color: '#42557d'
    }
};

module.exports = List;