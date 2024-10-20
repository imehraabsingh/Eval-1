// Store and retrieve negotiation data
document.addEventListener('DOMContentLoaded', function () {
    // Function to store user's offer
    document.getElementById('negotiation-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const userOffer = document.getElementById('offer').value;
        const userMessage = document.getElementById('message').value;

        // Store the user's offer and message in localStorage
        localStorage.setItem('userOffer', userOffer);
        localStorage.setItem('userMessage', userMessage);

        // Display the user's offer and message
        displayUserOffer();
    });

    // Function to store service provider's counteroffer
    document.getElementById('provider-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const providerResponse = document.getElementById('provider-response').value;
        const providerMessage = document.getElementById('provider-message').value;

        // Store the service provider's counteroffer and message in localStorage
        localStorage.setItem('providerResponse', providerResponse);
        localStorage.setItem('providerMessage', providerMessage);

        // Display the provider's response
        displayProviderResponse();
    });

    // Function to display stored user's offer and message
    function displayUserOffer() {
        const userOffer = localStorage.getItem('userOffer');
        const userMessage = localStorage.getItem('userMessage');
        if (userOffer && userMessage) {
            const responseDiv = document.getElementById('response');
            responseDiv.innerHTML = `<p>User's Offer: $${userOffer}. Message: "${userMessage}".</p>`;
        }
    }

    // Function to display stored provider's counteroffer and message
    function displayProviderResponse() {
        const providerResponse = localStorage.getItem('providerResponse');
        const providerMessage = localStorage.getItem('providerMessage');
        if (providerResponse && providerMessage) {
            const providerDiv = document.getElementById('provider-response-display');
            providerDiv.innerHTML = `<p>Provider's Counter Offer: $${providerResponse}. Message: "${providerMessage}".</p>`;
        }
    }

    // Load and display stored data when the page loads
    displayUserOffer();
    displayProviderResponse();
});
