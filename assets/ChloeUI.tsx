import * as React from 'react';
import * as Native from 'react-native';

const ChloeUI = Native.StyleSheet.create({
    // VIEW
    Container: {
        flex:1,
    },
    TopView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    MiddleView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    BottomView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    TutorialView: {
        flex: 1,
        width: 300,
        text: 'center'
    },
    NumpadView: {
        flex:0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F97AFC',
        padding:10,
    },
    NumpadRowView: {
        flex:0,
        flexDirection:'row',
        alignItems: 'center',
    },
    NumpadCollumnView: {
        flex:0,
        flexDirection:'column',
    },
    TextContainer:{
        alignItems: 'center',
    },

    // BUTTONS
    MenuButton: {
        backgroundColor: '#F97AFC', // Purple color
        borderRadius: 10, // Round shape with radius
        paddingVertical: 10,
        paddingHorizontal: 40,
        margin:10,
        width:200,
        alignItems: 'center',
    },
    SubmenuButton: {
        backgroundColor: '#28E0F9', // Purple color
        borderRadius: 10, // Round shape with radius
        paddingVertical: 10,
        paddingHorizontal: 40,
        margin:10,
        width:200,
        alignItems: 'center',
    },
    GoBackButton: {
        width: 200,
        height: 200,
    },
    GoBackButtonSmall: {
        width: 100,
        height: 100,
        marginTop: 20,
    },
    NumpadKey: {
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 15, // Round shape with radius
        paddingVertical: 10,
        paddingHorizontal: 25,
    },

    // TEXT
    WhiteHeading: {
        fontSize: 50,
        color: 'white',
        fontWeight: 'bold',
    },
    WhiteSubheading: {
        fontSize: 40,
        color: 'white',
    },
    TextBlack: {
        color:'black',
        textAlign: 'center',
        fontSize: 20,
    },
    TextWhite: {
        color:'white',
        textAlign: 'center',
        fontSize: 20,
    },
    MenuButtonText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    GameOverText: {
        textAlign: 'center',
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        marginVertical: 10,
    },
    NumpadKeyText: {
        color: 'purple',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    ScoreCounterText: {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 20,
    },

    // IMAGE
    BackgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    GoBackImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    GoBackImageSmall: {
        flex: 1,
        width: 100,
        height: 100,
        alignSelf: 'center',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Doggy: {
        flex:1,
        width:200,
        resizeMode: 'contain'
    }
});

export default ChloeUI;