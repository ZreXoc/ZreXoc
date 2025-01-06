/**
 * 节流函数
 * @param func 需要节流的函数
 * @param limit 时间间隔（毫秒）
 * @returns 返回一个节流后的函数
 */
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  limit: number = 100,
): (...args: Parameters<T>) => void {
  let inThrottle = false; // 标记是否处于节流状态

  return (...args: Parameters<T>): void => {
    if (!inThrottle) {
      // 如果不在节流状态，执行函数
      func(...args);
      inThrottle = true; // 进入节流状态
      setTimeout(() => {
        inThrottle = false; // 时间间隔结束后解除节流状态
      }, limit);
    }
  };
}
