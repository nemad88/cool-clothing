import React, {useEffect} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import {auth, createUserProfileDocuemnt} from "./firebase/firebase.utils";
import {GlobalStyle} from "./global.styles";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import HomePage from "./pages/homepage/homepage.component";
import Category from "./pages/category/category.component";
import Checkout from "./pages/checkout/checkout.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";

import {fetchCategoriesStartAsync} from "./redux/shop/shop.actions";
import {setCurrentUser} from "./redux/user/user.actions";
import {selectCurrentUser} from "./redux/user/user.selector";

const App = () => {

    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocuemnt(userAuth);
                userRef.onSnapshot((snapshot) => {

                    dispatch(
                        setCurrentUser({
                            id: snapshot.id,
                            ...snapshot.data(),
                        }))
                });
            } else {
                dispatch(setCurrentUser(userAuth));
            }
        });
        return () => {
            unsubscribeFromAuth();
        }
    }, [dispatch])


    useEffect(() => {
        dispatch(fetchCategoriesStartAsync());
    }, [dispatch])


    return (
        <>
            <GlobalStyle/>
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/categories/:slug" component={Category}/>
                <Route exact path="/checkout" component={Checkout}/>
                <Route
                    path="/signin"
                    render={() =>
                        currentUser ? <Redirect to="/"/> : <SignInSignUp/>
                    }
                />
            </Switch>
            <Footer/>
        </>
    );

}


export default App;
