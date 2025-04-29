import { User } from '../models/index.js'; 
import { signToken } from '../utils/auth.js';
import { AuthenticationError } from 'apollo-server-express';

const resolvers = {
  Query: {
    me: async (_parent: any, _args: any, context: any) => {
      if (context.req.user) {
        const userData = await User.findById(context.req.user._id).select('-__v -password');
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
  },

  Mutation: {
    login: async (_parent: any, { email, password }: any) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },

    addUser: async (_parent: any, args: any) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    saveBook: async (_parent: any, { bookData }: any, context: any) => {
      if (context.req.user) {
        const updatedUser = await User.findByIdAndUpdate(
          context.req.user._id,
          { $push: { savedBooks: bookData } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You must be logged in!');
    },

    removeBook: async (_parent: any, { bookId }: any, context: any) => {
      if (context.req.user) {
        const updatedUser = await User.findByIdAndUpdate(
          context.req.user._id,
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You must be logged in!');
    },
  },
};

export { resolvers };
