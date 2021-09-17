// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// const mockObserverAPI = () =>
//   jest.fn().mockReturnValue({
//     observe: () => null,
//     unobserve: () => null,
//     disconnect: () => null,
//   });

// window.ResizeObserver = mockObserverAPI();
// window.IntersectionObserver = mockObserverAPI();


class ResizeObserver {
  observe() {
    // do nothing
  }

  unobserve() {
    // do nothing
  }

  disconnect() {
    // do nothing
  }
}

window.ResizeObserver = ResizeObserver;

window.IntersectionObserver = jest.fn().mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
