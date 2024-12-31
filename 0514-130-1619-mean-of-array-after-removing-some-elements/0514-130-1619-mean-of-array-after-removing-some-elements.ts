function trimMean(arr: number[]): number {
    const toBeRemoved = arr.length * (5 / 100);
    arr.sort((a, b) => a - b);
    for (let i = 0; i < toBeRemoved; i++) {
        arr.shift();
        arr.pop();
    }

    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    return result / arr.length;
};