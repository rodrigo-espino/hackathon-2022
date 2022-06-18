import React from 'react'

export  function Main()  {
  return (
   
            <div className="contenedor__todo">
                <div className="caja__trasera">
                    <div className="caja__trasera-login">
                  
                        <h3>¿Ya tienes una cuenta?</h3>
                        <p>Inicia sesión para entrar en la página</p>
                        
                        <button id="btn__iniciar-sesion">Iniciar Sesión</button>
                    </div>
                    <div className="caja__trasera-register">
                        <h3>¿Aún no tienes una cuenta?</h3>
                        <p>Regístrate para que puedas iniciar sesión</p>
                        <button id="btn__registrarse">Regístrarse</button>
                    </div>
                </div>

                --Formulario de Login y registro--
                
                <div className="contenedor__login-register">
                   
                    --Login--
                    
                    <form action="" className="formulario__login">
                    <img src='logo.png' className="logo"/>
                        <h2>Iniciar Sesión</h2>
                        <input type="text" placeholder="Correo Electronico"/>
                        <input type="password" placeholder="Contraseña"/>
                        <button>Entrar</button>
                    </form>

                    --Register--
                    <form action="" class="formulario__register">
                        <h2>Regístrarse</h2>
                        <input type="text" placeholder="Nombre completo"/>
                        <input type="text" placeholder="Correo Electronico"/>
                        <input type="text" placeholder="Usuario"/>
                        <input type="password" placeholder="Contraseña"/>
                        <button>Regístrarse</button>
                    </form>
                </div>
            </div>

        
  )

  
  
}