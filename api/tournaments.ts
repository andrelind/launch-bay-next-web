import { Tournament } from '../types';
import { api } from './request';

export const setTournament = async (t: Tournament, access_token: string) => {
  const query = `mutation ($tournament: TournamentInput!) {
    setTournament(tournament: $tournament) {
        success
      }
    }`;

  const tournament = Object.assign({}, t);
  tournament.date = Math.floor(new Date().getTime() / 1000);

  return api(access_token, query, { tournament });
};

export const deleteTournament = async (uid: string, access_token: string) => {
  const query = `mutation ($uid: ID!) {
      removeTournament(uid: $uid) {
        success
      }
    }`;

  return api(access_token, query, { uid });
};
