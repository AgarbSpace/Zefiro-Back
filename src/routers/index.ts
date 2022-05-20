import { Router } from "express";
import clinicRouter from "./clinicRouter";
import paymentRouter from "./paymentRouter";
import userRouter from "./userRouter";

const router = Router();

router.use(userRouter);
router.use(clinicRouter);
router.use(paymentRouter);

export default router;