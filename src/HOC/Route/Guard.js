import { Redirect, Route } from "react-router";

export const PrivateRoute = (props) => {
  const { path, component: Routecomp, exact, redirectPath } = props;
  return (
    <div>
      <Route
        path={path}
        exact={exact}
        render={(routeProps) => {
          if (!localStorage.getItem("accessToken")) {
            return <Redirect to={redirectPath} />;
          }
          return <Routecomp {...routeProps} />;
        }}
      ></Route>
    </div>
  );
};

export const AuthRoute = (props) => {
  const { path, component: Routecomp, exact, redirectPath } = props;
  return (
    <div>
      <Route
        path={path}
        exact={exact}
        render={(routeProps) => {
          if (localStorage.getItem("accessToken")) {
            return <Redirect to={redirectPath} />;
          }
          return <Routecomp {...routeProps} />;
        }}
      ></Route>
    </div>
  );
};
