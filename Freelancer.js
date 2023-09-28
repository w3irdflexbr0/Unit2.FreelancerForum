const names = ['Alice', 'David', 'Carol', 'David', 'Eve']
const occupations = ['Writer', 'Teacher', 'Programmer', 'Designer', 'Consulant'];
const freelancers = [];
const freelancersList = document.getElementById('freelancerlist');
const averagePriceElement = document.getElementById('averageprice');

function generateRandomFreelancer() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomStartingPrice = Math.floor(Math.random() * 100) + 30;

    const newFreelancer = {
        name: randomName,
        occupation: randomOccupation,
        startingPrice: randomStartingPrice,
    };

    freelancers.push(newFreelancer);
    renderFreelancers();
}

function renderFreelancers() {
    freelancersList.innerHTML = freelancers.map(freelancer => `
        <li>
            <h3>Name: ${freelancer.name}</h3>
            <p>Occupation: ${freelancer.occupation}</p>
            <p>Starting Price: $${freelancer.startingPrice}</p>
        </li>
    `).join('');

    updateAveragePrice();
}

function updateAveragePrice() {
    const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
    const averagePrice = (totalPrices / freelancers.length || 0).toFixed(2);
    averagePriceElement.textContent = averagePrice;
}

setInterval(generateRandomFreelancer, 5000);