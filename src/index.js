const navDialog = document.querySelector('#nav-dialog');
    function handleMenu() {
        console.log('clicked');
        if (navDialog) {
            navDialog.classList.toggle('hidden');
        } else {
            console.error('Element #nav-dialog not found');
        }
    }

    function toggleLocations(button) {
        const locationsDiv = button.nextElementSibling;
        locationsDiv.classList.toggle('hidden');
    }
    function toggleUserMenu() {
        const popup = document.getElementById('account-popup');
        popup.classList.toggle('hidden'); 
    }
    function initMap() {
        const map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 0, lng: 0 }, 
            zoom: 5,
        });

        fetch('https://deelly.com/api/nearby_deals/')
            .then(response => response.json())
            .then(responseData => {
                const features = responseData.data.map(deal => ({
                    position: {
                        lat: parseFloat(deal.location.lat),
                        lng: parseFloat(deal.location.lng),
                    },
                    title: deal.business_deal.title,
                }));

                features.forEach(feature => {
                    new google.maps.Marker({
                        position: feature.position,
                        map: map,
                        title: feature.title,
                        icon: '../public/location.svg' 
                        
           
                    });
                });

                const bounds = new google.maps.LatLngBounds();
                features.forEach(feature => bounds.extend(feature.position));
                map.fitBounds(bounds);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

