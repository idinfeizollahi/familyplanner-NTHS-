//alert("JavaScript is linked and working!");
function saveFamilyCount() {
    const count = document.getElementById("familyCount").value;
  
    // Save to browser storage
    localStorage.setItem("familyCount", count);
  
    alert("Saved! Go to Calendar page.");
  }