import {Router} from "express";
export const router = Router();
import { movieController } from "../controller/movies.js";
import { token  } from "../services/jwt.js";

router.get("/",movieController.getAll);

router.get("/s",movieController.getByTitle);


router.get("/:id", (req,res)=> { 
    const {id} = req.params;
    res.send(`list a movies by id:${id}`);
});

router.post("/",token.validate,movieController.createOne);

router.patch("/:id",movieController.updateMovie);

router.delete("/:id",movieController.deleteOne);