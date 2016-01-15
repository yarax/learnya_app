module.exports = function (state, action) {
    console.log('HERE COMES REDUCER', arguments);
    if (!state) {
        state = {
            categories: [
                {name: 'erwer'},
                {name: 'erwer'},
                {name: 'erwer'},
            ]
        };
    }

    switch (action.type) {
        case 'ADD_NEW_CATEGORY':
            state.categories.push(action.item);
            break;
        case 'REMOVE_CATEGORY':
            state.categories.some(function (item, index) {
                if (item.id === action.item.id) {
                    state.categories.splice(index, 1);
                    return false;
                }
                return true;
            });
    }

    console.log('RAX state', state);

    return state;
};