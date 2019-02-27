import React, {Component} from 'react';
import { TextField } from 'react-native-material-textfield';
import {TouchableOpacity, Text, Image, View, StyleSheet} from 'react-native';
import styles from '../assets/styles/Android';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Toast from "../component/Toast";

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Login extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const userRegister = navigation.getParam('userRegister','');
    this.state = {
      userEmail: "",
      userPassword: "",
      secureTextEntry: true,
      userRegisterStatus: userRegister,
      toastMessage: "Congratulation! kindly check your email to activate it",
      toastText: "white",
      toastType: "success"
    }

    this.userEmailRef = this.updateRef.bind(this, 'userEmail');
    this.userPasswordRef = this.updateRef.bind(this, 'userPassword');
  }
      

  static navigationOptions = {
    header: null,
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
  
  onSubmitPassword = () => {
    this.userPassword.blur();
  }

  onSubmit = () => {
    let errors = {};

    ['userEmail', 'userPassword']
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

  render() {
    let { errors = {}, secureTextEntry, ...data } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.toastContainer}>
          <Toast 
            show={this.state.userRegisterStatus}
            message={this.state.toastMessage}
            type={this.state.toastType}
            text={this.state.toastText}
          />
        </View>
        <Image 
          resizeMode = 'contain' 
          style={styles.logoImage} 
          source={require('../assets/images/Logo.png')} />
        <Text style={styles.signInTitle}>Khronos Education System</Text>
        <View style={styles.userInputContainer}>
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
              ref={this.userPasswordRef}
              label='Password'
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
          <TouchableOpacity 
          style={styles.userButton} 
          onPress={this.onSubmit}>
            <Text style={styles.userButtonText}>Masuk</Text>
          </TouchableOpacity>
          <View style={styles.signUp}>
            <Text style={styles.userSignQuestionText}>Belum mempunyai akun?</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignRole', {transition : 'slideFromRight'})}>
              <Text style={styles.userSignTypeText}> Daftar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const customStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Login