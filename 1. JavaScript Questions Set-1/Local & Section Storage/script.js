// 1. Build a function to store and manage complex data structures (e.g., arrays or objects) in Local Storage. Ensure that the function can handle both storing and retrieving such data.      
// Function to manage Local Storage
function manageLocalStorage(key, value = null, action = "get") {
    try {
        if (action === "set") {
            // Convert complex data (object, array) to JSON before storing
            localStorage.setItem(key, JSON.stringify(value));
            console.log(`Data stored successfully under key "${key}"`);
        }
        else if (action === "get") {
            // Retrieve and parse data back to original type
            const storedData = localStorage.getItem(key);
            return storedData ? JSON.parse(storedData) : null;
        }
        else if (action === "remove") {
            // Remove data from localStorage
            localStorage.removeItem(key);
            console.log(`Data removed for key "${key}"`);
        }
        else {
            console.error("Invalid action! Use 'set', 'get', or 'remove'.");
        }
    } catch (error) {
        console.error("Local Storage Error:", error);
    }
}



// Example object
const userData = {
    name: "Abdullah",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    details: { role: "Frontend Developer", experience: "2 years" }
};

// 1️⃣ Store data
manageLocalStorage("userProfile", userData, "set");

// 2️⃣ Retrieve data
const retrievedUser = manageLocalStorage("userProfile", null, "get");
console.log(retrievedUser);

// 3️⃣ Remove data
manageLocalStorage("userProfile", null, "remove");
