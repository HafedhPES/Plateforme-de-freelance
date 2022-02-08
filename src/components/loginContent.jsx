
export default function loginContent () {
    return (
        <>
        
        <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">FreeLanci</h3>
          <span className="loginDesc">
            Invest your time !
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Se connecter</button>
            <span className="loginForgot">Mot de passe oublié?</span>
            <button className="loginRegisterButton">
              Créer un compte
            </button>
          </div>
        </div>
      </div>
    </div>
        
        
        </>
    )
}