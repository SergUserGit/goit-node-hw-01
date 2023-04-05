const fs = require("fs/promises");
const patch = require("path");
const contactsPath = patch.join(__dirname, "./db/contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

function getContactById(contactId) {}

function removeContact(contactId) {}

function addContact(name, email, phone) {}

module.exports = {
  listContacts,
};
