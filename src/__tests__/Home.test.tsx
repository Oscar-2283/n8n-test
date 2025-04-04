import { render, screen } from '@testing-library/react';
import Page from '@/app/page';

describe('首頁', () => {
  it('應該渲染歡迎訊息', () => {
    render(<Page />);
    
    // 檢查頁面是否包含「Get started by editing」文字
    const heading = screen.getByText(/Get started by editing/i);
    expect(heading).toBeInTheDocument();
  });

  

  
  // it('應該找到不存在的元素（預期會失敗）', () => {
  //   render(<Page />);
    
  //   // 嘗試查找一個頁面上不存在的元素，這會導致測試失敗
  //   const nonExistentElement = screen.getByText('這個元素不存在於頁面中');
  //   expect(nonExistentElement).toBeInTheDocument();
  // });
});