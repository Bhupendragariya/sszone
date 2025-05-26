import express from 'express';
import connectDB from './db/index.js';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.routes.js';

dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN ,
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cookieParser())




app.use("/api/v1/users", userRoutes);

connectDB()
.then(() => {
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

    app.on("error", (error) => {
        console.error("Server error:", error);
        throw error;
    });
})
.catch((error) => {
    console.error("MongoDB connection error:", error);
});



