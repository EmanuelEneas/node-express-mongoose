
import { Movie } from "../model/mongoDB/movie.js";

 export const movieController ={
     async getAll(req,res){
   const movieCollection = await  Movie.find();
 movieCollection
    ?
    res.status(200).json({
      success:true,
      message :"list of movies",
       data:movieCollection,
      })
   : 
    res
    .status(404)
    .json({success :false, message :"no movies" });

} ,
  async getByTitle(req,res){
    const {title} =req.query;
    if(!title)
        res 
      .status(400)
      .json({success:false,message :"Missing title query params"});

      try{
const movies = await Movie.find({title:{$regex:title,$options:"i"},
});
if(!movies.length){
  return
  res.status(404)
  .json({success:false,
    message:`no movies with ${title } in the title`,

  });
}
return
  res.
  status(200)
  .json({
    success:true,
    message:"movies by query title",
    data:movies});

}catch(err){
  return
  res.status(500).json({success:false,
    message:`Internal Error:${err.message}`});
}

},

async createOne(req,res){
  const {title,year,director,duration,poster,genre,rate} =req.body;
   try {
  const newMovie = new Movie({
    title,
    year,
    director,
    duration,
    poster,
    genre,
    rate,

  });

 
     const saveMovie =await newMovie.save();
    res.status(200)
    .json({success:true,message :"Movie created",data:saveMovie});
    
  } catch (err) {
    res.status(400).json({success:false,message:"error"});
  }
    }, 
    async updateMovie(req,res){
      const allowedFields =[

        "title",
        "year",
        "director",
        "duration",
        "poster",
        "genre",
        "rate",
      ];
      try {
        const updates = Object.keys (req.body)
        const isValidOperation =updates.every((update)=>
          allowedFields.includes(update)
      );

      if(!isValidOperation){
        return res.status(400).json({sucess :false,
          message:"Invalid fiel in the request body.operation aborted",
        });
      }
         const movie = await Movie.findByIdAnUpdate(req.paramas.id,req.body,{new:true});
        if(!movie){
          return res.status(404).json({
            success:false,
            message :`Movie not found`,
          });
        }
        res
        .status(200)
        .json({success:true,message :"Movie updated",data: movie});
      } catch (error) {
        res.status(500).json({
          success:false,
          message:`Internal Server Error ${error.message}`,
        });
        
      }
     
    },

    async deleteOne(req,res){
      try {
        const  movie = await Movie.findByIdAndDelete(req.params.id);
        if(!movie) {
          return res.status(404).json({
            success:false,
            message :`Movie not found`,
        });
        }
        res.send(204);
      }
       catch (err) {
        res.status(500).json({success:false,message:"Coult not  deleted"});
      }
    },
    };