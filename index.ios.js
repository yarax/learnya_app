var React = require('react-native');
var Home = require('./components/Home');
var ListView = require('./components/ListView');
var { AppRegistry, View,  Text, Navigator} = React;


function renderScene(route, navigator) {
    return <route.component route={route} navigator={navigator} />;
}

// The Router wrapper
var MyApp = React.createClass({
    render: function() {
        var initialRoute = {
            component: ListView
        };

        return (
            <View style={{ flex: 1 }}>
                <Navigator
                    initialRoute={initialRoute}
                    renderScene={renderScene}
                />
            </View>
        );
    }
});

AppRegistry.registerComponent('Learnya', () => MyApp);