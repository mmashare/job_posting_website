import express from "express";
import {createJob,getAUserJob,getAllJob,deleteJob,editJob,FindOnlyOneJob,search,savedJob,applyJob,getAppliedJOb,getSavedJOb} from "../controller/job.controller.js"
import { verifyToken } from "../middleware.js";
const router = express.Router();

// Creating a User
router.post("/job",verifyToken,createJob);

//get all job
router.get("/job",getAllJob);

//search all job
router.get("/job/search",search);

//get all aplly jobs
router.get("/job/applyjobs/:id",verifyToken,getAppliedJOb);

//get all saved job
router.get("/job/savedjobs/:id",verifyToken,getSavedJOb);


//get all job of One user
router.get("/job/single/:id",getAUserJob);

//get all job of One user
router.get("/job/onlyOne/:id",FindOnlyOneJob);

//delete job
router.delete("/job/:id",verifyToken,deleteJob);

//saved job
router.put("/job/saved/:id",verifyToken,savedJob);

//unsaved job
router.put("/job/apply/:id",verifyToken,applyJob);


export default router;