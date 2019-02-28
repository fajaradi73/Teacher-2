import { createStackNavigator, createAppContainer, CardStackStyleInterpolator } from "react-navigation";
import { fromLeft, fromRight } from 'react-navigation-transitions';
import Login from './screen/Login.js';
// import SignUp from './screen/SignUp.js';
// import SignUp2 from './screen/SignUp2.js';
// import SignUpChoosePicture from './screen/SignUpChoosePicture.js'
// import SignUp3 from './screen/SignUp3.js';
// import SignRole from './screen/SignRole.js';
import DaftarGuru from './screen/DaftarGuru.js';
import MenuUtama from './screen/MenuUtama.js'

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    // SignRole: SignRole,
    // SignUp: SignUp,
    // SignUp2: SignUp2,
    // SignUpChoosePicture : SignUpChoosePicture,
    // SignUp3: SignUp3,
    DaftarGuru: DaftarGuru,
    MenuUtama: MenuUtama,
  },
  {
    initialRouteName: "Login",
    transitionConfig: () => fromRight(),
  },
);
export default createAppContainer(AppNavigator);