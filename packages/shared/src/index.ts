export function sum(a: number) {
    return new Promise((resolve) =>
        setTimeout(() => {
            console.log('1' + a)
        }),
    )
}
