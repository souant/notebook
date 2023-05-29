class MyPromise {
  constructor(excutor) {
    // 校验执行器是否为函数
    if (!excutor || typeof excutor !== "function") {
      throw "Promise resolver undefined is not a function";
    }
    // 状态
    this.PromiseState = "pending";
    // 结果
    this.PromiseResult = undefined;

    try {
      // 执行excutor
      excutor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }

    this.onFulfilledCallbacks = []; // 保存成功回调
    this.onRejectedCallbacks = []; // 保存失败回调
  }

  // resolve
  resolve(value) {
    // 判断是否pending
    if (this.PromiseState !== "pending") return;
    this.PromiseState = "fulfilled";
    this.PromiseResult = value;
    // 循环，保证异步执行
    while (this.onFulfilledCallbacks.length) {
      this.onFulfilledCallbacks.shift()(this.PromiseResult);
    }
  }

  // reject
  reject(value) {
    // 判断是否pending
    if (this.PromiseState !== "pending") return;
    this.PromiseState = "rejected";
    this.PromiseResult = value;
    // 循环，保证异步执行
    while (this.onRejectedCallbacks.length) {
      this.onRejectedCallbacks.shift()(this.PromiseResult);
    }
  }

  // then
  then(onFulfilled, onRejected) {
    // 确保回调执行是函数
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (val) => val;

    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (val) => {
            throw val;
          };

    // then 链式调用返回新的Promise
    // 若返回为值，则返回成功的Promsie，值为该值
    // 若返回为Promise，则返回该Promise

    const thenPromise = new MyPromise((resolve, reject) => {
      const resolvePromise = (cb) => {
        try {
          const x = cb(this.PromiseResult);
          if (x === thenPromise) {
            throw new Error("返回自身错误");
          } else if (x instanceof MyPromise) {
            x.then();
          } else {
            resolve(x);
          }
        } catch (err) {
          reject(err);
          throw new Error(err);
        }
        if (this.PromiseState === "fulfilled") {
          resolvePromise(onFulfilled);
        } else if (this.PromiseState === "rejected") {
          resolvePromise(onRejected);
        } else {
          this.onFulfilledCallbacks.push(resolvePromise.bind(this.onFulfilled));
          this.onRejectedCallbacks.push(resolvePromise.bind(this.onRejected));
        }
      };
    });

    return resolvePromise;
  }
}

/**
 * 测试
 */

// 不传执行器
console.log(
  "========================== 不传执行器 =============================="
);
try {
  const p = new MyPromise();
} catch (e) {
  console.log(e);
}

// resolve
console.log(
  "========================== resolve =============================="
);
try {
  const p = new MyPromise((resolve) => {
    console.log(`resolve("成功");`);
    resolve("成功");
  });
} catch (e) {
  console.log(e);
}

// resolve 与 reject 只能一次
console.log(
  "========================== resolve 与 reject 只能一次 =============================="
);
try {
  const p = new MyPromise((resolve, reject) => {
    console.log(`resolve("成功"); \n reject("失败");`);
    resolve("成功");
    reject("失败");
  });
} catch (e) {
  console.log(e);
}

// reject
console.log("========================== reject ==============================");
try {
  const p = new MyPromise((resolve, reject) => {
    console.log(`reject("失败");`);
    reject("失败");
  });
} catch (e) {
  console.log(e);
}

// then 不传 resolve回调， 不传 reject回调
console.log(
  "========================== then 不传 resolve回调， 不传 reject回调 =============================="
);
try {
  const p = new MyPromise((resolve, reject) => {
    console.log(`then 不传回调`);
    resolve("成功");
  });
  p.then();
} catch (e) {
  console.log(e);
}

// then resolve
console.log(
  "========================== then resolve =============================="
);
try {
  const p = new MyPromise((resolve, reject) => {
    reject("失败");
  });
  p.then((res) => console.log(res));
} catch (e) {
  console.log(e);
}

// then reject
console.log(
  "========================== then reject =============================="
);
try {
  const p = new MyPromise((resolve, reject) => {
    reject("失败");
  });
  p.then(null, (res) => console.log(res));
} catch (e) {
  console.log(e);
}

// 异步
console.log(
  "========================== then reject =============================="
);
try {
  const p = new MyPromise((resolve, reject) => {
    console.log("setTimeout start");
    setTimeout(() => {
      resolve("setTimeout end");
    }, 10000);
  });
  p.then((res) => console.log(res));
} catch (e) {
  console.log(e);
}
