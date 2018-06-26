export function testMessage(key: string, ...params: string[]): string {
  return [key, ...params].join("#");
}
