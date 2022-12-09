import styles from '../styles/Button.module.css'
const Button = ({children, variant}) => {
    return(
        <div>
        {variant === "primary" ? (
          <div>
            <button className={styles.primary}>{children}</button>
          </div>
        ) : (
          <div>
            <button type='button' className={styles.secondary}>{children}</button>
          </div>
        )}
      </div>
    )
}
export default Button;