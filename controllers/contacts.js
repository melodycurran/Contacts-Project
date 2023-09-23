const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags = ['Contacts']
    const result = await mongodb.getDatabase().db().collection('userContacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-type', 'application/json');
        res.status(200).json(contacts);
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags = ['Contacts']
    const userId = new ObjectId(req.params.id)
    const result = await mongodb.getDatabase().db().collection('userContacts').find({_id: userId});
    result.toArray().then((contacts) => {
        res.setHeader('Content-type', 'application/json');
        res.status(200).json(contacts[0]);
    });
};

const createContact = async (req, res) => {
    //#swagger.tags = ['Contacts']
    const userId = new ObjectId(req.params.id);
    const contact = {
        fullName: req.body.name,
        phone: req.body.phone,
        relationship: req.body.relationship
    };
    const response = await mongodb.getDatabase().db().collection('userContacts').insertOne(contact); 
    if (response.acknowledged > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error) || 'An error ocurred. Try again.'
    }
};

const updateContact = async (req, res) => {
    //#swagger.tags = ['Contacts']
    const userId = new ObjectId(req.params.id);
    const contact = {
        fullName: req.body.name,
        phone: req.body.phone,
        relationship: req.body.relationship
    };
    const response = await mongodb.getDatabase().db().collection('userContacts').replaceOne({_id: userId}, contact); 
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error) || 'An error ocurred. Try again.'
    }
};

const deleteContact = async (req, res) => {
    //#swagger.tags = ['Contacts']
    const userId = new ObjectId(req.params.id);
    const contact = {
        fullName: req.body.name,
        phone: req.body.phone,
        relationship: req.body.relationship
    };
    const response = await mongodb.getDatabase().db().collection('userContacts').deleteOne({_id: userId}); 
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error) || 'An error ocurred. Try again.'
    }
};

module.exports = {
    getAll,
    getSingle,
    createContact, 
    updateContact,
    deleteContact
};