export interface LocationResponse {
  info?: Info;
  results: Result[];
  fetchMoreLocations?: () => void;
  handleSearchInputChange?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  isLoading?: boolean;
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: number;
}

export interface Result {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface LocationData {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}
