
const express = require("express");
const router = express.Router();
const { GetContacts, CreateContact, GetContact_byId, UpdateContact_byId, DeleteContact_byId } = require("../Controllers/ContactControllers")

// since the routes [/api/contacts/]  aare same for the requests they can be written in the same line
// fetching contacts
// creating contact
router.route('/').get(GetContacts).post(CreateContact)

// gettin contact for particular id
// updating contact for a id
// delete contact with id
router.route('/:id').get(GetContact_byId).delete(DeleteContact_byId).put(UpdateContact_byId);

module.exports = router;