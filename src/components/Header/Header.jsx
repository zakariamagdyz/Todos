import React, { useEffect } from "react";
import {
  HeaderStyled,
  Container,
  HeaderTitle,
  HeaderSubtitle,
  HeaderNav,
  Link,
} from "./headerStyle";
import { useHistory } from "react-router-dom";
import {
  signInWithGoogle,
  auth,
  createUserProfile,
} from "../../Firebase/Firebase";
import { setError, logIn, logOut } from "../../Redux/user/user.action";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../Redux/user/user.selector";
import { fetchTodos } from "../../Redux/todos/todosActions";

////////////////

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUserData);

  useEffect(() => {
    const closeSubscription = auth.onAuthStateChanged(async (Auth) => {
      try {
        if (Auth) {
          const userRef = await createUserProfile(Auth);

          userRef.onSnapshot((snap) => {
            const { displayName, todos, email } = snap.data();
            dispatch(logIn({ id: snap.id, displayName, email }));
            if (todos) {
              dispatch(fetchTodos(todos));
            }
          });
        } else {
          dispatch(logIn(Auth));
        }
      } catch (e) {
        dispatch(setError(e.message));
        console.log(e);
      }
    });

    return () => {
      closeSubscription();
    };
  }, [dispatch]);

  return (
    <div className="header">
      <HeaderStyled>
        <Container>
          <div>
            <HeaderTitle
              onClick={() => {
                // go to home
                history.push("/");
                //refresh the page
                window.location.reload();
              }}
            >
              Todo App
            </HeaderTitle>
            <HeaderSubtitle>A new step to organize your life</HeaderSubtitle>
          </div>
          <HeaderNav>
            <Link to="/">Home </Link>
            <Link to="/daily-targets">Todos</Link>
            <Link
              as="a"
              onClick={() => {
                if (!user) {
                  signInWithGoogle();
                } else {
                  dispatch(logOut());
                  auth.signOut();
                }
              }}
            >
              {!user ? "Sign in" : "Sign out"}
            </Link>
            <Link to="/daily-targets">Contact</Link>
            <Link to="/daily-targets">About me</Link>
          </HeaderNav>
        </Container>
      </HeaderStyled>
    </div>
  );
};

export default Header;
