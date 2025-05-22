import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fee45d',
        paddingHorizontal: 16,
        paddingVertical: 10,
    },

    headerTitle: {
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold'
    },

    headerButton:{
        padding: 6,
        backgroundColor:
        '#05a4ff',
        borderRadius: 6
    },

    headerButtonText:{
        color: '#fff',
        fontWeight: 'bold'
    },

    searchBar:{
        margin: 16
    },

    input: {
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 8,
        padding: 12,
        backgroundColor: '#fff',
    },

    card: {
        flexDirection: 'row',
        margin: 8,
        backgroundColor: '#f9f9f9',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        elevation: 2,
        overflow: 'hidden',
        maxWidth: '550',
        display: 'block',
    },

    list: {
        alignItems: 'anchor-center',
    },

    image: {
        width: 500,
        height: 500,
        borderRadius: 0,
        margin: 0
    },

    info: {
        flex: 1,
        justifyContent:
        'center',
        marginLeft: 8
    },

    name: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    button: {
        marginTop: 8,
        marginRight: 8,
        marginBottom: 8,
        padding: 6,
        borderRadius: 5,
        alignItems: 'center',
    },

    fav: {
        backgroundColor:'#ff5252'
    },

    notFav: {
        backgroundColor: '#05a4ff'
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    },

    back: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.65)'
    },

    background: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center"
    },

    Text:{
        textAlign: 'center',
        marginTop: 40,
        color:'white'
    },

    Text2:{
        textAlign: 'center',
        marginTop: 40
    },

    ActivityIndicator:{
        marginTop: 30
    }
});