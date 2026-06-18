import { Router } from "express";

import {
    getViajes,
    getViaje,
    postViaje,
    putViaje,
    deleteViaje
} from "../controllers/viajesController.mjs";

const router = Router();

router.get("/", getViajes);
router.get("/:id", getViaje);

router.post("/", postViaje);

router.put("/:id", putViaje);

router.delete("/:id", deleteViaje);

export default router;