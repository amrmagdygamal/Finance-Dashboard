
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import kpiRoutes from "./routes/kpi.js";
import KPI from "./models/KPI.js";
import { kpis } from "./data/data.js"




dotenv.config();

const app = express();

app.use(express.json());

app.use(helmet());

app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));

app.use(morgan("common"));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());


/*Routes*/

app.use("kpi", kpiRoutes);


/* MONGOOSE SETUP */ 
const PORT = process.env.PORT || 9000;

mongoose.connect(process.env.CONNECT_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

  await mongoose.connections.db.dropDatabase();

  KPI.insertMany(kpis);
})
.catch((error) => console.log(`${error} did not connect`));