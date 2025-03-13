import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "./config/database";
import studentRouter from "./routes/student.route";
import courseRouter from "./routes/course.route";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("api is ready!!!");
  });

app.use(express.json());

app.use("/api/students", studentRouter);
app.use("/api/courses", courseRouter);

  // app.post('/ownerCars/checkAndRecordEntry', (req, res) => {
  //   console.log(req.body); 
  //   res.send('Data received successfully!');
  // });



  app.listen(process.env.PORT!, async () => {
  
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
  });
  

  