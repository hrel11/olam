export type Institution = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  joinedAt: string;
  instName: string;
  instType: ("企業" | "教育機関")[];
};

export type ExperienceResponse = {
  contents: Institution[];
  totalCount: number;
  offset: number;
  limit: number;
};
