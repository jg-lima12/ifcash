import styles from './Home.module.css'

import Button from '../../components/Button/Button'

import { FaRegPlusSquare } from "react-icons/fa";



export default function Home() {

  let valueBalance = 20.1

  return (
    <>
      <section className={styles.section}>
        <div className={styles.containerGraphic}>
          <div className={styles.cardGraphic}>
            <div className={styles.buttonGraphic}>
              <Button size='large' version='greenBck'>Gráfico</Button>
              <Button size='large' version='greenBck'>Histótico</Button>
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
            <FaRegPlusSquare className={styles.iconPlus} />
          </div>
        </div>
      </section>
    </>
  )
}

