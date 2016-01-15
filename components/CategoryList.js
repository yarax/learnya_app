var React = require('react-native');
var { AppRegistry, View,  Text, TouchableOpacity} = React;
var TableView = require('react-native-tableview');
var Section = TableView.Section;
var Cell = TableView.Cell;
var Item = TableView.Item;
var store = require('../redux/store');

class TableList extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        var body = store.getState().categories.map(function (item) {
            return <Cell value="" style={styles.cell}>
             <Text style={styles.text}>{item.name}</Text>
             <Cell style={styles.label}><Text style={styles.inner}>{item.count}</Text></Cell>
             </Cell>
        });

        return (
            <TableView style={{flex:1}}
                       onPress={(event) => alert(JSON.stringify(event))} onChange={(event) => alert("CHANGED:"+JSON.stringify(event))}>
                <Section canMove={true} canEdit={true}>
                    <Cell value="" style={styles.cell}>
                        <Text style={styles.text}>3453</Text>
                        <Cell style={styles.label}><Text style={styles.inner}>435345</Text></Cell>
                    </Cell>
                </Section>
            </TableView>
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

module.exports = TableList;