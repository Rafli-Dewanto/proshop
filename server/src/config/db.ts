import mongoose from 'mongoose';

async function connectDb() {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI as string);
        console.log('mongodb connected ->', conn.connection.host);
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
            process.exit(1);
        }
        console.error(error);
        process.exit(1);
    }
}

export default connectDb;
