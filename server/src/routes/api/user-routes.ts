import express from 'express';
const router = express.Router();
import {
  createUser,
  login,
  // saveBook,
  // getSingleUser,
  // deleteBook,
} from '../../controllers/user-controller.js';

// Legacy note: These REST routes are now replaced by GraphQL.
// If you ever re-enable them, reimport `authenticateToken` from your auth service and restore the routes.

// router.route('/').post(createUser).put(authenticateToken, saveBook);
// router.route('/me').get(authenticateToken, getSingleUser);
// router.route('/books/:bookId').delete(authenticateToken, deleteBook);

router.route('/').post(createUser);
router.route('/login').post(login);

export default router;
