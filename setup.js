jest.mock('@sanity/client');

afterAll(async () => { global.gc && global.gc() });
