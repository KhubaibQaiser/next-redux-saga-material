import { Button } from "@material-ui/core";
import { authSelector } from "@store/auth";
import { loginAction } from "@store/auth/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const auth = useSelector(authSelector);

  console.log("auth", auth);

  const onLogin = () => {
    dispatch(loginAction({ username: "hello", password: "123123" }));
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>Home Page</h1>
      <Button variant="contained" onClick={onLogin}>
        Login
      </Button>
    </div>
  );
}
