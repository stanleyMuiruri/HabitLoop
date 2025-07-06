import * as SQLite from 'expo-sqlite';

export const getDb = async () => {
    const db = await SQLite.openDatabaseAsync('habitloop.db');
    return db;
};
