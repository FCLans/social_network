import styles from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>
        <div className={styles.dialog}>Иван</div>
        <div className={styles.dialog + ' ' + styles.active}>Андрей</div>
        <div className={styles.dialog}>Павел</div>
        <div className={styles.dialog}>Олег</div>
      </div>
      <div className={styles.messages}>
        <div className={styles.message}>Привет!</div>
        <div className={styles.message}>Я не знаю кто это был</div>
        <div className={styles.message}>Ну ладно =Р</div>
      </div>
    </div>
  )
}

export default Dialogs
