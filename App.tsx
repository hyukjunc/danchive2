/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import SignIn from './src/screens/signin.jsx';
import SignUp from './src/screens/signup.jsx'; 
import MainPage from './src/screens/Mainpage.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('/signin'); 

  const navigate = (path) => {
    setCurrentPage(path);
  };

  const renderPage = () => {
    if (currentPage === '/signin') {
      return <SignIn navigate={navigate} />; 
    } 
    else if (currentPage === '/signup') {
      return <SignUp navigate={navigate} />; 
    }
    else if (currentPage === '/main') {
      return <MainPage navigate={navigate} />;
    }
    return <div>Page Not Found: {currentPage}</div>;
  };

  return (
    <div className="App">
        {renderPage()}
    </div>
  );
}

export default App;
