import styles from './index.module.css'

const ProgressBar = ({ value, max, ...rest }) => {

  return (
    <progress  
      className={styles.progress} 
      value={value} 
      max={max} 
      {...rest}
    />
  )
}

export default ProgressBar
