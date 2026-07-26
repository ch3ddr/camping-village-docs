// Öffne Links in einem neuen Tab — nur auf den camp-facing Setup-Seiten
// (Camp-Admin-Anleitung + Install-Seite). Dort arbeitet man eine Schritt-für-
// Schritt-Liste ab; ein Link, der im selben Tab öffnet, wirft einen aus der
// Anleitung und zwingt zum Zurückspringen.
//
// Läuft über Materials document$ statt DOMContentLoaded, weil navigation.instant
// die Seiten SPA-artig nachlädt — sonst würde das nur beim ersten Aufruf greifen.
document$.subscribe(function () {
  var path = location.pathname;
  var onSetupPage =
    path.indexOf("/camp-admin/") !== -1 ||
    path.indexOf("/app-installieren/") !== -1;
  if (!onSetupPage) return;

  document.querySelectorAll(".md-content a[href]").forEach(function (a) {
    var href = a.getAttribute("href");
    // In-Page-Anker (#…) bleiben im selben Tab — sonst würde ein Sprung zu
    // einem Abschnitt derselben Seite einen neuen Tab aufmachen.
    if (!href || href.charAt(0) === "#") return;
    a.target = "_blank";
    a.rel = "noopener";
  });
});
