import React from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Home from './pages/home';
import Buglist from './pages/bug/list'
import WeekTask from './pages/weekTask/list'
import ErrorNum from './pages/errornum/list';
import Report from './pages/report/list';
import Blank from './blank';



export default class ERouter extends React.Component{

    render(){
        return (
            <HashRouter>
                <App>
                    <Switch>
                        {/* <Route path="/login" component={Login}/>
                        <Route path="/common" render={() =>
                            // <Common>
                            //     <Route path="/common/order/detail/:orderId" component={OrderDetail} />
                            // </Common>
                        } */}
                        />
                        <Route path="/" render={()=>
                            <Admin>
                                <Switch>
                                    <Route path='/home' component={Home} />

                                    <Route path="/bug/list" component={Buglist} />
                                    <Route path="/weekTask/list" component={WeekTask} />
                                    <Route path="/weekTask/list" component={WeekTask} />
                                    <Route path="/errorNum/list" component={ErrorNum} />
                                    <Route path="/report/list" component={Report} />
                                    <Route path="/blank/:tag" component={Blank} />


                                </Switch>
                            </Admin>         
                        } />
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}