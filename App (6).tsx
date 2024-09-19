import React, { useState } from "react";
import PropTypes from "prop-types";

// Інтерфейс для типізації props
interface RestaurantProps {
  name: string;
  address: string;
  rating: number;
  cuisine: string;
  imageUrl: string;
}

// Функціональний компонент для відображення інформації про ресторан
const Restaurant: React.FC<RestaurantProps> = ({
  name,
  address,
  rating,
  cuisine,
  imageUrl,
}) => {
  // Стани для редагованих полів
  const [editable, setEditable] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedAddress, setUpdatedAddress] = useState(address);
  const [updatedRating, setUpdatedRating] = useState(rating);
  const [updatedCuisine, setUpdatedCuisine] = useState(cuisine);
  const [updatedImageUrl, setUpdatedImageUrl] = useState(imageUrl);

  const handleSave = () => {
    setEditable(false); // Вимикаємо режим редагування після збереження
  };

  return (
    <div style={styles.container}>
      {editable ? (
        <>
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            value={updatedAddress}
            onChange={(e) => setUpdatedAddress(e.target.value)}
            style={styles.input}
          />
          <input
            type="number"
            value={updatedRating}
            onChange={(e) => setUpdatedRating(parseFloat(e.target.value))}
            style={styles.input}
            step="0.1"
            min="0"
            max="5"
          />
          <input
            type="text"
            value={updatedCuisine}
            onChange={(e) => setUpdatedCuisine(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            value={updatedImageUrl}
            onChange={(e) => setUpdatedImageUrl(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleSave} style={styles.button}>
            Зберегти
          </button>
        </>
      ) : (
        <>
          <h2>{updatedName}</h2>
          <p>
            <strong>Адреса:</strong> {updatedAddress}
          </p>
          <p>
            <strong>Рейтинг:</strong> {updatedRating} ⭐
          </p>
          <p>
            <strong>Тип кухні:</strong> {updatedCuisine}
          </p>
          <img src={updatedImageUrl} alt={updatedName} style={styles.image} />
          <button onClick={() => setEditable(true)} style={styles.button}>
            Редагувати
          </button>
        </>
      )}
    </div>
  );
};

// Прописуємо PropTypes для валідації пропсів
Restaurant.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  cuisine: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

// Компонент App, який передає дані про ресторан
const App: React.FC = () => {
  const restaurantData = {
    name: "Ресторан 'Українські смаколики'",
    address: "вул. Незалежності, 123, Київ, Україна",
    rating: 4.8,
    cuisine: "Українська",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQIlqIPA6CXVBd1garIZkGIAQkwQ5l0VBi-Q&s",
  };

  return (
    <div>
      <h1>Інформація про ресторан</h1>
      <Restaurant
        name={restaurantData.name}
        address={restaurantData.address}
        rating={restaurantData.rating}
        cuisine={restaurantData.cuisine}
        imageUrl={restaurantData.imageUrl}
      />
    </div>
  );
};

// Стилі для компоненту
const styles = {
  container: {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "400px",
    margin: "0 auto",
    textAlign: "center" as "center",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  input: {
    marginBottom: "10px",
    padding: "8px",
    fontSize: "16px",
    width: "100%",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default App;
