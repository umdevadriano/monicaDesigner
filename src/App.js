import './App.css';
import Footer from './componentes/Footer/Footer';
import Header from './componentes/Header/Header';
import Main from './componentes/Main/Main';
import Navbar from './componentes/Navbar/Navbar';
import WhatsAppContato from './componentes/WhatsAppContato/WhatsAppContato';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';

function App() {
  return (
    <div className="App">
      <WhatsAppContato
        texto="Agendar horário"
        link="https://wa.me/5511984835370?text=Ol%C3%A1%21+Estou+no+site+e+gostaria+de+agendar+um+horário"
      />
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
export default App;
