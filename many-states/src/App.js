import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Signup } from './components/Signup'
import StateManage from './components/StateManage'
import Home from './pages/Home'

export default function App() {
    return (
        <Router>
            <Route exact path='/' component={Home} />
            <Route exact path='/state' component={StateManage} />
            <Route exact path='/signup' component={Signup} />
        </Router>
        
    )
}
