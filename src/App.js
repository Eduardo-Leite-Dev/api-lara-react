import akts from './assets/akts.svg'


function App() {
  return (
    <div className="container" > 

      <div className="container-login" >

        <div className="wrap-login">

          <form action="" className="login-form" >

            <span className="login-form-title" >Bem vindo! </span>
            <span className="login-form-title" >
              <img src= {akts} alt="login"/>

              <div className='wrap-input' >
                <input type="email"/>
                <span className='' >

                </span>

              </div>

            </span>

          </form>

        </div>

      </div>

    </div>
  );
}

export default App;
