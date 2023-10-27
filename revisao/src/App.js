import ProductCard from './components/ProductCard';
import Imagem from './img/karmafigure.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Action Figure </h1>
      <ProductCard 
      nome="Karma Action Figure"
      imagem={Imagem}
      preco="R$150,00"
      descricao="Action Figure Karma from League of Legends"
      caracteristica="Skins Disponíveis do Action Figure:"
      lista1="Karma Original"
      lista2="Karma Odisseia"
      lista3="Karma Rainha das Fadas"
      lista4="Karma Dragoa da Tranquilidade"
      lista5="Modelo feito a base de resina pela Riot Games"/>
    </div>
  );
}

export default App;
