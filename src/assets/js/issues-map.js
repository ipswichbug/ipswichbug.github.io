/* Issues map: used on /issues/ (all issues) and on each issue page (single pin). Leaflet + OpenStreetMap, no API keys. */
(function () {
  const colours = { open: "#c0392b", raised: "#d68910", "in-progress": "#2471a3", resolved: "#1e8449", won: "#1e8449", parked: "#7f8c8d" };
  const tiles = () => L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });
  const pin = (status) => L.circleMarker([0, 0], { radius: 9, color: "#fff", weight: 2, fillColor: colours[status] || "#555", fillOpacity: .95 });

  const single = document.getElementById("issue-map");
  if (single) {
    const lat = +single.dataset.lat, lng = +single.dataset.lng;
    const map = L.map(single, { scrollWheelZoom: false }).setView([lat, lng], 16);
    tiles().addTo(map);
    pin(single.dataset.status).setLatLng([lat, lng]).addTo(map);
  }

  const all = document.getElementById("issues-map");
  if (all) {
    const centre = JSON.parse(all.dataset.centre);
    const map = L.map(all, { scrollWheelZoom: false }).setView([centre.lat, centre.lng], centre.zoom);
    tiles().addTo(map);
    const layer = L.layerGroup().addTo(map);
    let issues = [];
    const render = (filter) => {
      layer.clearLayers();
      const shown = issues.filter((i) => filter === "all" ? !["resolved", "won", "parked"].includes(i.status) : filter === "closed" ? ["resolved", "won"].includes(i.status) : i.status === filter);
      shown.forEach((i) => {
        pin(i.status).setLatLng([i.lat, i.lng]).bindPopup(
          `<h4><a href="${i.url}">${i.title}</a></h4><p><span class="badge status-${i.status}">${i.statusLabel}</span></p><p>${i.location || ""}</p><p>${i.summary || ""}</p>`
        ).addTo(layer);
      });
      if (shown.length) map.fitBounds(L.featureGroup(layer.getLayers()).getBounds().pad(0.2), { maxZoom: 14 });
    };
    fetch("/issues/issues.json").then((r) => r.json()).then((d) => { issues = d.filter((i) => i.lat && i.lng); render("all"); });
    document.querySelectorAll(".filters button").forEach((b) => b.addEventListener("click", () => {
      document.querySelectorAll(".filters button").forEach((x) => x.setAttribute("aria-pressed", x === b));
      render(b.dataset.filter);
      document.querySelectorAll("[data-issue-status]").forEach((el) => {
        const s = el.dataset.issueStatus; const f = b.dataset.filter;
        el.hidden = !(f === "all" ? !["resolved", "won", "parked"].includes(s) : f === "closed" ? ["resolved", "won"].includes(s) : s === f);
      });
    }));
  }
})();
