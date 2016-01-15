var React = require('react-native');
var { AppRegistry, Text, Dimensions,View } = React;
var TableView = require('react-native-tableview');
var Section = TableView.Section;
var Item = TableView.Item;
var Cell = TableView.Cell;
var {Actions, Router, Route, Schema, Animations} = require('react-native-router-flux');
var NavigationBar = require('react-native-navbar');

class NavBar extends React.Component {
    render(){
        return <NavigationBar style={{backgroundColor: '#0db0d9'}}
                              titleColor='white'
                              statusBar={{style: 'light-content', hidden: false}}
                              buttonsColor='white'
                              statusBar='lightContent' {...this.props} />
    }
}

class Launch extends React.Component {
    constructor(props){
        super(props);
        this.state = {editing: false};
    }
    render(){
        var self = this;
        return (
            <View style={{flex:1}}>
                <TableView style={{flex:1}} editing={this.state.editing}
                           onPress={(event) => alert(JSON.stringify(event))} onChange={(event) => alert("CHANGED:"+JSON.stringify(event))}>
                    <Section canMove={true} canEdit={true}>
                        <Item canEdit={false}>Item 1</Item>
                        <Item>Item 2</Item>
                        <Item>Item 3</Item>
                        <Item>Item 4</Item>
                        <Item>Item 5</Item>
                        <Item>Item 6</Item>
                        <Item>Item 7</Item>
                        <Item>Item 8</Item>
                    </Section>
                </TableView>
            </View>
        );
    }
}

module.exports = Launch;