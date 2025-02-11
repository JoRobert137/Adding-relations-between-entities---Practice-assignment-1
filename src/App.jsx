import DestinationCard from './components/Card';
import './App.css';

const destinations = [
  {
    id: 1,
    name: "Bali",
    location: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    description: "Tropical paradise with beautiful beaches and rich culture."
  },
  {
    id: 2,
    name: "Paris",
    location: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    description: "City of lights, art, and culture. Home to iconic landmarks."
  },
  {
    id: 3,
    name: "Kyoto",
    location: "Japan",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
    description: "Ancient capital with stunning temples and gardens."
  },
  {
    id: 4,
    name: "Santorini",
    location: "Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
    description: "Beautiful island with white-washed buildings and blue domes."
  }
];

function App() {
  return (
    <div className="app">
      <header>
        <h1>Travel Destinations Explorer</h1>
      </header>

      <div className="destinations-grid">
        {destinations.map(destination => (
          <DestinationCard
            key={destination.id}
            destination={destination}
          />
        ))}
      </div>
    </div>
  );
}

export default App;