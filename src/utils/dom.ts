/**
 * 获取距离当前滚动位置最近的元素
 * @param elements 需要查找的元素数组
 * @param callback 找到最近元素后的回调函数
 */
export function getRecentVisibleElement(
    elements: HTMLElement[] | NodeListOf<HTMLElement>,
    callback: (element: HTMLElement | null) => void,
    distance?: (element: HTMLElement) => number
): void {
    let closestElement: HTMLElement | null = null;

    const observer = new IntersectionObserver(
        (entries) => {
            let closestRatio = 0;
            entries.forEach((entry) => {
                const element = entry.target as HTMLElement;
                const ratio = entry.intersectionRatio;

                console.log(element, ratio, closestRatio);
                

                // 找到与视口交叉比例最大的元素
                if (ratio > closestRatio) {
                    closestRatio = ratio;
                    closestElement = element;
                }
            });

            // 调用回调函数，返回最近的元素
            callback(closestElement);
        },
        {
            threshold: Array.from({ length: 100 }, (_, i) => i * 0.01), // 设置 0 到 1 的阈值
        }
    );

    // 监听所有传入的元素
    elements.forEach((element) => observer.observe(element));
}
