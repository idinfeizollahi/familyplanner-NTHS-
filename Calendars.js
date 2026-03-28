window.onload = function () {
    const container = document.getElementById("calendars");
  
    if (container) {
      const count = localStorage.getItem("familyCount");
  
      if (count) {
        for (let i = 1; i <= count; i++) {
          const div = document.createElement("div");
  
          div.innerHTML = `<h3>Family Member ${i}</h3>`;
          div.style.border = "1px solid black";
          div.style.margin = "10px";
          div.style.padding = "10px";
  
          container.appendChild(div);
        }
      } else {
        container.innerHTML = "<p>No family count found. Please go to Home and enter a number.</p>";
      }
    }
  };