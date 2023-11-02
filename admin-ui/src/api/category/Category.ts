export type Category = {
  categories?: Category | null;
  createdAt: Date;
  id: string;
  key: string | null;
  name: string | null;
  parentId?: Array<Category>;
  updatedAt: Date;
};
