
import React, {useState} from 'react'
import {Container, Image} from "semantic-ui-react";
import RegisterForm from '../../components/Auth/RegisterForm/RegisterForm';
import instaclone from "../../assets/png/instaclone.png"
import "./Auth.scss"

function Auth() {

    const [showLogin, setShowLogin] = useState(false)


    return (
        <Container fluid className="auth">
            <Image src={instaclone}/>

            <div className='container-form'>
                {showLogin ? <p>Log in Form</p> : <RegisterForm setShowLogin = {setShowLogin}/>}
            </div>

            <div className='change-form'>
                
                
                {showLogin ? (
                    <>
                    Don't have an account yet?
                    <span onClick={()=> setShowLogin(!showLogin)}>Sign Up</span>
                    </>
                ) : (
                    <>
                    Do you already have an account?
                    <span onClick={()=> setShowLogin(!showLogin)}>Log in</span>
                    </>
                )
            }
                
            </div>
        </Container>
    )
}

export default Auth
