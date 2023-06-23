//mongodb+srv://kenneth:password1234@cluster0.2hcoo7m.mongodb.net/?retryWrites=true&w=majority

const mongoose = require("mongoose");
const Movie = require("./model/movies");
const movieEntry = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    description:
      "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
  },
  {
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  },
  {
    title: "Fight Club",
    year: 1999,
    rating: 8.8,
    description:
      "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
  },
  {
    title: "Forrest Gump",
    year: 1994,
    rating: 8.8,
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
  },
  {
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
  },
  {
    title: "Goodfellas",
    year: 1990,
    rating: 8.7,
    description:
      "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    rating: 8.8,
    description:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
  },
  {
    title: "Inception",
    year: 2010,
    rating: 8.7,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  },
];
const seedDb = async () => {
  await mongoose.connect(
    "mongodb+srv://kenneth:password1234@cluster0.2hcoo7m.mongodb.net/?retryWrites=true&w=majority"
  );
  await Movie.deleteMany();
  console.log("Connected to the Database");
  const movie = await Movie.insertMany(movieEntry);
  mongoose.disconnect();
  console.log("disconnected!");
};
seedDb();
