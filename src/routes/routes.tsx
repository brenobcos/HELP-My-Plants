import { Redirect, Route as ReactRoute, RouteProps } from "react-router-dom";
import { ComponentType } from "react";

interface Props extends RouteProps {
  component: ComponentType;
}

function Route({ component: Component }: Props) {
  return (
    <ReactRoute>
      <Component />
    </ReactRoute>
  );
}

export default Route;
