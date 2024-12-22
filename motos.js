// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Liste des voitures à vendre
    const cars = [
        {
            name: 'BMW M1000RR',
            images: [
                '/Images/BMW-1000-1.jpg',
                '/Images/BMW-1000-2.jpg',
                '/Images/BMW-1000-3.jpg'
            ],
            description: [
                'capot de selle',
                'silencieux akrapovic',
                'alarme'
            ],
            date: '18/03/2022',
            kilometers: '10 000',
            price: '22 500 €'
        },
        {
            name: 'Indian 1200 FTR',
            images: [
                '/Images/indian-1200-1.jpg',
                '/Images/indian-1200-2.jpg',
                '/Images/indian-1200-3.jpg'
            ],
            description: [],
            date: '09/2021',
            kilometers: '9 900',
            price: '15 800 €'
        },
        {
            name: 'Suzuki Savage LS650',
            images: [
                '/Images/suzuki-ls650-1.jpg',
                '/Images/suzuki-ls650-2.jpg',
                '/Images/suzuki-ls650-3.jpg'
            ],
            description: [],
            date: '1997',
            kilometers: '24 000',
            price: '2 200 €'
        },
        {
            name: 'Guzzi V7 II spécial',
            images: [
                'Images/guzzi-1.jpg',
                'Images/guzzi-2.jpg',
                'Images/guzzi-3.jpg'
            ],
            description: ['rétroviseur embout de guidon', 'guidon LSL', 'selle mono (moto guzzi) origine disponible'],
            kilometers: '15 306',
            date: '09/2013',
            price: '6 600 €'
        },
        {
            name: 'KTM 125 Dude',
            images: [
                'Images/dude-1.jpg',
                'Images/dude-2.jpg',
                'Images/dude-3.jpg'
            ],
            description: [],
            kilometers: '23 625',
            date: '10/2020',
            price: '3 100 €'
        }
    ];

    // Sélection de l'élément de la liste des voitures
    const carList = document.getElementById('car-list');

    // Création des éléments de la modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    const modalImage = document.createElement('img');
    const closeModal = document.createElement('span');
    closeModal.className = 'close';
    closeModal.innerHTML = '&times;';
    modalContent.appendChild(closeModal);
    modalContent.appendChild(modalImage);

    // Ajouter les boutons de carrousel
    const prevButton = document.createElement('button');
    prevButton.className = 'carousel-button prev';
    prevButton.innerHTML = '&#10094;';
    const nextButton = document.createElement('button');
    nextButton.className = 'carousel-button next';
    nextButton.innerHTML = '&#10095;';
    modalContent.appendChild(prevButton);
    modalContent.appendChild(nextButton);

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    closeModal.onclick = function() {
        modal.style.display = 'none';
    };

    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    let currentImageIndex = 0;
    let currentCarImages = [];

    function updateModalImage(index) {
        modalImage.src = currentCarImages[index];
    }

    prevButton.onclick = function(event) {
        event.stopPropagation(); // Empêcher la propagation pour ne pas fermer la modal
        currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : currentCarImages.length - 1;
        updateModalImage(currentImageIndex);
    };

    nextButton.onclick = function(event) {
        event.stopPropagation(); // Empêcher la propagation pour ne pas fermer la modal
        currentImageIndex = (currentImageIndex < currentCarImages.length - 1) ? currentImageIndex + 1 : 0;
        updateModalImage(currentImageIndex);
    };

    // Parcourir chaque voiture et créer les éléments correspondants
    cars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.classList.add('car-item');

        const carImage = document.createElement('img');
        carImage.src = car.images[0];
        carImage.alt = car.name;

        carImage.onclick = function() {
            currentCarImages = car.images;
            currentImageIndex = 0;
            updateModalImage(currentImageIndex);
            modal.style.display = 'block';
        };

        const carName = document.createElement('h2');
        carName.textContent = car.name;
        carName.classList.add('car-name');

        const carPrice = document.createElement('p');
        carPrice.textContent = ' Prix: ' + car.price;
        carPrice.classList.add('price');

        const motoKilometers = document.createElement('p');
        motoKilometers.textContent = 'Km: ' + car.kilometers;
        motoKilometers.classList.add('kilometers');

        const motoDate = document.createElement('p');
        motoDate.textContent = '📅 ' + car.date;
        motoDate.classList.add('date');

        const carDescriptionOption = document.createElement('p');
        carDescriptionOption.textContent = ' Options:';
        const carDescription = document.createElement('ul');
        carDescription.classList.add('description-moto');
        car.description.forEach(description => {
            const carDescriptionItem = document.createElement('li');
            carDescriptionItem.classList.add('description-moto-item');
            carDescriptionItem.textContent = description;
            carDescription.appendChild(carDescriptionItem);
        })


        carItem.appendChild(carImage);
        carItem.appendChild(carName);
        carItem.appendChild(carPrice);
        carItem.appendChild(motoKilometers);
        carItem.appendChild(motoDate);
        console.log(car.description);
        if (car.description.length > 0) {
            carItem.appendChild(carDescriptionOption);
            carItem.appendChild(carDescription);
        }



        carList.appendChild(carItem);
    });
});
