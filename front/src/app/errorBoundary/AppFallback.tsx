import type { FallbackProps } from 'react-error-boundary';
import styles from "./AppFallback.module.scss";
export function AppFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  const errorMessage = error instanceof Error 
    ? error.message 
    : String(error);
  
  return (
    <div className={styles.appFallback}>
      <h1 className={styles.appFallback_title}>Что-то пошло не так</h1>
      <p className={styles.appFallback_message}>{errorMessage}</p>
      <button 
        className={styles.appFallback_btn} 
        onClick={resetErrorBoundary}>
        Попробовать снова
      </button>
    </div>
  );
}