import {StyleSheet, Dimensions} from 'react-native';

let deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    toastContainer: {
        position: 'absolute', 
        height: 70,
        left:0, 
        top:0, 
        width: '100%', 
        zIndex: 1  
    },
    logoImage: {
        width: deviceWidth*0.3,
        height: deviceWidth*0.3,
    },
    signInTitle: {
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'Aristotelica-Bold',
        color: '#48B7E4',
    },
    signUpRole: {
        fontSize: 25,
        marginTop: 20,
        textAlign: 'center',
        fontFamily: 'Lato-Regular',
        color: '#48B7E4',
    },
    signUpTitle: {
        fontSize: 25,
        marginTop: 20,
        textAlign: 'center',
        fontFamily: 'Lato-Regular',
        color: '#48B7E4',
    },
    userInputContainer: {
        marginTop: 10,
        width: deviceWidth*0.9,
        paddingTop: 15,
        paddingBottom: 0,
        alignItems: 'center',
    },
    userInputSignUpContainer: {
        marginTop: 0,
        width: deviceWidth*0.9,
        paddingTop: 0,
        paddingBottom: 0,
        alignItems: 'center',
    },
    inputLayout: {
        marginTop: 10,
        marginHorizontal: 36,
        width: deviceWidth*0.8,
        // height: 60,
    },
    inputSignUpLayout: {
        marginTop: 0,
        marginHorizontal: 36,
        width: deviceWidth*0.8,
    },
    userButton: {
        backgroundColor: '#48B7E4',
        width: deviceWidth*0.8,
        alignItems: 'center',
        color: 'white',
        borderRadius: 4,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 30
    },
    userButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    signUp: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: deviceWidth*0.7,
        marginTop: 15,
        width: deviceWidth*0.8
    },
    userSignTypeText: {
        color: '#48B7E4',
        fontWeight: 'bold',
        fontSize: 16
    },
    userSignQuestionText: {
        fontSize: 16
    },
    userContainerButton: {
        backgroundColor: '#48B7E4',
        width: deviceWidth*0.8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        borderRadius: 4,
        marginTop: 20,
    },
    userContainerColumn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userContainerButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    genderTextContainer: {
        width: deviceWidth*0.8,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    genderText: {
        marginRight: 15,
        marginTop: 0,
        fontSize: 20,
        fontFamily: 'Lato-Regular',
        color: '#576574'
    },
    genderInput: {
        marginRight: 20,
        fontSize: 18,
        fontFamily: 'Lato-Regular',
    },
    genderRadioContainer: {
        paddingTop: 1
    },
    roleMainContainer: {
        width: deviceWidth,
        marginTop: 40,
    },
    roleContainer: {
        height: 90,
        borderBottomWidth: 1,
        borderBottomColor: '#dcdde1',
        paddingLeft: 30,
        paddingRight: 30,
        flexDirection: 'row',
        backgroundColor: '#f5f6fa'
    },
    rolePicContainer: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    roleContentContainer: {
        flex: 1,
        paddingLeft: 20,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    roleContentText: {
        fontFamily: 'Raleway-SemiBold',
        fontSize: 18
    },
    photoSectionDivider : {
        marginBottom : 24,
    },
    signupPhotoWrap : {
        justifyContent: "center",
        alignItems : "center",
        height : 200,
        width : deviceWidth * 0.8,
    },
    pictureHolder : {
        position : "relative",
        backgroundColor : "#222",
        height : 200,
        width : 200,
        borderRadius : 200,
    },
    pictureHolderImg : {
        position : "relative",
        backgroundColor : "#222",
        height : 200,
        width : 200,
        borderRadius : 200,
        overflow : "hidden"
    },
    pictureHolderCameraIcon : {
        position : "absolute",
        height : 60,
        width : 60,
        bottom : -10,
        right : 0,
        backgroundColor : "#48B7E4",
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 80,
    },
    containerDaftar : {

        backgroundColor:'#40bfe8',
        flexGrow: 1
    },
    containerToolbar:{
        backgroundColor:'#40bfe8',
        alignItems:'flex-start',
        flexDirection:"row"
    },
    containerView: {
        backgroundColor:'#FFFFFF',
        flexGrow: 1,
    },
    containerText: {
        backgroundColor:'#40bfe8',
        flexGrow: 2,
        alignItems: 'flex-start',
        margin:10
    },
    icon:{
        width:30,
        height:30,
        margin:10
    },
    inputbox : { 
        width: 350,
        backgroundColor:'#f0f0f0',
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        color:'#ffffff',
        marginVertical: 10,
        marginEnd: 20,
        marginStart: 20,
        marginTop : 10,
        tintColor: '#ffffff'
    },
    signupTextCont : {
        flexGrow: 1,
        backgroundColor : "#40bfe8",
        alignItems:'flex-end',
        justifyContent :'center',
        paddingVertical:16,
        flexDirection:'row'
    },

    signupText: {

        color:'rgba(255,255,255,0.6)',

        fontSize:16

    },
    button : {
        width:300,
        backgroundColor:'#40bfe8',
        borderRadius: 8,
        marginVertical: 20,
        paddingVertical: 13
    },
    loginText: {
        color: 'white',
        fontSize:20
    },
    buttonText :  {
        fontSize: 16,
        fontWeight: '500',
        color:'#ffffff',
        textAlign:'center'
    },
    signupButton: {

        color:'#ffffff',

        fontSize:16,

        fontWeight:'500'

    },
    textInput: {
        fontSize: 16,
        color : '#000000',
        height: 40,
        paddingBottom:10,

    },
    inputLayoutDaftar: {
        marginTop: 16,
        marginHorizontal: 36
    }

});