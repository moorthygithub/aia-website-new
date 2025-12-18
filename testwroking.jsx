import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/leaflet.markercluster.js";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import React from "react";
import { titleFromSlug } from "@/utils/titleFromSlug";
import COUNTRY_COORDS from "@/data/countryCoords";
import INDIA_STATE_COORDS from "@/data/stateCoords";
import "./map.css";
const MAX_PHOTOS = 6;

export default function MapComponent() {
  useEffect(() => {
    const container = L.DomUtil.get("map");
    if (container && container._leaflet_id) {
      container._leaflet_id = null;
    }

    const makePin = () => {
      const svg = `
    <svg width="46" height="64" viewBox="0 0 46 64">
      <path fill="#50648e" d="M23 0C10.3 0 0 10.3 0 23c0 16.3 18.8 36.6 22.5 40.5a1 1 0 0 0 1.4 0C27.2 59.6 46 39.3 46 23 46 10.3 35.7 0 23 0z"/>
      <circle cx="23" cy="23" r="8" fill="#ffffff"/>
    </svg>
  `;

      return L.divIcon({
        className: "pin-icon",
        html: svg,
        iconSize: [40, 54],
        iconAnchor: [20, 54],
        popupAnchor: [0, -48],
      });
    };

    const brandPin = makePin();
    const map = L.map("map", {
      center: [20, 0],
      zoom: 2,
      zoomSnap: 0.25,
      maxBoundsViscosity: 0.5,
      worldCopyJump: false,
      minZoom: 2,
      maxZoom: 18,
    });

    const verticalBounds = L.latLngBounds(
      L.latLng(-70, -Infinity),
      L.latLng(85, Infinity)
    );
    map.setMaxBounds(verticalBounds);

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
        subdomains: "abcd",
        minZoom: 2,
        maxZoom: 20,
        noWrap: false,
        continuousWorld: true,
      }
    ).addTo(map);

    const cluster = L.markerClusterGroup({
      showCoverageOnHover: false,
      spiderfyOnMaxZoom: true,
      disableClusteringAtZoom: 6,
      iconCreateFunction: (cluster) => {
        return L.divIcon({
          html: `<div><span>${cluster.getChildCount()}</span></div>`,
          className: "marker-cluster marker-cluster-large",
          iconSize: [46, 46],
        });
      },
    });

    const markerOriginalLngs = new Map();
    let lastUpdateLng = null;

    map.on("move", function () {
      const mapCenterLng = map.getCenter().lng;

      if (
        lastUpdateLng === null ||
        Math.abs(mapCenterLng - lastUpdateLng) > 90
      ) {
        cluster.getLayers().forEach((marker) => {
          const originalLng = markerOriginalLngs.get(marker);
          if (originalLng !== undefined) {
            let newLng = originalLng;

            while (newLng - mapCenterLng > 180) {
              newLng -= 360;
            }
            while (newLng - mapCenterLng < -180) {
              newLng += 360;
            }

            const latLng = marker.getLatLng();
            if (Math.abs(newLng - latLng.lng) > 1) {
              marker.setLatLng([latLng.lat, newLng]);
            }
          }
        });
        lastUpdateLng = mapCenterLng;
      }
    });

    function galleryHTML(regionTitle, images) {
      let columns = 1;
      if (images.length === 2) columns = 2;
      else if (images.length == 3) columns = 3;
      else if (images.length > 3) columns = 3;
      const cards = images
        .map(
          (img) => `
<div class="card">
  <img
    class="thumb"
    src="${img.url}"
    alt="${img.name || regionTitle}"
    loading="lazy"
  >

  ${
    img.course
      ? `<div class="course-name">${img.course}</div>`
      : `<div class="course-name not-provided">Not Provided</div>`
  }

  <div class="caption">${img.name || "&nbsp;"}</div>
</div>

  `
        )
        .join("");

      return `
  <div class="popup">
    <h4>${regionTitle}</h4>
    <div class="gallery" style="
      display: grid;
      grid-template-columns: repeat(${columns}, 1fr);
      gap: 10px;
    ">
      ${cards}
    </div>
  </div>
  `;
    }

    const toImageObjects = (baseFolder, entries) =>
      (entries || []).slice(0, MAX_PHOTOS).map((item) => {
        if (typeof item === "string") {
          return {
            url: baseFolder ? `${baseFolder}/${item}` : item,
            name: titleFromSlug(item),
            course: "",
          };
        }
        return {
          url: item.url,
          name: item.name || titleFromSlug(item.url.split("/").pop() || ""),
          course: item.course || "",
        };
      });

    function addCountryMarker(countrySlug, files) {
      const coords = COUNTRY_COORDS[countrySlug];
      if (!coords) return;

      const images = toImageObjects(`images/${countrySlug}`, files);
      const popupHtml = galleryHTML(countrySlug.toUpperCase(), images);

      let minWidth = 160;
      let maxWidth = 160;

      if (images.length == 2) {
        minWidth = 260;
        maxWidth = 360;
      } else if (images.length >= 3) {
        minWidth = 360;
        maxWidth = 360;
      }

      const marker = L.marker(coords, { icon: brandPin });
      markerOriginalLngs.set(marker, coords[1]);

      marker.bindPopup(popupHtml, {
        minWidth,
        maxWidth,
      });

      marker.on("mouseover", function () {
        this.openPopup();
      });
      marker.on("mouseout", function () {
        this.closePopup();
      });

      cluster.addLayer(marker);
    }

    function addIndiaStateMarker(stateSlug, files) {
      const coords = INDIA_STATE_COORDS[stateSlug];
      if (!coords) return;

      const base = `images/India/${stateSlug}`;
      const imgs = toImageObjects(base, files);
      const title = `India — ${titleFromSlug(stateSlug)}`;
      const popupHtml = galleryHTML(title, imgs);

      let minWidth = 160;
      let maxWidth = 160;

      if (imgs.length === 2) {
        minWidth = 260;
        maxWidth = 360;
      } else if (imgs.length >= 3) {
        minWidth = 360;
        maxWidth = 360;
      }

      const m = L.marker(coords, { icon: brandPin });
      markerOriginalLngs.set(m, coords[1]);

      m.bindPopup(popupHtml, {
        minWidth,
        maxWidth,
      });

      m.on("mouseover", function () {
        this.openPopup();
      });
      m.on("mouseout", function () {
        this.closePopup();
      });
      m.on("click", function () {
        this.openPopup();
      });

      cluster.addLayer(m);
    }

    // Load manifest and initialize
    const init = async () => {
      try {
        const res = await fetch("images/manifest.json");
        const manifest = await res.json();

        Object.keys(COUNTRY_COORDS).forEach((c) =>
          addCountryMarker(c, manifest.countries?.[c] || [])
        );

        Object.keys(INDIA_STATE_COORDS).forEach((s) =>
          addIndiaStateMarker(s, manifest.india?.[s] || [])
        );

        map.addLayer(cluster);

        if (cluster.getLayers().length) {
          const bounds = cluster.getBounds();
          if (bounds.isValid()) {
            map.fitBounds(bounds.pad(0.25), { maxZoom: 4 });
          }
        }
      } catch (err) {
        console.error("Manifest load error:", err);
      }
    };

    init();

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: "100vh", width: "100%" }} />;
}
