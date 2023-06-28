// express : async handler - handles all the async functions

const asyncHandler = require('express-async-handler')
const DB_access = require("../Models/Models_contact")
// @desc : Get contact
// @route : GET /api/contacts
// @access : public
const GetContacts = asyncHandler(async (req, res) => {
  const GET_op = await DB_access.find();
  res.status(200).json(GET_op);
});

// @desc : Create a new contact
// @route : GET /api/contacts
// @access : public
const CreateContact = asyncHandler(async (req, res) => {
  console.log("Requested body is : ", req.body);

  const { name, guild, rank } = req.body;
  if (!name || !guild || !rank) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const entry = await DB_access.create({
    name, guild, rank,
  });
  res.status(201).json(entry);
});

// @desc : get a contact by id
// @route : GET /api/contacts/:id
// @access : public
const GetContact_byId = asyncHandler(async (req, res) => {
  res.status(202).json({ message: `Get contact for ${req.params.id}` });
}); 

// @desc : Update a contact
// @route : GET /api/contacts/:id
// @access : public
const UpdateContact_byId = asyncHandler(async (req, res) => {
  res.status(203).json({ message: `Update contact for ${req.params.id}` });
});

// @desc : Delete a contact by id
// @route : GET /api/contacts/:id
// @access : public
const DeleteContact_byId = asyncHandler(async (req, res) => {
  res.status(204).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
  GetContacts,
  CreateContact,
  GetContact_byId,
  UpdateContact_byId,
  DeleteContact_byId,
};
