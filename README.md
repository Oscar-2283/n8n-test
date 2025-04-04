# Next.js 專案

這是一個使用 [Next.js](https://nextjs.org) 建立的專案，整合了測試框架和CI/CD流程。

## 功能特性

- 使用 TypeScript 進行開發
- 採用 App Router 架構
- 整合 Jest 和 React Testing Library 進行測試
- 使用 ESLint 進行程式碼品質管控
- 設置 GitHub Actions 進行 CI/CD 自動化流程

## 開始使用

首先，安裝相依套件：

```bash
npm install
```

然後，啟動開發伺服器：

```bash
npm run dev
```

在瀏覽器中開啟 [http://localhost:3000](http://localhost:3000) 查看結果。

你可以透過修改 `src/app/page.tsx` 來開始編輯頁面。當你編輯檔案時，頁面會自動更新。

## 執行測試

本專案使用 Jest 和 React Testing Library 進行測試。執行以下命令來運行測試：

```bash
# 運行所有測試
npm test

# 以監視模式運行測試
npm run test:watch

# 生成測試覆蓋率報告
npm run test:coverage
```

## CI/CD 流程

本專案已設置 GitHub Actions 來自動化測試和構建流程。當你推送代碼到 `main` 或 `master` 分支，或創建指向這些分支的 Pull Request 時，會自動觸發以下流程：

1. 執行程式碼 Lint 檢查
2. 運行自動化測試
3. 構建專案

若要查看 CI/CD 設置，請參考 `.github/workflows/ci.yml` 檔案。

## 學習資源

要了解更多關於 Next.js 的資訊，請參閱以下資源：

- [Next.js 文件](https://nextjs.org/docs) - 了解 Next.js 功能和 API
- [學習 Next.js](https://nextjs.org/learn) - 交互式 Next.js 教程

## 部署

本專案可以輕易部署到 [Vercel 平台](https://vercel.com/new)，或參考 [Next.js 部署文件](https://nextjs.org/docs/app/building-your-application/deploying) 了解更多部署選項。
