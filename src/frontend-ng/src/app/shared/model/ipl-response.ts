import { Match } from "./match";

export interface IplResponse{
	id : number,
	teamName: string,
	totalMatches: number,
	totalWins: number,
	matches: Match[];
}