// TODO: Install the following package:
import { openDB } from "idb";

// TODO: Complete the initDb() function below:
const initdb = async () => {
  openDB("Contacts", 1, {
    upgrade(db) {
      console.log("Contacts does not exist");
      if (db.objectStoreNames.contains("")) {
        console.log("Contacts database already exists");
        return;
      }

      db.createObjectStore("", { keyPath: "id", autoIncrement: true });
    },
  });
};

// TODO: Complete the postDb() function below:
// creates new contact
export const postDb = async (name, home, cell, email) => {
  const contactDb = await openDB("Contacts", 1);
  const tx = contactDb.transaction("Contacts", "readwrite");
  const store = tx.objectStore("Contacts");
  const request = store.add({ contact: { name, home, cell, email } });
  const result = await request;
  console.log(result);
  return result;
};

// TODO: Complete the getDb() function below:
export const getDb = async (id) => {
  const contactDb = await openDB("Contacts", 1);
  const tx = contactDb.transaction("Contacts", "readwrite");
  const store = tx.objectStore("Contacts");
  const request = store.get(id);
  const result = await request
  return result
};

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
  const contactDb = await openDB("Contacts", 1);
  const tx = contactDb.transaction("Contacts", "readwrite");
  const store = tx.objectStore("Contacts");
  const request = store.delete(id);
  const result = await request;
  return result;
};

initdb();
