import DBHelper from "../../../dataSources/DBHelper";
import { postgresConfig } from "../../../dataSources/pgConfig";


export const userIsAdmin = async function(userId: number): Promise<any> {
  let queryString = `select is_admin from users where user_id=${userId}`;
  return await DBHelper.executePgQuery({
    query: queryString,
    values: [],
    dbConfig: postgresConfig
  });
};