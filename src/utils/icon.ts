const map = {
  'logos:react': ['react'],
  'logos:astro-icon': ['astro'],
  'logos:nodejs-icon': ['nodejs'],
  riscv: ['riscv'],
};
export function toIcon(t: string, fallback: string = 'devicon') {
  t = t.toLowerCase();
  return (
    Object.entries(map).find(([icon, str]) => str.includes(t))?.[0] ??
    `${fallback}:${t}`
  );
}
