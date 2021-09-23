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

```js
export default function App() {
  <AuthProvider options={{ cookieKey: "app-auth-key" }}>
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
          <MainLayout />
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
    component: MainLayout,
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

- RouteFactory

```js
function RouteFactory(route) {
  const { path, privateRoute, routeExtraProps, routes, noNotFoundRender } =
    route;
  let props = routeExtraProps ? { ...routeExtraProps } : {};
  return (
    <AppRoute
      path={path}
      privateRoute={privateRoute && true}
      key={path}
      {...props}
    >
      {route.component && <route.component />}
      <Switch>
        {routes && routes.map((item) => RouteFactory(item))}
        {!noNotFoundRender && (
          <AppRoute path={route.path === "/" ? "/*" : `${route.path}/*`}>
            <NotFound />
          </AppRoute>
        )}
      </Switch>
    </AppRoute>
  );
}
```
