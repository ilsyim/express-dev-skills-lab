import mongoose, { mongo } from "mongoose"

mongoose.connect(process.env.DATABASE_URL)