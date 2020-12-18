// import jwt from 'jsonwebtoken';
import { ApolloError } from 'apollo-server-micro';
import webtoken from 'jsonwebtoken';
import mongoose from 'mongoose';
import UserModel from '../models/user';

export type Context = {
  ctx: any;
  db: mongoose.Connection;
};

export const SECRET = process.env.JWT_SECRET || '';

export const getUser = async (ctx: any, db: mongoose.Connection) => {
  const { req } = ctx;
  const token = req.headers['x-jwt'];
  if (!token) {
    throw 'Invalid credentials - alpha';
  }

  try {
    // @ts-ignore
    const { id, name, provider } = webtoken.verify(token, SECRET);
    if (!id || !name || !provider) {
      throw 'Invalid credentials - beta';
    }

    const user = await UserModel(db).findOne({
      id,
      name,
      provider,
    });
    if (!user) {
      throw new ApolloError('Could not get user');
    }
    return user;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw `Invalid credentials - ${error}`;
  }
};

export const generateTimestamp = () => Math.floor(new Date().getTime() / 1000);
