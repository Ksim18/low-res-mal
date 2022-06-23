import {knexCon} from "./knex";
import {
    createRecordType,
    deleteRecordType,
    readRecordType,
    updateRecordType
} from "../../types/crudTypes";


class ServiceClass {
    async createRecord(data: createRecordType) {
        return knexCon(data.tableName)
            .insert(data.columnObject);
    }
    async getRecord(data: readRecordType){
        return knexCon(data.tableName)
            .select().where(data.searchBy, data.value);
    }
    async updateRecord(data: updateRecordType){
        return knexCon(data.tableName)
            .where(() => {
                let chain = [];
                for(let i=0; i<data.value.length; i++){
                    chain.push([data.searchBy[i], data.value[i]]);
                }
                return Object.fromEntries(chain);
        })
            .insert(data.columnObject);
    }
    async deleteRecord(data: deleteRecordType){
        return knexCon.where(() => {
            let chain = [];
            for(let i=0; i<data.value.length; i++){
                chain.push([data.searchBy[i], data.value[i]]);
            }
            return Object.fromEntries(chain);
            }).del();
    }
}

export default new ServiceClass();