export type genre = "action" | "comedy" | "fantasy" | "romance" | "slice_of_life"
export type status = "finished" | "airing" | "anonsed"
export type MALOptions = {
    type: string,
    minScore: number,
    maxScore: number,
    status: string,
    orderBy: string
}