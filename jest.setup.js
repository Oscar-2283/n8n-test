// 導入Jest DOM擴展
import '@testing-library/jest-dom';

// 如果需要模擬全局對象，可以在這裡添加
// 例如：
// Object.defineProperty(window, 'matchMedia', {
//   writable: true,
//   value: jest.fn().mockImplementation((query) => ({
//     matches: false,
//     media: query,
//     onchange: null,
//     addListener: jest.fn(),
//     removeListener: jest.fn(),
//   })),
// });