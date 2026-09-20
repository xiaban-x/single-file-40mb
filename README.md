# Single File 40MB

构建时生成 `dist/large-40mb.bin`（40MB）。

- 未配白名单：应失败（超过默认 25MB）
- 白名单 ≥ 40MB：应成功
