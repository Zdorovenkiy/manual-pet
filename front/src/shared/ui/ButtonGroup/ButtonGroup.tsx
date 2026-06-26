import { useTabSelector } from '@/shared/model/hooks/useTabSelector';
import styles from "./ButtonGroup.module.scss"
type Props = {
  labels: string[]
}

function ButtonGroup({labels}: Props) {
  const { activeTab, tabHandler } = useTabSelector();

  return (
    <div className={styles.buttonGroup}>
      {
        labels.map((item, id) => (
          <button 
            className={`${activeTab === id ? styles.active : ""}`} 
            onClick={() => tabHandler(id)}
          >
            {item}
          </button>
        ))
      }
    </div>
  )
}

export default ButtonGroup