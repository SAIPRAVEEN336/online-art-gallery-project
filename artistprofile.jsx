/* Ensure entire page has background */
html, body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-color: #f2f5f7; /* Light grey-blue background */
  font-family: Arial, sans-serif;
}

.auction-wrapper {
  min-height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
}

.auction-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.auction-card {
  background: #ffffff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.auction-card:hover {
  transform: translateY(-5px);
}

.clickable-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  cursor: pointer;
}

.product-info {
  margin-top: 0.5rem;
}

.auction-details {
  margin-top: 1rem;
  font-size: 0.9rem;
}

.time-bid-section {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.timer span {
  font-weight: bold;
  margin-right: 5px;
}

.qty-section,
.bid-amounts {
  margin-top: 0.75rem;
}

.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.image-modal img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
  box-shadow: 0 0 20px #fff;
}
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
(CSS)
body {
  margin: 0;
  font-family: 'Helvetica Neue', sans-serif;
  background-color: #0c0c0c;
  color: white;
}

.artist-container {
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 40px;
}

.artist-card {
  border-radius: 12px;
  overflow: hidden;
  background-color: #1c1c1c;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

.artist-header {
  position: relative;
  height: 300px;
  background-size: cover;
  background-position: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
}

.artist-header h1 {
  font-size: 48px;
  margin: 0;
  z-index: 2;
}

.artwork-title {
  font-size: 18px;
  z-index: 2;
}


.artist-info {
  padding: 20px;
  background-color: #121212;
}

.artist-details {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.profile-pic {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 100%;
  border: 4px solid #1db954;
}

.text-block {
  flex: 1;
}

.description {
  font-size: 16px;
  margin-bottom: 10px;
  line-height: 1.6;
}

.bio {
  font-size: 15px;
  color: #cccccc;
  line-height: 1.5;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent 70%);
  z-index: 1;
  background-color: #f5f5dc; /* Light Beige */

}
