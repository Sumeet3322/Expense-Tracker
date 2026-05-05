const express = require("express");
const {
  registerUser,
  loginUser,
  getUserInfo,
} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser", protect, getUserInfo);

router.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  
  // On Vercel, we don't have a persistent disk. 
  // In a real app, you would upload req.file.buffer to Cloudinary here.
  // For now, we return a beautiful placeholder to prevent crashes.
  const imageUrl = `https://ui-avatars.com/api/?name=${req.body.name || 'User'}&background=random&size=128`;
  
  res.status(200).json({ imageUrl });
});


module.exports = router;
