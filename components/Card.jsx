const Card = (props) => {
  return (
    <>
      <div className="  border-1 solid white w-70 h-130 bg-amber-400 shadow-lg shadow-indigo-500/50">
        <img src={props.image} alt="Moviecard" className="h-90 w-70" />
        <h1>
         
          <b> Name</b>:{props.name}
        </h1> 
        <p>
          <b> ReleaseDate</b>:{props.releaseDate}
        </p>
        <p>

          <b> Plot</b>:{props.plot}
        </p>
       <div className="   ">
          <div className="  flex justify-center items-center  bg-white  cursor-pointer  rounded-xl text-green-700 "> 
          <a href="#" className="">  <button className=" cursor-pointer  flex justify-center items-center "> Download</button></a>
        </div>
        <div className="  flex justify-center items-center  bg-yellow-800  cursor-pointer  rounded-xl text-white"> 
          <a href="#" className="">  <button className=" cursor-pointer  flex justify-center items-center "> watch now</button></a>
        </div>
       </div>
      </div>
    </>
  );
};

export default Card;
