// Example list of services
const services = [
    { name: 'House Cleaning', price: 50 },
    { name: 'Dish Washing', price: 20 }
];

// Offer submission logic
document.getElementById('submit-offer').addEventListener('click', () => {
    const userOffer = document.getElementById('price-offer').value;
    const selectedService = services[0]; // Assuming the first service is selected
    const offerStatus = document.getElementById('offer-status');

    if (userOffer >= selectedService.price) {
        offerStatus.textContent = `Offer accepted! You've booked the service for $${userOffer}`;
    } else {
        offerStatus.textContent = `Offer too low! Minimum price is $${selectedService.price}`;
    }
});

// Reviews handling
const reviews = [];

document.getElementById('submit-review').addEventListener('click', () => {
    const reviewText = document.getElementById('review-text').value;
    if (reviewText) {
        reviews.push(reviewText);
        renderReviews();
        document.getElementById('review-text').value = '';
    }
});

function renderReviews() {
    const reviewsContainer = document.getElementById('reviews-container');
    reviewsContainer.innerHTML = '';
    reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'review';
        reviewDiv.textContent = review;
        reviewsContainer.appendChild(reviewDiv);
    });
}

// Initial render of services and reviews
renderReviews();
