import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Login.module.css'

import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";


export default function Login() {
  
  const [registration, setRegistration] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const db = [
    {
      registration: '0123456789',
      password: 'adm123'
    }
  ]
  const login = () => {
    if (
      registration === db[0].registration &&
      password === db[0].password
    ) {
      navigate('/');
    } else {
      alert("Matrícula ou senha incorretas!");
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <span>Login</span>
          <div className={styles.acardInput}>
            <input 
            id='registration' 
            type="text"
            value={registration}
            onChange={(e) => setRegistration(e.target.value)} />
            <label htmlFor="registration">
              <FaRegUser />
              Matricula
            </label>
          </div>
          <div className={styles.bcardInput}>
            <input 
            id='password' 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="password">
              <RiLockPasswordLine />
              Senha
            </label>
          </div>
          <div>
            <button className={styles.cardButton} onClick={login} >Entrar</button>
          </div>

        </div>
      </div>

    </>
  )
}
