import { StackNavigator } from 'react-navigation';
import Authorized from './Authorized';
import Login from '../components/login';

const Root = StackNavigator({
    Unauthorized: { screen: Login },
    Authorized: { screen: Authorized },
}, {
        headerMode: 'screen',
    });

export default Root;

