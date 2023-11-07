// とりあえず ID そのまま

type ID = number | string;

export function nodeToCursor(node: { id: ID }): string;
export function nodeToCursor(
  node: { id: ID } | null | undefined,
): string | null;
export function nodeToCursor(
  node: { id: ID } | null | undefined,
): string | null {
  if (node == null) return null;
  return String(node.id);
}

export const cursorToId = (
  cursor: string | null | undefined,
): number | null => {
  if (cursor == null) return null;
  const id = Number(cursor);
  if (Number.isNaN(id)) return null;
  return id;
};
