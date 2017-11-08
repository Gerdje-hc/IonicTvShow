import { TvShow } from "./tvShow";

export interface ApiResult {
    pages: number;
    page: number;
    total: string;

    tv_shows: TvShow[];


}