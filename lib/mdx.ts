import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_PATH = path.join(process.cwd(), 'content/blog');

export type ArticleMetadata = {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  eyecatch?: string;
};

export async function getAllArticles(): Promise<ArticleMetadata[]> {
  const files = fs.readdirSync(BLOG_PATH);
  
  const articles = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(BLOG_PATH, file);
      const source = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(source);
      
      return {
        slug: file.replace('.mdx', ''),
        title: data.title,
        date: data.date,
        author: data.author,
        tags: data.tags || [],
        eyecatch: data.eyecatch,
      } as ArticleMetadata;
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
    
  return articles;
}

export async function getArticleBySlug(slug: string) {
  const filePath = path.join(BLOG_PATH, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  
  const source = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(source);
  
  return {
    content,
    metadata: {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      tags: data.tags || [],
      eyecatch: data.eyecatch,
    } as ArticleMetadata,
  };
}
