import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// Disabled due to a Jest / JSDom issue
// https://stackoverflow.com/a/54157998/1343420
// https://github.com/facebook/jest/issues/6798

// const localStorageMock = {
//   getItem: jest.fn(),
//   setItem: jest.fn(),
//   removeItem: jest.fn(),
//   clear: jest.fn()
// };

// Object.defineProperty(window, "localStorage", { value: localStorageMock });

Storage.prototype.getItem = jest.fn();
Storage.prototype.setItem = jest.fn();
Storage.prototype.removeItem = jest.fn();
Storage.prototype.clear = jest.fn();
