# ClassSwift Frontend

## 目錄
- [ClassSwift Frontend](#classswift-frontend)
  - [目錄](#目錄)
  - [Demo](#demo)
  - [系統需求](#系統需求)
  - [安裝與執行](#安裝與執行)
  - [專案結構](#專案結構)
  - [功能](#功能)

## Demo

[Demo Link](https://zackweng.github.io/class_swift)

## 系統需求
- Node.js >= 18
- pnpm

## 安裝與執行

1. 確保你的系統已安裝符合版本要求的 Node.js
   ```bash
   node -v # 確認 Node.js 版本
   ```

2. 安裝 pnpm（如果尚未安裝）
   ```bash
   npm install -g pnpm
   ```

3. 安裝專案依賴
   ```bash
   pnpm install # 或使用簡寫 pnpm i
   ```

4. 執行專案
   ```bash
   pnpm dev # 開發環境
   pnpm build # 建置生產環境
   pnpm preview # 預覽生產環境
   pnpm test # 執行測試
   ```

## 專案結構

```bash
.
├── public # 靜態資源
├── src # 源碼
│   ├── api # API 模擬
│   ├── assets # 圖片與 SVG
│   ├── components # 元件
│   ├── data # 靜態資料
│   ├── pages # 頁面
│   ├── store # 狀態管理
│   ├── styles # 樣式
│   ├── types # 型別
│   ├── ui # 通用 UI 元件
│   ├── utils # 工具
│   ├── App.tsx # 主應用
├── └── main.tsx # 主入口
```

## 功能
- 支援同時顯示兩個 Modal
- 產生 QR Code，掃描導向 https://www.classswift.viewsonic.io/
- 複製教室連結到剪貼簿
- 右側 Modal 提供 Tab 切換：
  - 學生清單（Student List）
  - 分組檢視（Group View）
- 學生卡片有「…」選單
- 學生卡片有「+ / -」按鈕調整分數
