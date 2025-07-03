export function basicControlFlow(): void {
// {{## BEGIN control-flow ##}}
    let a: i32 = 5
    if (a > 0) {
        a += 1
    } else {
        a -= 1
    }
// {{## END control-flow ##}}
}

export function basicWhile(): void {
// {{## BEGIN while ##}}
    let a: i32 = 5
    while (a < 10) {
        a += 1
    }

    do {
        a -= 1
    } while (a > 0)
// {{## END while ##}}
}

export function basicFor(): void {
// {{## BEGIN for ##}}
    let a: i32 = 5
    for (let i: i32 = 0; i < 5; i++) {
        a += i
    }
// {{## END for ##}}

// {{## BEGIN for-in ##}}
    let obj: ref_struct = { "x": 10, "y": 20 }
    for (let key: ref_struct in obj) {
        // Do something with key and obj[key]
    }
// {{## END for-in ##}}
}
