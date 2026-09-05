export interface PaginatorLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  links: {
    first: string | null;
    last: string | null;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number | null;
    last_page: number;
    per_page: number;
    to: number | null;
    total: number;
  };
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Income {
  id: number;
  amount: number;
  note?: string;
  date: string;
  user: User;
}
