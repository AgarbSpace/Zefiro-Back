import { Router } from "express";

const clinicRouter = Router();

clinicRouter.post("/clinicSignIn");
clinicRouter.post("/clinicSignUp");
clinicRouter.get("/app/main");

export default clinicRouter;