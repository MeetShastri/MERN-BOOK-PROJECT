const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
// const { ObjectId } = require('mongodb');
const multer = require('multer');

//Multer Setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});


const upload = multer({ storage: storage });


//Middlewares
app.use(cors());
app.use(express.json());

app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
  res.send('Hello World');
})


//DzVcyWyL2awo4vRh DB Key

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://mern-book-store:DzVcyWyL2awo4vRh@cluster0.wgcl7u5.mongodb.net/?retryWrites=true&w=majority";

// Creating a MongoClient
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connecting the client to the server
    await client.connect();

    const bookCollections = client.db("BookInventory").collection("books");


    // Uploading book with an image of book
    app.post('/upload-book', upload.single('image'), async (req, res) => {
      try {
        const { title, authorName, category, description, bookPdfURL } = req.body;
        const imagePath = req.file.path;
        // Save book details to database including the image path
        const result = await bookCollections.insertOne({ title, authorName, category, description, bookPdfURL, imagePath });
        res.send(result);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });


    // Retrieving all books from database
    app.get('/all-books', async (req, res) => {
      try {
        const books = await bookCollections.find().toArray();

        // Modify each book object to include the image data as a base64-encoded string
        const booksWithImageData = books.map(book => ({
          ...book,
          // Assuming 'imageURL' is the field containing the image buffer in the database
          imageURL: `/uploads/${book.imagePath}`
        }));
        res.json(booksWithImageData);
      } catch (error) {
        // Handle errors
        res.status(500).json({ error: error.message });
      }
    });


    // Updating the book.
    app.patch("/book/:id", upload.single('image'), async (req, res) => {
      try {
        const id = req.params.id;
        const updateBookData = req.body;
        const filter = { _id: new ObjectId(id) };
        const updateDoc = {
          $set: {
            ...updateBookData
          },
        };

        // If there's an uploaded image updating the imagePath field
        if (req.file) {
          updateDoc.$set.imagePath = req.file.path;
        }

        // Update the book in the database
        const result = await bookCollections.updateOne(filter, updateDoc);

        if (result.modifiedCount === 1) {
          res.status(200).json({ message: "Book updated successfully" });
        } else {
          res.status(404).json({ error: "Book not found or not updated" });
        }
      } catch (error) {
        // Handle any errors that occur during the update operation
        console.error("Error updating book:", error);
        res.status(500).json({ error: "Failed to update book" });
      }
    });


    //Delete a book data
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.deleteOne(filter);
      res.send(result);
    })

    // To get Singlebook
    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.findOne(filter);
      res.send(result);

    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
