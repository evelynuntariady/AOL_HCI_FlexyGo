function toggleDropdown() {
    const dropdown = document.getElementById("currency-options");
    const selectedCurrency = document.querySelector(".dropdown-btn").getAttribute("data-selected");
  
    // Toggle visibility
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  
    // Sembunyikan opsi yang sedang dipilih
    const items = document.querySelectorAll("#currency-options > div");
    items.forEach(item => {
      if (item.getAttribute("data-currency") === selectedCurrency) {
        item.style.display = "none";
      } else {
        item.style.display = "flex"; // atau "block"
      }
    });
  }
  
  
  function selectCurrency(currencyCode, flagPath) {
    // Update tampilan dropdown terpilih
    document.getElementById("selected-currency").innerText = currencyCode;
    document.querySelector(".dropdown-btn img").src = flagPath;
  
    // Sembunyikan dropdown setelah pilih
    document.getElementById("currency-options").style.display = "none";
  
    // Simpan nilai terpilih
    document.querySelector(".dropdown-btn").setAttribute("data-selected", currencyCode);
  
    // Sembunyikan item yang sedang dipilih
    const items = document.querySelectorAll("#currency-options > div");
    items.forEach(item => {
      if (item.getAttribute("data-currency") === currencyCode) {
        item.style.display = "none";
      } else {
        item.style.display = "flex"; // atau "block", tergantung style-mu
      }
    });
  }
  
  
  window.onclick = function(e) {
    if (!e.target.closest(".dropdown")) {
      document.getElementById("currency-options").classList.remove("show");
    }
  }
  