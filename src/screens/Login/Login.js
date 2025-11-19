import React from 'react'
import styles from './Login.module.css'

import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";


export default function Login() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <span>Login</span>
          <div className={styles.acardInput}>
            <input id='registration' type="text" />
            <label htmlFor="registration">
              <FaRegUser />
              Matricula
            </label>
          </div>
          <div className={styles.bcardInput}>
            <input id='password' type="password" />
            <label htmlFor="password">
              <RiLockPasswordLine />
              Senha
            </label>
          </div>

        </div>
      </div>

    </>
  )
}
