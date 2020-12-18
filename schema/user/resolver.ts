import webtoken from 'jsonwebtoken';
import mongoose from 'mongoose';
import { Context, SECRET } from '../helpers';
import UserModel from '../models/user';

const resolvers = {
  Query: {},
  Mutation: {
    async registerUser(
      _parent: any,
      { name, id, provider, email }: any,
      { db }: Context
    ) {
      const User = UserModel(db);
      const userObject = await User.findOne({ id, provider });
      if (!userObject) {
        const object = new User();
        object.uid = new mongoose.mongo.ObjectId();
        object.id = id;
        object.name = name;
        object.provider = provider;
        object.email = email;
        await object.save();
      } else {
        userObject.id = id;
        userObject.name = name;
        userObject.provider = provider;
        userObject.email = email;
        await userObject.save();
      }

      const jwt = webtoken.sign({ name, id, provider, email }, SECRET);
      return { jwt, name, id, provider, email };
    },
  },
};

module.exports = resolvers;
