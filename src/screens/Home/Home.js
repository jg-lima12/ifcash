import styles from './Home.module.css'

import Button from '../../components/Button/Button'

import { FaRegPlusSquare } from "react-icons/fa";

import { Link } from 'react-router-dom';
import clsx from 'clsx';



export default function Home() {

  let valueBalance = 20.1


  return (
    <>
      <section className={styles.section}>
        <div className={styles.containerGraphic}>
          <div className={styles.cardGraphic}>
            <div className={styles.buttonGraphic}>
              <Button size='large' version='greenBck'>Gráfico</Button>
              <Button size='large' version='greenBck'>Histórico</Button>
            </div>
            <div className="graphic"></div>
          </div>
        </div>
        <div className={styles.containerValue}>
          <div className={styles.cardValue}>
            <div className={styles.number}>
              <span className={styles.span}>Saldo Atual</span>
              <span>R$ {valueBalance}</span>
            </div>
            <Link className='link' to='/register-income'><FaRegPlusSquare className='iconPlus' /></Link>
          </div>
        </div>
      </section>
    </>
  )
}

