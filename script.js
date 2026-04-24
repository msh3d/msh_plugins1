const commands = [
    { name: "Auto Layer by ObjectType", cat: "utility" },
    { name: "Diamond Report By Circles", cat: "gemstone" },
    { name: "Group objects by color", cat: "utility" },
    { name: "Metal Weight Calc", cat: "metal" },
    { name: "Multi Metal Calc", cat: "metal" },
    { name: "Diamond Between 2 Crvs", cat: "gemstone" },
    { name: "Auto Pave Pro UI", cat: "gemstone" },
    { name: "Azure Cutter Pro UI", cat: "gemstone" },
    { name: "ID Rail", cat: "utility" },
    { name: "Paveplanner Pro UI", cat: "gemstone" }
    // Add remaining commands here
];

const commandGrid = document.getElementById('commandGrid');
const themeToggle = document.getElementById('theme-toggle');

// 1. Initialize Theme
const currentTheme = localStorage.getItem('theme') || 'light-mode';
document.body.className = currentTheme;

themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode', !isDark);
    localStorage.setItem('theme', isDark ? 'dark-mode' : 'light-mode');
});

// 2. Inject Commands with Fade-in Effect
function displayCommands(filter = 'all') {
    commandGrid.innerHTML = '';
    const filtered = filter === 'all' ? commands : commands.filter(c => c.cat === filter);
    
    filtered.forEach((cmd, index) => {
        const card = document.createElement('div');
        card.className = 'command-card fade-in';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="category-tag">${cmd.cat}</div>
            <h3>${cmd.name}</h3>
            <p>Enhance your jewelry precision with the ${cmd.name} tool.</p>
        `;
        commandGrid.appendChild(card);
    });
}

// 3. Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

displayCommands();