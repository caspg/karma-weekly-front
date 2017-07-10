import jwtService from '../jwtService';

describe('jwtService', () => {
  const setItemMock = jest.fn();
  const getItemMock = jest.fn();
  const removeItemMock = jest.fn();

  const localStorageMock = {
    setItem: (key, value) => setItemMock(key, value),
    getItem: key => getItemMock(key),
    removeItem: key => removeItemMock(key),
  };

  beforeAll(() => {
    global.localStorage = localStorageMock;
  });

  beforeEach(() => { jest.resetAllMocks(); });

  const expectedTokenKey = 'karma_weekly_jwt';
  const jwToken = 'some-long-well-encrypted-token';

  test('saveInLocal - it sets item in the localStorage', () => {
    jwtService.saveInLocal(jwToken);

    expect(setItemMock).toHaveBeenCalledWith(expectedTokenKey, jwToken);
  });

  test('getFromLocal - it gets item from the localStorage', () => {
    jwtService.getFromLocal();

    expect(getItemMock).toHaveBeenCalledWith(expectedTokenKey);
  });

  test('removeFromLocal - it removes item from the localStorage', () => {
    jwtService.removeFromLocal();

    expect(removeItemMock).toHaveBeenCalledWith(expectedTokenKey);
  });
});
