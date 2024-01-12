import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header title="Adopta Un Perrito" />
        <main>
          <MyCard
            image="https://images.pexels.com/photos/3299901/pexels-photo-3299901.jpeg"
            name="Chica"
            description="Tierna perrita en adopción, sabe hacer sus necesidades afuera de la casa. Amigable con niños y otras mascotas."
            tagText="Mestizo"
            tagColor="danger"
          />
          <MyCard
            image="https://images.pexels.com/photos/11664574/pexels-photo-11664574.jpeg"
            name="Dante"
            description="Perrito con mucha energía, puede vivir en departamento pero requiere mucha dedicación para jugar y pasear. No le gustan los gatos."
            tagText="Jack Russell"
            tagColor="success"
          />
          <MyCard
            image="https://images.pexels.com/photos/7210628/pexels-photo-7210628.jpeg"
            name="Dominga"
            description="Perrita muy inteligente, requiere hacer mucho ejercicio y paseos diarios."
            tagText="Border Collie"
            tagColor="warning"
          />
          <MyCard
            image="https://images.pexels.com/photos/16652367/pexels-photo-16652367/free-photo-of-animal-perro-mascota-mono.jpeg"
            name="Charquicán"
            description="Este perrito es muy amoroso. Extremadamente tranquilo, puede vivir con personas de la tercera edad. Te dará mucho amor."
            tagText="Mestizo"
            tagColor="danger"
          />
        </main>
      <Footer />
    </>
  )
}

export default App
