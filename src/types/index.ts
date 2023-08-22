export type user = {
  name: string;
  id: string;
  email: string;
  date_created: string;
  userId: string;
  notes?: note[];
};
export type note = {
  title: string;
  description: string;
  body: string;
  id: string;
  authorId: string;
  date_created: string;
  date_updated: string;
};

export type notes = note[];
export type todo = {
  title: string;
  description: string;
  id: string;
  authorId: string;
  date_created: string;
  date_updated: string;
  completed: boolean;
};
export type todos = todo[];
