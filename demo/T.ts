/**
 * 泛型
 *
 */

function identityString(arg: number): number {
  return arg;
}

function identityNumber(arg: string): string {
  return arg;
}

function identity<T>(arg: T): T {
  return arg;
}
