import React, { Component } from 'react';
import styles from '../assets/styles/Android';
import { TextField } from 'react-native-material-textfield';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Toast from "../component/Toast";

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    TextInput,
    Dimensions,
    Image,
    ScrollView

} from 'react-native';

import {TextInputLayout} from 'rn-textinputlayout';

import {Actions} from 'react-native-router-flux';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class DaftarGuru extends Component<{}> {

    constructor(props) {
        super(props);
        const { navigation } = this.props;
        const userRegister = navigation.getParam('userRegister','');
        this.state = {
            userEmail       : "",
            userPassword    : "",
            userNama        : "",
            userNip         : "",
            userNomorHp     : "",
            userKonfirmasi  : "",
            secureTextEntry: true,
            userRegisterStatus: userRegister,
            toastMessage: "Congratulation! kindly check your email to activate it",
            toastText: "white",
            toastType: "success"
    }
        this.userEmailRef = this.updateRef.bind(this, 'userEmail');
        this.userPasswordRef = this.updateRef.bind(this, 'userPassword');
        this.userNamaRef = this.updateRef.bind(this, 'userNama');
        this.userNipRef = this.updateRef.bind(this, 'userNip');
        this.userKonfirmasiRef = this.updateRef.bind(this, 'userKonfirmasi');
        this.userNomorHpRef = this.updateRef.bind(this, 'userNomorHp');
    }

static navigationOptions = {
    title: 'Daftar Guru',
    headerStyle: {
      backgroundColor: '#40bfe8',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

    onFocus = () => {
    let { errors = {} } = this.state;

    for (let name in errors) {
      let ref = this[name];
      if (ref && ref.isFocused()) {
        delete errors[name];
      }
    }

    this.setState({ errors });
  }

  onChangePassword = (text) => {
    this.setState({ userPassword:text});
  }
  onChangeNama = (text) => {
    this.setState({ userPassword:text});
  }
  
  onChangeNip = (text) => {
    this.setState({ userPassword:text});
  }
  
  onChangeKonfirmasi = (text) => {
    this.setState({ userPassword:text});
  }
  
  onChangeNomorPonsel = (text) => {
    this.setState({ userPassword:text});
  }
  

  onChangeEmail = (text) => {
    let errors = {};
    if(EMAIL_REGEX.test(text) === false){
      errors['userEmail'] = 'Email invalid';
      this.setState({ userEmail:text})
    }else{
      this.setState({ userEmail:text})
    }
    this.setState({ errors });
  }

  onSubmitEmail = () => {
    this.userPassword.focus();
  }
  onSubmitNama = () => {
    this.userPassword.focus();
  }
  onSubmitNip = () => {
    this.userPassword.focus();
  }
  onSubmitNomorHp = () => {
    this.userPassword.focus();
  }
  
  onSubmitPassword = () => {
    this.userPassword.blur();
  }
  onSubmitKonfirmasiPassword = () => {
    this.userPassword.blur();
  }

  onSubmit = () => {
    let errors = {};

    ['userEmail', 'userPassword','userNama','userNip','userNomorHp','userKonfirmasi']
      .forEach((name) => {
        let value = this[name].value();
        if (!value) {
          errors[name] = 'Tidak boleh Kosong';
        } else if(name == 'userEmail'){
          if(EMAIL_REGEX.test(value) === false){
            errors[name] = 'Email invalid';  
          }
        } else {
          if ('password' === name && value.length < 6) {
            errors[name] = 'Too short';
          }
        }
      });

    this.setState({ errors });
  }

  updateRef = (name, ref) => {
    this[name] = ref;
  }
  
  onAccessoryPress = () => {
    this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }));
  }

  renderPasswordAccessory = () => {
    let { secureTextEntry } = this.state;

    let name = secureTextEntry?
      'visibility':
      'visibility-off';

    return (
      <MaterialIcon
        size={24}
        name={name}
        color={TextField.defaultProps.baseColor}
        onPress={this.onAccessoryPress}
        suppressHighlighting
      />
    );
  }
  renderKonfirmasiAccessory = () => {
    let { secureTextEntry } = this.state;

    let name = secureTextEntry?
      'visibility':
      'visibility-off';

    return (
      <MaterialIcon
        size={24}
        name={name}
        color={TextField.defaultProps.baseColor}
        onPress={this.onAccessoryPress}
        suppressHighlighting
      />
    );
  }

    render() {
    let { errors = {}, secureTextEntry, ...data } = this.state;
        return(
            <View>
                {/* <StatusBar
                        backgroundColor="#f0f0f0"
                        barStyle= "dark-content"
                    />
                <View style = {styles.containerToolbar}>    
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image style={styles.icon} source={require('../assets/images/left_arrow.png')}/>
                    </TouchableOpacity>
                    <View style = {styles.containerText}>
                        <Text style={styles.loginText}>Daftar Guru</Text>
                    </View>
                </View> */}
                <ScrollView style = {styles.containerView}>
                    <View style={styles.inputLayout}>
                        <TextField
                        ref={this.userNamaRef}
                            keyboardType='default'
                            label='Nama'
                            labelFontSize={14}
                            labelPadding={8}
                            onFocus={this.onFocus}
                            style={{fontSize: 16}}
                            value={data.userNama}
                            onSubmitEditing={this.onSubmitNama}
                            enablesReturnKeyAutomatically={true} //berlaku saat ada input
                            returnKeyType='next' //saat enter ke next input
                            onChangeText={this.onChangeNama}
                            error={errors.userNama}
                            />
                        </View>
                        <View style={styles.inputLayout}>
                            <TextField
                            ref={this.userEmailRef}
                            keyboardType='email-address'
                            label='Email'
                            labelFontSize={14}
                            labelPadding={8}
                            onFocus={this.onFocus}
                            style={{fontSize: 16}}
                            value={data.userEmail}
                            onSubmitEditing={this.onSubmitEmail}
                            enablesReturnKeyAutomatically={true} //berlaku saat ada input
                            returnKeyType='next' //saat enter ke next input
                            onChangeText={this.onChangeEmail}
                            error={errors.userEmail}
                            />
                        </View>
                        <View style={styles.inputLayout}>
                            <TextField
                            ref={this.userNipRef}
                            keyboardType='number-pad'
                            label='Nomor Induk Pegawai'
                            labelFontSize={14}
                            labelPadding={8}
                            onFocus={this.onFocus}
                            style={{fontSize: 16}}
                            value={data.userNip}
                            onSubmitEditing={this.onSubmitNip}
                            enablesReturnKeyAutomatically={true} //berlaku saat ada input
                            returnKeyType='next' //saat enter ke next input
                            onChangeText={this.onChangeNip}
                            error={errors.userNip}
                            />
                        </View>
                        <View style={styles.inputLayout}>
                            <TextField
                            ref={this.userNomorHpRef}
                            keyboardType='phone-pad'
                            label='Nomor Ponsel'
                            labelFontSize={14}
                            labelPadding={8}
                            onFocus={this.onFocus}
                            style={{fontSize: 16}}
                            value={data.userNomorHp}
                            onSubmitEditing={this.onSubmitNomorHp}
                            enablesReturnKeyAutomatically={true} //berlaku saat ada input
                            returnKeyType='next' //saat enter ke next input
                            onChangeText={this.onChangeNomorPonsel}
                            error={errors.userNomorHp}
                            />
                        </View>
                        <View style={styles.inputLayout}>
                            <TextField
                            ref={this.userPasswordRef}
                            label='Kata Sandi'
                            labelFontSize={14}
                            labelPadding={8}
                            onFocus={this.onFocus}
                            style={{fontSize: 16}}
                            secureTextEntry={secureTextEntry}
                            value={data.userPassword}
                            onSubmitEditing={this.onSubmitPassword}
                            enablesReturnKeyAutomatically={true}
                            returnKeyType='next'
                            onChangeText={this.onChangePassword}
                            error={errors.userPassword}
                            renderAccessory={this.renderPasswordAccessory}
                            />
                        </View>
                        <View style={styles.inputLayout}>
                            <TextField
                            ref={this.userKonfirmasiRef}
                            label='Konfirmasi Kata Sandi'
                            labelFontSize={14}
                            labelPadding={8}
                            onFocus={this.onFocus}
                            style={{fontSize: 16}}
                            secureTextEntry={secureTextEntry}
                            value={data.userKonfirmasi}
                            onSubmitEditing={this.onSubmitKonfirmasiPassword}
                            enablesReturnKeyAutomatically={true}
                            returnKeyType='next'
                            onChangeText={this.onChangeKonfirmasi}
                            error={errors.userKonfirmasi}
                            renderAccessory={this.renderKonfirmasiAccessory}
                            />
                        </View>
                        <View style={{flex: 1, justifyContent : "center", alignItems : "center"}}>
                            <TouchableOpacity style ={styles.button}>   
                                <Text style = {styles.buttonText}>Daftar</Text>
                            </TouchableOpacity>
                        </View>
                </ScrollView>   
            </View>
        )

    }

}

export default DaftarGuru

