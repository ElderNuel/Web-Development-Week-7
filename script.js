/* --- Part 2: JavaScript Functions (Parameters, Return, Scope) --- */

// Global variable (scope demo)
let animationCount = 0;

// Function with parameter + return value
function calculateAnimationSpeed(baseSpeed, multiplier) {
  return baseSpeed * multiplier;
}

// Function to update global variable (scope demo)
function incrementAnimationCount() {
  animationCount++;
  console.log("Animation triggered:", animationCount, "times");
}

// Reusable function to add animation
function triggerBoxAnimation(speedMultiplier) {
  const box = document.querySelector(".box");
  
  // Calculate speed dynamically
  const duration = calculateAnimationSpeed(2, speedMultiplier);
  
  box.style.animationDuration = duration + "s";
  box.classList.add("animate");

  // Remove animation class after it finishes
  setTimeout(() => {
    box.classList.remove("animate");
  }, duration * 1000);

  incrementAnimationCount();
}

/* --- Part 3: CSS + JS Integration --- */

// Animate box when button is clicked
document.getElementById("animateBtn").addEventListener("click", () => {
  triggerBoxAnimation(1.5); // pass multiplier
});

// Modal open/close
const modal = document.getElementById("modal");
document.getElementById("openModal").onclick = () => { modal.style.display = "block"; };
document.getElementById("closeModal").onclick = () => { modal.style.display = "none"; };

// Close modal when clicking outside content
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
