import styles from './index.module.css'

const Tag = ({ type, children, ...rest }) => {
  let className
  switch (type) {
    case 'yellow':
      className = styles.yellow
      break
    case 'skyblue':
      className = styles.skyblue
      break
    case 'gray':
      className = styles.gray
      break
    default:
      className = styles.blue
      break
  }

  return (
    <p {...rest} className={className}>
      {children}
    </p>
  )
}

export default Tag
