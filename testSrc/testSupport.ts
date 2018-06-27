export function testMessage(key: string, ...params: string[]): string {
  return [key, ...params].join("#");
}

export const valid = () => ({ _valid: true });
export const invalid = () => ({ _valid: false });
