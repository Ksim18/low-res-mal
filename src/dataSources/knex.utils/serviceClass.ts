import {knexCon} from "./knex";
import {
  createRecordType,
  deleteRecordType,
  readRecordType,
  updateRecordType
} from "../../types/crudTypes";
import knex from "knex";
import QueryBuilder = knex.QueryBuilder;


class ServiceClass {
  createRecord(data: createRecordType): QueryBuilder {
    console.log(process.env.DB_NAME);
    return knexCon(data.tableName).returning(Object.keys(data.columnObject)).insert(data.columnObject);


  }
  getRecord(data: readRecordType): QueryBuilder{
    const query = knexCon(data.tableName).select().where(data.searchBy, data.value);
    console.log(query.toString());
    return query;
  }

  updateRecord(data: updateRecordType){
    console.log(JSON.stringify(data));
    const makeCondition = () => {
      const chain = [];
      for(let i=0; i<data.value.length; i++){
        chain.push([data.searchBy[i], data.value[i]]);
      }
      console.log("obj=", Object.fromEntries(chain));
      return Object.fromEntries(chain);
    };
    const query = knexCon(data.tableName)
      .returning(Object.keys(data.columnObject))
      .where(makeCondition())
      .update(data.columnObject);
    console.log(query.toString());
    return query;
  }
  deleteRecord(data: deleteRecordType): QueryBuilder{
    const makeCondition = () => {
      const chain = [];
      for(let i=0; i<data.value.length; i++){
        chain.push([data.searchBy[i], data.value[i]]);
      }
      return Object.fromEntries(chain);
    };
    return knexCon(data.tableName).returning(data.searchBy).where(makeCondition()).del();
  }
}

export default new ServiceClass();