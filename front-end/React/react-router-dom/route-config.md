# React-Router-config

> React-Router with config

```js
// common imports
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useRouteMatch,
  useParams,
  Redirect,
} from "react-router-dom";
import useAuth, { AuthProvider } from "wing-use-auth";
import {
  NoMatched,
  /*
   * .
   * .
   * .
   * and other component pages
   *
   */
} from "./pages";
```

## Without Configs

- App Component

```jsx
export default function App() {
  const options = { cookieKey: "app-auth-key" };
  return <AuthProvider options={options}>
    <Router>
      <Switch>
        <Route path="/404">
          <NoMatched />
          <Switch>
            <Route path="/404/*">
              <NotFound />
            </Route>
          </Switch>
        </Route>
        <Route path="/auth">
          <AuthPage />
          <Switch>
            <Route path="/auth/*">
              <NotFound />
            </Route>
          </Switch>
        </Route>
        <Route path="/login">
          <LoginPage />
          <Switch>
            <Route path="/login/*">
              <NotFound />
            </Route>
          </Switch>
        </Route>
        <PrivateRoute path="/">
          <MainLayout>
            <Switch>
              <Route path="/system">
                <Switch>
                  <Route path="/system/account">
                    <Account />
                    <Switch>
                      <Route path="/system/account/add">
                        <AccountAdd />
                        <Switch>
                          <Route path="/system/account/add/*">
                            <NotFound />
                          </Route>
                        </Switch>
                      </Route>
                      <Route path="/system/account/:id" exact>
                        <EditPage />
                      </Route>
                      <Route path="/system/account/detail/:id" exact>
                        <DetailPage />
                      </Route>
                      <Route path="/system/account/*">
                        <NotFound />
                      </Route>
                    </Switch>
                  </Route>
                  <Route path="/system/role">
                    <Role />
                    <Switch>
                      <Route path="/system/role/*">
                        <NotFound />
                      </Route>
                    </Switch>
                  </Route>
                  <Route path="/system/*">
                    <NotFound />
                  </Route>
                </Switch>
              </Route>
              <Route path="/device">
                <Device />
                <Switch>
                  <Route path="/device/*">
                    <NotFound />
                  </Route>
                </Switch>
              </Route>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/*">
                <NotFound />
              </Route>
            </Switch>
          <MainLayout/>
        </PrivateRoute>
      </Switch>
    </Router>
  </AuthProvider>;
}
```

## With Configs

- App Component

```js
export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>{routes.map((route) => RouteFactory(route))}</Switch>
      </Router>
    </AuthProvider>
  );
}
```

- routes

```js
const routes = [
  {
    path: "/404",
    component: NoMatched,
  },
  {
    path: "/auth",
    component: AuthPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/",
    wrapper: MainLayout, // wrapper
    privateRoute: true,
    routes: [
      {
        path: "/system",
        routes: [
          {
            path: "/system/account",
            component: Account,
            routes: [
              {
                path: "/system/account/add",
                component: AccountAdd,
              },
              {
                path: "/system/account/:id",
                routeExtraProps: { exact: true },
                component: EditPage,
              },
              {
                path: "/system/account/detail/:id",
                routeExtraProps: { exact: true },
                component: DetailPage,
              },
            ],
          },
          {
            path: "/system/role",
            component: Role,
          },
        ],
      },
      {
        path: "/device",
        component: Device,
      },
      // 注意顺序
      {
        path: "/",
        routeExtraProps: { exact: true }, // react-router 其他属性
        noNotFoundRender: true, // 不需要在此route下绑定404
        component: HomePage,
      },
    ],
  },
];
```

<b>Route fields</b>

|       field        |             required              |      type       |                   remarks                   |
| :----------------: | :-------------------------------: | :-------------: | :-----------------------------------------: |
|       `path`       | <span style="color: red">T</span> |     String      |               同一级的要唯一                |
|    `component`     |                 F                 | React Component | 当前路由下要显示的页面,如果没有则显示空白页 |
|     `wrapper`      |                 F                 | React Component |          当前路由子路由的 wrapper           |
|   `privateRoute`   |                 F                 |     Boolean     | 是否是私有路由(需登录/授权后才能访问的路由) |
| `routeExtraProps`  |                 F                 |     Object      |       react-router-dom 文档中其他属性       |
| `noNotFoundRender` |                 F                 |     Boolean     |     标识该路由不需要定义子集的 404 页面     |
|      `routes`      |                 F                 |      Array      |              该路由下的子路由               |

- RouteFactory

```js
function RouteFactory(route) {
  const { path, privateRoute, routeExtraProps, routes, noNotFoundRender } =
    route;
  let props = routeExtraProps ? { ...routeExtraProps } : {};
  let Wrapper = ({ children }) =>
    route.wrapper ? <route.wrapper>{children}</route.wrapper> : <>{children}</>;
  return (
    <AppRoute
      path={path}
      privateRoute={privateRoute && true}
      key={path}
      {...props}
    >
      {route.component && <route.component />}
      <Wrapper>
        <Switch>
          {routes && routes.map((item) => RouteFactory(item))}
          {!noNotFoundRender && (
            <AppRoute path={route.path === "/" ? "/*" : `${route.path}/*`}>
              <NotFound />
            </AppRoute>
          )}
        </Switch>
      </Wrapper>
    </AppRoute>
  );
}
```
