export function catMouse(x: string): string {
  if (x.slice(1, -1).length > 3) {
    return "Escaped!"
  }
  return "Caught!";
}