import { render, screen } from '@testing-library/react';
import Page from '@/app/page';

describe('首頁', () => {
  it('應該渲染歡迎訊息', () => {
    render(<Page />);
    
    // 檢查頁面是否包含「Get started by editing」文字
    const heading = screen.getByText(/Get started by editing/i);
    expect(heading).toBeInTheDocument();
  });
});