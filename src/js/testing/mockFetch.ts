export function mockFetch(data: any) {
  return jest.fn().mockImplementation(() =>{
    return Promise.resolve({
      ok: true,
      json: () => data,
    })}
  );
}
