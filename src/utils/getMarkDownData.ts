import matter from 'gray-matter';
import fs from 'node:fs';
import path from 'node:path';

interface MarkdownData {
  slug: string;
  content: string;
  [key: string]: unknown;
}

const getMarkDownData = <T extends MarkdownData = MarkdownData>(
  folder: string,
  reversedSort?: boolean,
  sortBy?: string,
): T[] => {
  if (!sortBy) {
    sortBy = 'title';
  }
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const postsData = markdownPosts
    .map((file) => {
      const filePath = path.join(folder, file);
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const data = matter(content);
        return {
          ...data.data,
          slug: file.replace('.md', ''),
          content: data.content,
        } as T;
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.error(`Error parsing markdown file: ${filePath}`, error);
        }
        return null;
      }
    })
    .filter((post): post is T => post !== null);

  const sortedPosts = postsData.toSorted((a, b) => {
    const getFieldValue = (obj: T, key: string): string => {
      const value = (obj as MarkdownData)[key];
      if (typeof value === 'string') {
        return value;
      }
      if (value === null || value === undefined) {
        return '';
      }
      if (typeof value === 'number' || typeof value === 'boolean') {
        return String(value);
      }
      return '';
    };
    const fieldA = getFieldValue(a, sortBy);
    const fieldB = getFieldValue(b, sortBy);
    return fieldA.localeCompare(fieldB);
  });
  if (reversedSort) {
    return sortedPosts.reverse();
  }
  return sortedPosts;
};

export default getMarkDownData;
