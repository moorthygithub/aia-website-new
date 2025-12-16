import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useRef } from 'react';


const countryCoordinates = {
  "bangladesh": [23.6850, 90.3563],
  "canada": [56.1304, -106.3468],
  "germany": [51.1657, 10.4515],
  "ghana": [7.9465, -1.0232],
  "netherlands": [52.1326, 5.2913],
  "nigeria": [9.0820, 8.6753],
  "qatar": [25.3548, 51.1839],
  "uae": [23.4241, 53.8478],
  "uk": [55.3781, -3.4360],
  "usa": [37.0902, -95.7129]
};


const indiaStateCoordinates = {
  "andhra-pradesh": [15.9129, 79.7400],
  "bihar": [25.0961, 85.3131],
  "delhi": [28.7041, 77.1025],
  "gujrat": [22.2587, 71.1924],
  "haryana": [29.0588, 76.0856],
  "himachal-pradesh": [31.1048, 77.1734],
  "karnataka": [15.3173, 75.7139],
  "kerala": [10.8505, 76.2711],
  "kolkata": [22.5726, 88.3639],
  "madhya-pradesh": [22.9734, 78.6569],
  "maharastra": [19.7515, 75.7139],
  "punjab": [31.1471, 75.3412],
  "rajasthan": [27.0238, 74.2179],
  "tamil-nadu": [11.1271, 78.6569],
  "uttar-pradesh": [26.8467, 80.9462]
};


const data = {
  "countries": {
    "bangladesh": [
      {
        "name": "Md Zane Alam Mashuk",
        "file": "md-zane-alam-mashuk.png",
        "url": "https://aia.in.net/map/images/bangladesh/md-zane-alam-mashuk.png",
        "course": "CAMS"
      },
      {
        "name": "Ramprosad Das",
        "file": "ramprosad-das.png",
        "url": "https://aia.in.net/map/images/bangladesh/ramprosad-das.png",
        "course": "CAMS"
      }
    ],
    "canada": [
      {
        "name": "Hariharasudhan Narayanasami",
        "file": "hariharasudhan-narayanasami.png",
        "url": "https://aia.in.net/map/images/canada/hariharasudhan-narayanasami.png",
        "course": "CAMS"
      },
      {
        "name": "Rahul Munjal",
        "file": "rahul-munjal.png",
        "url": "https://aia.in.net/map/images/canada/rahul-munjal.png",
        "course": "CIA"
      }
    ],
    "germany": [
      {
        "name": "Jaspal Singh",
        "file": "jaspal-singh.png",
        "url": "https://aia.in.net/map/images/germany/jaspal-singh.png",
        "course": "CIA"
      },
      {
        "name": "Priyanka Pandey",
        "file": "priyanka-pandey.jpg",
        "url": "https://aia.in.net/map/images/germany/priyanka-pandey.jpg",
        "course": "CFE"
      }
    ],
    "ghana": [
      {
        "name": "Evans Essienyi",
        "file": "evans-essienyi.png",
        "url": "https://aia.in.net/map/images/ghana/evans-essienyi.png",
        "course": "CAMS"
      }
    ],
    "netherlands": [
      {
        "name": "Jeny Shah",
        "file": "jeny-shah.jpg",
        "url": "https://aia.in.net/map/images/netherlands/jeny-shah.jpg",
        "course": "CFE"
      }
    ],
    "nigeria": [
      {
        "name": "Nnamdi Ojebah",
        "file": "nnamdi-ojebah.png",
        "url": "https://aia.in.net/map/images/nigeria/nnamdi-ojebah.png",
        "course": "CAMS"
      }
    ],
    "qatar": [
      {
        "name": "Fathimath Shasna",
        "file": "fathimath-shasna.png",
        "url": "https://aia.in.net/map/images/qatar/fathimath-shasna.png",
        "course": "CIA"
      },
      {
        "name": "Stevin N Antony",
        "file": "stevin-n-antony.png",
        "url": "https://aia.in.net/map/images/qatar/stevin-n-antony.png",
        "course": "CIA"
      }
    ],
    "uae": [
      {
        "name": "Akash Premkumar",
        "file": "akash-premkumar.jpg",
        "url": "https://aia.in.net/map/images/uae/akash-premkumar.jpg",
        "course": "CFE"
      },
      {
        "name": "Marc Mikhael",
        "file": "marc-mikhael.jpg",
        "url": "https://aia.in.net/map/images/uae/marc-mikhael.jpg",
        "course": "CFE"
      },
      {
        "name": "Mohammad Shadab Hussain",
        "file": "mohammad-shadab-hussain.png",
        "url": "https://aia.in.net/map/images/uae/mohammad-shadab-hussain.png",
        "course": "CIA"
      },
      {
        "name": "Prathwi Shetty",
        "file": "prathwi-shetty.jpg",
        "url": "https://aia.in.net/map/images/uae/prathwi-shetty.jpg",
        "course": "CFE"
      },
      {
        "name": "Saad Kareem",
        "file": "saad-kareem.jpg",
        "url": "https://aia.in.net/map/images/uae/saad-kareem.jpg",
        "course": "CFE"
      },
      {
        "name": "Yogender Sharma",
        "file": "yogender-sharma.png",
        "url": "https://aia.in.net/map/images/uae/yogender-sharma.png",
        "course": "CIA"
      }
    ],
    "uk": [
      {
        "name": "Abhishek Uttam",
        "file": "abhishek-uttam.jpg",
        "url": "https://aia.in.net/map/images/uk/abhishek-uttam.jpg",
        "course": "CFE"
      }
    ],
    "usa": [
      {
        "name": "Alfred Tumbe Yennu",
        "file": "alfred-tumbe-yennu.png",
        "url": "https://aia.in.net/map/images/usa/alfred-tumbe-yennu.png",
        "course": "CAMS"
      },
      {
        "name": "Karthik Madhavan",
        "file": "karthik-madhavan.jpg",
        "url": "https://aia.in.net/map/images/usa/karthik-madhavan.jpg",
        "course": "CFE"
      },
      {
        "name": "Rupesh Chauhan",
        "file": "rupesh-chauhan.jpg",
        "url": "https://aia.in.net/map/images/usa/rupesh-chauhan.jpg",
        "course": "CFE"
      },
      {
        "name": "Venkat Sandeep",
        "file": "venkat-sandeep.jpg",
        "url": "https://aia.in.net/map/images/usa/venkat-sandeep.jpg",
        "course": "CFE"
      }
    ]
  },
  "india": {
    "andhra-pradesh": [
      {
        "name": "Anil Tenneti",
        "file": "Anil Tenneti.jpg",
        "url": "https://aia.in.net/map/images/india/andhra-pradesh/Anil%20Tenneti.jpg",
        "course": "CFE"
      },
      {
        "name": "Jagadish Prasad Das",
        "file": "jagadish-prasad-das.png",
        "url": "https://aia.in.net/map/images/india/andhra-pradesh/jagadish-prasad-das.png",
        "course": "CIA"
      },
      {
        "name": "K V Sai Nikhil",
        "file": "K V Sai Nikhil.jpg",
        "url": "https://aia.in.net/map/images/india/andhra-pradesh/K%20V%20Sai%20Nikhil.jpg",
        "course": "CFE"
      },
      {
        "name": "Manisha Ganga",
        "file": "manisha-ganga.png",
        "url": "https://aia.in.net/map/images/india/andhra-pradesh/manisha-ganga.png",
        "course": "CIA"
      },
      {
        "name": "Sourav Ghosh",
        "file": "sourav-ghosh.jpg",
        "url": "https://aia.in.net/map/images/india/andhra-pradesh/sourav-ghosh.jpg",
        "course": "CFE"
      },
      {
        "name": "Vijay Sagar Madhanu",
        "file": "vijay-sagar-madhanu.png",
        "url": "https://aia.in.net/map/images/india/andhra-pradesh/vijay-sagar-madhanu.png",
        "course": "CIA"
      }
    ],
    "bihar": [
      {
        "name": "Kumar Abhishek",
        "file": "kumar-abhishek.jpg",
        "url": "https://aia.in.net/map/images/india/bihar/kumar-abhishek.jpg",
        "course": "CFE"
      }
    ],
    "delhi": [
      {
        "name": "Akshit Madan",
        "file": "akshit-madan.png",
        "url": "https://aia.in.net/map/images/india/delhi/akshit-madan.png",
        "course": "CIA"
      },
      {
        "name": "Gursimran Singh",
        "file": "gursimran-singh.png",
        "url": "https://aia.in.net/map/images/india/delhi/gursimran-singh.png",
        "course": "CIA"
      },
      {
        "name": "Himanshu Arora",
        "file": "himanshu-arora.png",
        "url": "https://aia.in.net/map/images/india/delhi/himanshu-arora.png",
        "course": "CIA"
      },
      {
        "name": "Kirti Jain",
        "file": "kirti-jain.png",
        "url": "https://aia.in.net/map/images/india/delhi/kirti-jain.png",
        "course": "CIA"
      },
      {
        "name": "Neha Singh",
        "file": "neha-singh.jpg",
        "url": "https://aia.in.net/map/images/india/delhi/neha-singh.jpg",
        "course": "CFE"
      },
      {
        "name": "Yash Garg",
        "file": "yash-garg.png",
        "url": "https://aia.in.net/map/images/india/delhi/yash-garg.png",
        "course": "CIA"
      }
    ],
    "gujrat": [
      {
        "name": "Ca Mahendra Singh",
        "file": "ca-mahendra-singh.jpg",
        "url": "https://aia.in.net/map/images/india/gujrat/ca-mahendra-singh.jpg",
        "course": "CFE"
      },
      {
        "name": "Hetvi Lakhani",
        "file": "hetvi-lakhani.jpg",
        "url": "https://aia.in.net/map/images/india/gujrat/hetvi-lakhani.jpg",
        "course": "CFE"
      },
      {
        "name": "Rugved",
        "file": "rugved.png",
        "url": "https://aia.in.net/map/images/india/gujrat/rugved.png",
        "course": "CIA"
      }
    ],
    "haryana": [
      {
        "name": "Jaskaran Singh",
        "file": "jaskaran-singh.png",
        "url": "https://aia.in.net/map/images/india/haryana/jaskaran-singh.png",
        "course": "CIA"
      },
      {
        "name": "Kamalpreet Kaur",
        "file": "kamalpreet-kaur.png",
        "url": "https://aia.in.net/map/images/india/haryana/kamalpreet-kaur.png",
        "course": "CIA"
      },
      {
        "name": "Komal Aggarwal",
        "file": "komal-aggarwal.png",
        "url": "https://aia.in.net/map/images/india/haryana/komal-aggarwal.png",
        "course": "CIA"
      },
      {
        "name": "Lovish Sardana",
        "file": "lovish-sardana.jpg",
        "url": "https://aia.in.net/map/images/india/haryana/lovish-sardana.jpg",
        "course": "CFE"
      },
      {
        "name": "Rajni Kumari",
        "file": "rajni-kumari.jpg",
        "url": "https://aia.in.net/map/images/india/haryana/rajni-kumari.jpg",
        "course": "CFE"
      },
      {
        "name": "Vishesh Kumar",
        "file": "vishesh-kumar.jpg",
        "url": "https://aia.in.net/map/images/india/haryana/vishesh-kumar.jpg",
        "course": "CFE"
      }
    ],
    "himachal-pradesh": [
      {
        "name": "Manish Kumar",
        "file": "manish-kumar.png",
        "url": "https://aia.in.net/map/images/india/himachal-pradesh/manish-kumar.png",
        "course": "CAMS"
      }
    ],
    "karnataka": [
      {
        "name": "Ankita Bihari",
        "file": "ankita-bihari.png",
        "url": "https://aia.in.net/map/images/india/karnataka/ankita-bihari.png",
        "course": "CIA"
      },
      {
        "name": "Divyank Rawat",
        "file": "divyank-rawat.png",
        "url": "https://aia.in.net/map/images/india/karnataka/divyank-rawat.png",
        "course": "CIA"
      },
      {
        "name": "Donald Pinto",
        "file": "donald-pinto.png",
        "url": "https://aia.in.net/map/images/india/karnataka/donald-pinto.png",
        "course": "CIA"
      },
      {
        "name": "Somya Gaur",
        "file": "somya-gaur.png",
        "url": "https://aia.in.net/map/images/india/karnataka/somya-gaur.png",
        "course": "CIA"
      },
      {
        "name": "Sourav Sharma",
        "file": "sourav-sharma.png",
        "url": "https://aia.in.net/map/images/india/karnataka/sourav-sharma.png",
        "course": "CIA"
      },
      {
        "name": "Suraj Ramesh",
        "file": "suraj-ramesh.png",
        "url": "https://aia.in.net/map/images/india/karnataka/suraj-ramesh.png",
        "course": "CIA"
      }
    ],
    "kerala": [
      {
        "name": "Anup P",
        "file": "anup-p.jpg",
        "url": "https://aia.in.net/map/images/india/kerala/anup-p.jpg",
        "course": "CFE"
      },
      {
        "name": "Joyal Sijo",
        "file": "joyal-sijo.png",
        "url": "https://aia.in.net/map/images/india/kerala/joyal-sijo.png",
        "course": "CIA"
      }
    ],
    "kolkata": [
      {
        "name": "Abhishek Agarwal",
        "file": "abhishek-agarwal.jpg",
        "url": "https://aia.in.net/map/images/india/kolkata/abhishek-agarwal.jpg",
        "course": "CFE"
      },
      {
        "name": "Chinmoy Dey",
        "file": "chinmoy-dey.jpg",
        "url": "https://aia.in.net/map/images/india/kolkata/chinmoy-dey.jpg",
        "course": "CFE"
      },
      {
        "name": "Rajit Chatterjee",
        "file": "rajit-chatterjee.png",
        "url": "https://aia.in.net/map/images/india/kolkata/rajit-chatterjee.png",
        "course": "CIA"
      },
      {
        "name": "Sajal Kumar",
        "file": "sajal-kumar.png",
        "url": "https://aia.in.net/map/images/india/kolkata/sajal-kumar.png",
        "course": "CIA"
      },
      {
        "name": "Urmimala Das",
        "file": "urmimala-das.png",
        "url": "https://aia.in.net/map/images/india/kolkata/urmimala-das.png",
        "course": "CIA"
      }
    ],
    "madhya-pradesh": [
      {
        "name": "Ashish Nigam",
        "file": "ashish-nigam.jpg",
        "url": "https://aia.in.net/map/images/india/madhya-pradesh/ashish-nigam.jpg",
        "course": "CFE"
      },
      {
        "name": "Palash Duble",
        "file": "palash-duble.jpg",
        "url": "https://aia.in.net/map/images/india/madhya-pradesh/palash-duble.jpg",
        "course": "CFE"
      }
    ],
    "maharastra": [
      {
        "name": "Aradhana Upadhyay",
        "file": "aradhana-upadhyay.png",
        "url": "https://aia.in.net/map/images/india/maharastra/aradhana-upadhyay.png",
        "course": "CIA"
      },
      {
        "name": "Christy Abraham",
        "file": "christy-abraham.png",
        "url": "https://aia.in.net/map/images/india/maharastra/christy-abraham.png",
        "course": "CIA"
      },
      {
        "name": "Mayank Jain",
        "file": "mayank-jain.png",
        "url": "https://aia.in.net/map/images/india/maharastra/mayank-jain.png",
        "course": "CIA"
      },
      {
        "name": "Musham Panchakshar",
        "file": "musham-panchakshar.png",
        "url": "https://aia.in.net/map/images/india/maharastra/musham-panchakshar.png",
        "course": "CIA"
      },
      {
        "name": "Ranjan Kumar",
        "file": "ranjan-kumar.png",
        "url": "https://aia.in.net/map/images/india/maharastra/ranjan-kumar.png",
        "course": "CIA"
      },
      {
        "name": "Rohit Chawla",
        "file": "rohit-chawla.png",
        "url": "https://aia.in.net/map/images/india/maharastra/rohit-chawla.png",
        "course": "CIA"
      }
    ],
    "punjab": [
      {
        "name": "Gautam Behl",
        "file": "gautam-behl.jpg",
        "url": "https://aia.in.net/map/images/india/punjab/gautam-behl.jpg",
        "course": "CFE"
      }
    ],
    "rajasthan": [
      {
        "name": "Gunjan Agnani",
        "file": "gunjan-agnani.jpg",
        "url": "https://aia.in.net/map/images/india/rajasthan/gunjan-agnani.jpg",
        "course": "CFE"
      },
      {
        "name": "Taha Hita",
        "file": "taha-hita.png",
        "url": "https://aia.in.net/map/images/india/rajasthan/taha-hita.png",
        "course": "CIA"
      }
    ],
    "tamil-nadu": [
      {
        "name": "Ashika Jamal",
        "file": "ashika-jamal.jpg",
        "url": "https://aia.in.net/map/images/india/tamil-nadu/ashika-jamal.jpg",
        "course": "CFE"
      },
      {
        "name": "Kalpana Subramanian",
        "file": "kalpana-subramanian.jpg",
        "url": "https://aia.in.net/map/images/india/tamil-nadu/kalpana-subramanian.jpg",
        "course": "CFE"
      },
      {
        "name": "Piruthiviraj P",
        "file": "piruthiviraj-p.jpg",
        "url": "https://aia.in.net/map/images/india/tamil-nadu/piruthiviraj-p.jpg",
        "course": "CFE"
      },
      {
        "name": "Sarathkumar Rajendran",
        "file": "sarathkumar-rajendran.png",
        "url": "https://aia.in.net/map/images/india/tamil-nadu/sarathkumar-rajendran.png",
        "course": "CIA"
      },
      {
        "name": "Sateesh Kumar",
        "file": "sateesh-kumar.png",
        "url": "https://aia.in.net/map/images/india/tamil-nadu/sateesh-kumar.png",
        "course": "CIA"
      },
      {
        "name": "Srinath Padmanabhan",
        "file": "srinath-padmanabhan.jpg",
        "url": "https://aia.in.net/map/images/india/tamil-nadu/srinath-padmanabhan.jpg",
        "course": "CFE"
      }
    ],
    "uttar-pradesh": [
      {
        "name": "Ca Dheeraj Verma",
        "file": "ca-dheeraj-verma.jpg",
        "url": "https://aia.in.net/map/images/india/uttar-pradesh/ca-dheeraj-verma.jpg",
        "course": ""
      },
      {
        "name": "Disha Srivastava",
        "file": "disha-srivastava.png",
        "url": "https://aia.in.net/map/images/india/uttar-pradesh/disha-srivastava.png",
        "course": "CAMS"
      },
      {
        "name": "Pushkar Joshi",
        "file": "pushkar-joshi.jpg",
        "url": "https://aia.in.net/map/images/india/uttar-pradesh/pushkar-joshi.jpg",
        "course": "CFE"
      }
    ]
  }
};


const transformDataToLocations = () => {
  const locations = [];
  let idCounter = 1;


  Object.entries(data.countries).forEach(([country, people]) => {
    if (people.length > 0 && countryCoordinates[country]) {
      const cityName = country.charAt(0).toUpperCase() + country.slice(1);
      locations.push({
        id: idCounter++,
        position: countryCoordinates[country],
        city: cityName.toUpperCase(),
        people: people.map(person => ({
          name: person.name,
          avatar: person.url,
          role: person.course || "Not specified"
        }))
      });
    }
  });


  Object.entries(data.india).forEach(([state, people]) => {
    if (people.length > 0 && indiaStateCoordinates[state]) {
      const stateName = state.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      locations.push({
        id: idCounter++,
        position: indiaStateCoordinates[state],
        city: stateName,
        people: people.map(person => ({
          name: person.name,
          avatar: person.url,
          role: person.course || "Not specified"
        }))
      });
    }
  });

  return locations;
};

const locations = transformDataToLocations();


const createPinIcon = (count) => {
  return L.divIcon({
    className: 'custom-pin-icon',
    html: `
      <div style="position: relative; width: 40px; height: 50px;">
        <svg class="pin-svg" width="40" height="50" viewBox="0 0 40 50" style="filter: drop-shadow(0 4px 12px rgba(59, 130, 246, 0.4)); transition: all 0.3s ease;">
          <defs>
            <linearGradient id="pinGradient-${count}" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#2563eb;stop-opacity:1" />
            </linearGradient>
          </defs>
          <path d="M20 0C11.716 0 5 6.716 5 15c0 8.284 15 35 15 35s15-26.716 15-35C35 6.716 28.284 0 20 0z" 
                fill="url(#pinGradient-${count})" 
                stroke="white" 
                stroke-width="2"/>
          <circle cx="20" cy="15" r="8" fill="white"/>
          <text x="20" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">${count}</text>
        </svg>
      </div>
    `,
    iconSize: [40, 50],
    iconAnchor: [20, 50],
    popupAnchor: [0, -50]
  });
};


const MapBoundsRestriction = () => {
  const map = useMap();
  
  useEffect(() => {
   
    const bounds = L.latLngBounds(
      L.latLng(-85, -180),
      L.latLng(85, 180)   
    );
    
    map.setMaxBounds(bounds);
    map.on('drag', function() {
      map.panInsideBounds(bounds, { animate: false });
    });
    
    
    map.setMinZoom(2);
    map.setMaxZoom(18);
  }, [map]);
  
  return null;
};

const Map = () => {
  const markerRefs = useRef({});

  const handleMarkerMouseOver = (markerId) => {
    const marker = markerRefs.current[markerId];
    if (marker) {
      marker.openPopup();
    }
  };

  const handleMarkerMouseOut = (markerId) => {
    const marker = markerRefs.current[markerId];
    if (marker) {
 
      setTimeout(() => {
        const popup = marker.getPopup();
        const popupElement = popup && popup.getElement();
        
        if (popupElement && !popupElement.matches(':hover')) {
          marker.closePopup();
        }
      }, 100);
    }
  };

  const handlePopupMouseEnter = (markerId) => {
    const marker = markerRefs.current[markerId];
    if (marker) {
      marker.openPopup();
    }
  };

  const handlePopupMouseLeave = (markerId) => {
    const marker = markerRefs.current[markerId];
    if (marker) {
      marker.closePopup();
    }
  };

  return (
    <>
      <style>
        {`
          .leaflet-container {
            background: #a8d5e2;
          }
          
          .leaflet-popup {
            margin-bottom: 15px;
          }
          
          .leaflet-popup-content-wrapper {
            padding: 0;
            border-radius: 10px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
            overflow: hidden;
            animation: popupSlideIn 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .leaflet-popup-content {
            margin: 0;
            width: 240px !important;
          }
          
          .leaflet-popup-tip-container {
            animation: popupSlideIn 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .leaflet-popup-close-button {
            padding: 8px 8px 0 0 !important;
            font-size: 20px !important;
            color: #64748b !important;
            transition: color 0.2s;
          }
          
          .leaflet-popup-close-button:hover {
            color: #0f172a !important;
          }
          
          @keyframes popupSlideIn {
            from {
              opacity: 0;
              transform: translateY(-8px) scale(0.96);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          .custom-pin-icon {
            cursor: pointer;
          }
          
          .custom-pin-icon:hover .pin-svg {
            transform: scale(1.1) translateY(-2px);
            filter: drop-shadow(0 6px 20px rgba(59, 130, 246, 0.5)) !important;
          }
          
          .person-item {
            animation: personSlideIn 0.2s ease-out forwards;
            opacity: 0;
          }
          
          .person-item:nth-child(1) { animation-delay: 0.03s; }
          .person-item:nth-child(2) { animation-delay: 0.06s; }
          .person-item:nth-child(3) { animation-delay: 0.09s; }
          .person-item:nth-child(4) { animation-delay: 0.12s; }
          .person-item:nth-child(5) { animation-delay: 0.15s; }
          .person-item:nth-child(6) { animation-delay: 0.18s; }
          
          @keyframes personSlideIn {
            from {
              opacity: 0;
              transform: translateX(-8px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          /* Gray overlay for restricted areas */
          .leaflet-tile-container {
            filter: contrast(1.05) saturate(1.1);
          }
          
          /* Scrollbar styling */
          .compact-scroll::-webkit-scrollbar {
            width: 4px;
          }
          
          .compact-scroll::-webkit-scrollbar-track {
            background: transparent;
          }
          
          .compact-scroll::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 4px;
          }
          
          .compact-scroll::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
          }
        `}
      </style>
      
      <div style={{ height: "90vh", width: "100%", position: "relative", borderRadius: "12px", overflow: "hidden" }}>
        <MapContainer 
          center={[20, 0]} 
          zoom={2} 
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
          worldCopyJump={true}
          maxBoundsViscosity={1.0}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            noWrap={false}
          />
          
          <MapBoundsRestriction />
          
          {locations.map((location) => (
            <Marker 
              key={location.id}
              position={location.position}
              icon={createPinIcon(location.people.length)}
              ref={(ref) => {
                if (ref) {
                  markerRefs.current[location.id] = ref;
                }
              }}
              eventHandlers={{
                mouseover: () => handleMarkerMouseOver(location.id),
                mouseout: () => handleMarkerMouseOut(location.id),
                popupopen: (e) => {
                  const popupElement = e.popup.getElement();
                  if (popupElement) {
                    popupElement.addEventListener('mouseenter', () => handlePopupMouseEnter(location.id));
                    popupElement.addEventListener('mouseleave', () => handlePopupMouseLeave(location.id));
                  }
                },
                popupclose: (e) => {
                  const popupElement = e.popup.getElement();
                  if (popupElement) {
                    popupElement.removeEventListener('mouseenter', () => handlePopupMouseEnter(location.id));
                    popupElement.removeEventListener('mouseleave', () => handlePopupMouseLeave(location.id));
                  }
                }
              }}
            >
              <Popup 
  maxWidth={null}  
  minWidth={240}  
  className="custom-popup"  
  closeButton={true}
  autoClose={false}
  closeOnClick={true}
  closeOnEscapeKey={true}
>
  <Card className="border-0 shadow-none w-auto">
    <CardHeader className="p-3">
      <CardTitle className="text-base font-semibold flex flex-row items-center justify-between">
        <span>{location.city}</span>
        <span className="text-xs text-red-800">
          {location.people.length} {location.people.length === 1 ? 'person' : 'people'}
        </span>
      </CardTitle>
    </CardHeader>
    <CardContent className="p-3 pt-1">
      <div className="flex flex-row overflow-x-auto gap-2 pb-2 custom-scroll">
        {location.people.map((person, index) => (
          <div 
            key={index}
            className="person-item border rounded-md hover:bg-accent transition-all duration-200 cursor-pointer overflow-hidden flex-shrink-0 w-40"  
          >
            <img 
              src={person.avatar} 
              alt={person.name} 
              className='h-auto w-full '
            />
            <div className="text-center flex flex-col p-2">
              <span className="text-xs font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded">
                {person.role}
              </span>
              <span className="text-xs font-medium mt-1 line-clamp-2">
                {person.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
};

export default Map;