# Anway 产品选型站（Product Finder）

把安规现有的 **62 个型号 / 8 个系列**做成一个手机优先的产品目录：搜索、筛选、中英切换、离线可看，能发布到 GitHub Pages，手机上「添加到主屏幕」后像 App 一样全屏打开。

---

## 一、现在就能看

双击 `site/index.html` 即可（Chrome / Edge / 手机浏览器都行）。

- 首页：系列概览、统计、搜索入口
- 型号页：搜索 + 系列筛选 + 调光/功率/认证筛选 + 排序
- 详情页：完整参数、典型应用、复制参数、分享链接、邮件询价（预填正文）
- 右上角 `EN / 中文` 切换语言；深色模式跟随系统

> 本地双击打开时地址栏不写参数（浏览器的 file:// 安全限制），其余功能不受影响。

---

## 二、文件说明

```
site/                     ← 整个目录就是要发布的内容
  index.html              页面骨架
  app.js                  全部逻辑（无依赖、无构建）
  styles.css              样式（浅色 / 深色）
  data.js                 型号数据（自动生成，页面读这个）
  data.json               同一份数据的 JSON（给别的程序用）
  sw.js                   离线缓存
  manifest.webmanifest    PWA 配置（添加到主屏幕）
  icons/                  图标（自动生成）

tools/
  build_catalog.py        从 xlsx 生成 data.js / data.json
  make_icons.py           生成图标
```

---

## 三、改数据

1. 修改 `anway_dali_report_2026-11/…产品矩阵与路线图_2026-11.xlsx` 的「产品矩阵」工作表
2. 运行：

```powershell
python tools/build_catalog.py
```

3. 刷新页面即可

**公开版 / 内部版**

| 命令 | 内容 | 用途 |
|---|---|---|
| `python tools/build_catalog.py` | 不含「市场位置 / 差距建议 / 优先级」三列 | 对客户、发布到公网 |
| `python tools/build_catalog.py --mode internal` | 含内部三列 | 内部看；页面顶部会出现红色「内部版 · 请勿公开发布」横幅 |

> 内部版不要上传到公开仓库。GitHub Pages 免费版要求仓库公开。

---

## 四、发布到 GitHub Pages（不用装 git）

1. 打开 github.com → 注册/登录 → **New repository**
   - 名称例如 `anway-catalog`，选 **Public**，Create
2. **Add file → Upload files**：把 `site` 目录**里面的内容**全部拖进去（不要拖 `site` 文件夹本身），Commit changes
3. 仓库 **Settings → Pages**：
   - Source 选 **Deploy from a branch**
   - Branch 选 `main`，目录选 **/(root)**，Save
4. 等约 1 分钟，地址是：

```
https://<你的用户名>.github.io/anway-catalog/
```

5. 手机打开该地址 → 浏览器菜单 → **添加到主屏幕**（iOS 用 Safari「分享 → 添加到主屏幕」）

> 如果把整个 `site` 文件夹上传成子目录，地址会多一层 `/site/`，所以建议只上传里面的文件。

---

## 五、更新内容

改完数据 → 重新运行生成脚本 → 重新上传覆盖 → 手机刷新。

离线缓存会让老用户最多晚一次打开才看到新版本；要立即生效，把 `site/sw.js` 里的 `CACHE` 版本号从 `anway-catalog-v2` 改成 `v3` 即可。

---

## 六、注意事项

- **只放能对外的信息**：报价、客户名单、未发布型号、内部路线图不要放进公开仓库
- **认证口径**：页面上的认证是平台级信息，带 `*` 的需按型号以证书 / CDF / 报告为准
- 「添加到主屏幕」需要 https（GitHub Pages 满足）；本地 `file://` 只能浏览，不能安装
- 数据来源：安规官网产品页，2026-11-03 复核；型号数以 xlsx 实际行为准（当前 62 个）

---

## 七、页面地址规则（便于直接分享某个筛选）

| 地址 | 含义 |
|---|---|
| `#/` | 首页 |
| `#/models` | 全部型号 |
| `#/models?s=eco` | 只看 ECO 系列 |
| `#/models?t=triac` | 只看可控硅调光 |
| `#/models?p=b10_30` | 功率 10–30W |
| `#/models?c=enec` | 含 ENEC 认证 |
| `#/models?q=24CV` | 关键词搜索 |
| `#/model/ECO-350G30` | 直接打开某个型号 |

参数可组合，例如 `#/models?s=as-cv&p=b30_60&o=power-desc`。
