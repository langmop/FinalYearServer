import express from "express";
import {
  customers,
  addCustomer,
  specificCustomer,
} from "../controllers/customer.js";
const router = express.Router();
router.get("/", customers);
router.get("/specificCustomer", specificCustomer);
router.post("/addCustomer", addCustomer);

export default router;
