# Test CI Version

## 测试

https://github.com/actions-cool/test-ci-version/issues/1

### 发布 v1.0.0

- In: v1.0.0
- Out: v1.0.0

### 发布 v1.0.1

- In: v1.0.0
- Out: v1.0.0

---

- In: v1.0.1
- Out: v1.0.1

---
- In: v1.0
- Out: Unable to resolve action `actions-cool/test-ci-version@v1.0`, unable to find version `v1.0`

---
- In: v1
- Out: Unable to resolve action `actions-cool/test-ci-version@v1`, unable to find version `v1`

## 结论

当找不到版本时，会报错。

## 疑问

https://github.com/marketplace/actions/checkout

经常看到 `actions/checkout@v2` `actions/checkout@v1`，发现 actions/checkout 库并没有对应 v2 发布版和 v2 分支。真就官方给自己开挂了？
