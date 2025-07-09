import express from "express";

// Configuration
// ================================

const router = express.Router();

// Routes
// ================================

router.get("/", (req, res, next) => {
    next();
});

export default router;
