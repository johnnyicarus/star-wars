/**
 * Get cookie value
 */
export function getCookie(name: string): string {
  const re = new RegExp(`${name}=([^;]+)`);
  const value = re.exec(document.cookie);

  return (value != null)
    ? unescape(value[1])
    : null;
}
