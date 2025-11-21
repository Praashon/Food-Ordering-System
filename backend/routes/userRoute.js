import express from 'express';
import { loginUser, registerUser, getUserProfile, updateUserProfile } from '../controllers/userController.js';
import authMiddleware from '../middleware/auth.js';
import multer from 'multer';

const userRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

userRouter.post('/register', upload.single("profileImage"), registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/profile', authMiddleware, getUserProfile);
userRouter.put('/profile', authMiddleware, upload.single("profileImage"), updateUserProfile);

export default userRouter;