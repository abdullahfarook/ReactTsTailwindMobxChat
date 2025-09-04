import {observer} from "mobx-react";
import {Component} from "react";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/routes";
import {provider} from "react-ioc";
import {ApiSrv} from "./services/ApiSrv";
import {AuthStore} from "./stores/AuthStore";
import {NavigationSrv as NavSrv} from "./services/NavigationSrv";
import {ChatStore} from "./stores/ChatStore";
import {AppStore} from "./stores/AppStore";
import {Session} from "./stores/Session";
import {TokenSrv} from "./services/TokenSrv";
import {ChatHub} from "./hubs/ChatHub";

const stores = [
    AppStore,
    AuthStore,
    ChatStore,
    Session
]
const services = [
    ApiSrv,
    NavSrv,
    TokenSrv,
    ChatHub
]
@observer
@provider(
    ...stores,
    ...services
)
export default class App extends Component {
    render() {
        return (
            <RouterProvider router={router}>
            </RouterProvider>
        );
    }
}
