jest.dontMock(SRC_DIRECTORY + '/deps');

describe('deps.parseVersion', () =>
{

  it('Should parse versions correctly', () =>
  {
    var deps = require(SRC_DIRECTORY + '/deps');

    expect(deps.parseVersion('1.0.0')).toBe('1.0.0');
    expect(deps.parseVersion('~1.0.0')).toBe('1.0.0');
    expect(deps.parseVersion('^1.0.0')).toBe('1.0.0');
  });

});