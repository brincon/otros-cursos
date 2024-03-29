import './styles/styles.css';
import logo from './media/logo.png';
import borderCollie from './media/borderCollie.jpg';
import rhodesian from './media/rhodesian.jpg';

function App() {
  return (
    <div className="App">
          <header>
        <ul className="navbar">
            <li>
                <img src={logo} alt="image" className="logo"/>
            </li>
            <li><button className="botonGenerico mainButton">Nuevo post</button></li>
            <li>
                <div className="buscar">
                    <input placeholder="Buscar una raza"/>
                    <i className="fa-solid fa-magnifying-glass botonGenerico iconoBusqueda"></i>
                </div>
            </li>
            <li><button className="botonGenerico secundaryButton">login</button></li>
            <li><button className="botonGenerico mainButton">Registro</button></li>
            
         
        </ul>
    </header>
    <main>
        <section>
            <h1>Razas de perros</h1>
            <ul className="breedCardContainer">
                <li className="breedCard">
                    <div className="contenedorImagen"> 
                        <img src={borderCollie} alt="Border Collie"/>
                    </div> 
                    <span className="breedTitle">Border Collie </span> 
                </li>
                <li className="breedCard">
                    <div className="contenedorImagen"> 
                        <img src={rhodesian} alt="Rhodesian"/>
                    </div>
                    <span className="breedTitle">Rhodesian </span>
                </li>
            </ul>
        </section>
        <section></section>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
