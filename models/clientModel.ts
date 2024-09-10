// Importing mongoose library along with Document and Model types from it
import mongoose, { Document, Model } from "mongoose";

// Defining the structure of a todo item using TypeScript interfaces
export interface IClient {
  name: string;
  phone: string;
  email: string;
}


export interface IClientDocument extends IClient, Document {
  createdAt: Date;
  updatedAt: Date;
}

// Defining a mongoose schema for the todo document, specifying the types 
// and constraints
const clientSchema = new mongoose.Schema<IClientDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    // Automatically add 'createdAt' and 'updatedAt' fields to the document
    timestamps: true,
  }
);

// Creating a mongoose model for the todo document
const Client: Model<IClientDocument> =
  mongoose.models?.Client || mongoose.model("Client", clientSchema);

export default Client;