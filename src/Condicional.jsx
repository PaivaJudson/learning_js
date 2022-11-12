import { useState } from "react";

export default function Condicional(){
    
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e){
        e.preventDefault();
        console.log("Enviando E-mail!");
        setUserEmail(email);
        console.log(userEmail);
    }

    function limparEmail(){
        setUserEmail('');
    }

    return(
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type="email" placeholder="Digite o seu e-mail ... " onChange={(e)=>setEmail(e.target.value)} />
                <button type="submit" onClick={enviarEmail}>Enviar Email</button>
            </form>
            {userEmail && (
                <div>
                   <p>O e-mail do usuário é: {userEmail}</p>
                   <button onClick={limparEmail}>Limpar E-mail</button>
                </div>
            )}
        </div>
    );
}