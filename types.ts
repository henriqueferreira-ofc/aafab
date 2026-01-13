export enum Category {
  AAFAB = 'Institucional AAFAB',
  POLITICA_BR = 'Política Brasileira',
  POLITICA_INT = 'Política Internacional',
  DEFESA = 'Defesa Nacional',
  FAB = 'Força Aérea Brasileira',
  OPINIAO = 'Opinião',
  COMUNICADO = 'Comunicado Oficial'
}

export interface Author {
  id: string;
  name: string;
  role: string;
  avatar?: string;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: Category;
  author: Author;
  publishDate: string;
  content: string; // Markdown-like or HTML string
  imageUrl: string;
  imageCaption?: string;
  isFeatured?: boolean;
  tags: string[];
}

export interface NavigationItem {
  name: string;
  href: string;
  category?: Category;
}