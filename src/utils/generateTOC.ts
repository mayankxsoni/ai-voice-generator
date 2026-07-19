export interface TOCItem {
  id: string;
  title: string;
  level: number;
}

/**
 * Generates table of contents from markdown content
 * @param markdownContent - The markdown content string
 * @returns Array of TOC items with id, title, and level
 */
export const generateTOC = (markdownContent: string): TOCItem[] => {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const toc: TOCItem[] = [];
  let match;

  while ((match = headingRegex.exec(markdownContent)) !== null) {
    const level = match[1].length; // Number of # characters
    const title = match[2].trim();

    // Generate slug-like id from title
    const id = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .trim();

    toc.push({
      id,
      title,
      level,
    });
  }

  return toc;
};

export default generateTOC;
