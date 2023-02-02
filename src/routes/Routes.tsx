import { Redirect, Route as ReactRoute, RouteProps } from "react-router-dom";
import { useAuth } from "../providers/Auth";

interface Props extends RouteProps {
  isPrivate?: boolean;
  isPublic?: boolean;
}

export function Route({ isPrivate = false, isPublic = false, ...rest }: Props) {
  const { accessToken } = useAuth();

  return (
    <>
      {isPrivate === !!accessToken ? (
        <ReactRoute {...rest} />
      ) : isPublic ? (
        <ReactRoute {...rest} />
      ) : (
        <Redirect to={isPrivate ? "/" : "/dashboard"} />
      )}
    </>
  );
}
