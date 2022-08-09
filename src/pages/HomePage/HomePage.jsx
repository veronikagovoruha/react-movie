import Movies from "../../components/Movies";

const HomePage = () =>{
    return(
        <main>
            <div>
               <h1>Trending Today</h1> 
               <Movies/>
            </div>
        </main>
    )
}

export default HomePage;