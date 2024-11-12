document.addEventListener("DOMContentLoaded", function() {
  // Define the header content
  const headerContent = html `
      <header class="card">
        <div class="logo">
          <a href="index.html"><img src="assets/images/logo.png" alt="Logo"></a>
        </div>
        <nav>
          <div class="fr nav">
            <a href="#details">Détails</a>
            <a href="about.html">À propos</a>
            <a href="#contact">Contact</a>
            <button id="btn-en"></button>
          </div>
          <div class="en nav">
            <a href="#details">Details</a>
            <a href="about.html">About me</a>
            <a href="#contact">Contact</a>
            <button id="btn-fr"></button>
          </div>
        </nav>
      </header>
  `;

  // Insert the header into the placeholder
  document.getElementById("header").innerHTML = headerContent;

});
