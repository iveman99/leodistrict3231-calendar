/** 
 * DISTRICT LEADERSHIP YEAR - V2 CINEMATIC ENGINE 
 */

// === 1. DATA ===
// Note: Generated AI Images are assigned as modal backgrounds based on themes.
const bgImages = {
    leadership: 'images/neon_leadership_abstract_1775238325106.png',
    celebration: 'images/neon_celebration_abstract_1775238421246.png',
    meeting: 'images/neon_meeting_abstract_1775238435356.png',
    fellowship: 'images/neon_fellowship_abstract_1775238458636.png'
};

const calendarData = [
    {
        month: "June 2026",
        color: "#00C6FF", // Blue
        events: [
            { type: 'primary', top: '45%', left: '52%', dateStr: "7", title: "Schooling", fullDate: "7th June 2026", desc: "A leadership learning experience to prepare clubs for the year ahead.", bg: bgImages.leadership },
            { type: 'secondary', top: '30%', left: '70%', dateStr: "28", title: "PCM", fullDate: "28th June 2026", desc: "A strategic planning meet to align vision and execution.", bg: bgImages.meeting },
            { type: 'range', top: '70%', left: '30%', width: '220px', dateStr: "15-30", title: "Installation Starts", fullDate: "15th June Phase", desc: "Marking the beginning of leadership across the district.", bg: bgImages.celebration }
        ]
    },
    {
        month: "July 2026",
        color: "#7B2FF7", // Purple
        events: [
            { type: 'range', top: '50%', left: '50%', width: '260px', dateStr: "1-31", title: "ZC Visits Active", fullDate: "Ongoing July", desc: "Zone-level engagement to strengthen club connections.", bg: bgImages.fellowship }
        ]
    },
    {
        month: "August 2026",
        color: "#FF4D8D", // Pink
        events: [
            { type: 'primary', top: '50%', left: '50%', dateStr: "16", title: "Installation", fullDate: "16th August 2026", desc: "The official installation ceremony of the district.", bg: bgImages.celebration }
        ]
    },
    {
        month: "September 2026",
        color: "#00C6FF",
        events: [
            { type: 'primary', top: '50%', left: '50%', dateStr: "25", title: "Council Meet", fullDate: "25th September 2026", desc: "Review, alignment, and strategic direction setting.", bg: bgImages.meeting }
        ]
    },
    {
        month: "October 2026",
        color: "#FF4D8D",
        events: [
            { type: 'primary', top: '45%', left: '45%', dateStr: "4", title: "Umang", fullDate: "4th October 2026", desc: "A celebration of energy, culture, and unity.", bg: bgImages.celebration },
            { type: 'secondary', top: '65%', left: '65%', dateStr: "10", title: "Service Finale", fullDate: "10th October 2026", desc: "Closing the service week with impact and recognition.", bg: bgImages.leadership }
        ]
    },
    {
        month: "November 2026",
        color: "#7B2FF7",
        events: [
            { type: 'primary', top: '50%', left: '50%', dateStr: "1", title: "Fellowship 1", fullDate: "1st November 2026", desc: "Strengthening bonds through connection and fun.", bg: bgImages.fellowship }
        ]
    },
    {
        month: "December 2026",
        color: "#00C6FF",
        events: [
            { type: 'primary', top: '50%', left: '50%', dateStr: "20", title: "Image Building", fullDate: "20th December 2026", desc: "Enhancing visibility and global collaboration.", bg: bgImages.leadership }
        ]
    },
    {
        month: "January 2027",
        color: "#FF4D8D",
        events: [
            { type: 'primary', top: '45%', left: '55%', dateStr: "9-10", title: "LLI", fullDate: "9–10 January 2027", desc: "Leadership Learning Institute for future-ready leaders.", bg: bgImages.leadership },
            { type: 'secondary', top: '30%', left: '75%', dateStr: "26", title: "Council Meet", fullDate: "26th January 2027", desc: "Mid-year evaluation and strategic refinement.", bg: bgImages.meeting },
            { type: 'secondary', top: '70%', left: '30%', dateStr: "24/31", title: "Fellowship", fullDate: "24 or 31 January 2027", desc: "Another opportunity to connect and celebrate together.", bg: bgImages.fellowship }
        ]
    },
    {
        month: "Feb/March 2027",
        color: "#7B2FF7",
        events: [
            { type: 'range', top: '50%', left: '50%', width: '280px', dateStr: "DP", title: "DP Visits", fullDate: "15 Feb – 31 March", desc: "Direct engagement with clubs to guide and support growth.", bg: bgImages.leadership }
        ]
    },
    {
        month: "April 2027",
        color: "#00C6FF",
        events: [
            { type: 'primary', top: '50%', left: '50%', scale: 1.2, dateStr: "4", title: "ADC", fullDate: "4th April 2027", desc: "The Annual District Conference — the biggest platform of the year.", bg: bgImages.celebration }
        ]
    },
    {
        month: "May 2027",
        color: "#FF4D8D",
        events: [
            { type: 'primary', top: '50%', left: '50%', scale: 1.15, dateStr: "9", title: "Awards", fullDate: "9th May 2027", desc: "Celebrating excellence and achievements across the district.", bg: bgImages.celebration }
        ]
    }
];

// === 2. STATE ===
let currentIndex = 0;
let isAnimating = false;
let isModalOpen = false;
let currentState = 'hero'; // 'hero' or 'calendar'
let currentAnimTimeout = null;
let currentRenderTimeout = null;

// === 3. CANVAS PARTICLES EXPEREINCE ===
function initCanvas() {
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const particles = [];
    
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const isMobile = window.innerWidth < 768;
    const numParticles = isMobile ? 40 : 100;

    for(let i=0; i<numParticles; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 2 + 0.5,
            vx: (Math.random() - 0.5) * 0.5,
            vy: -Math.random() * 0.5 - 0.1, // float up
            alpha: Math.random() * 0.5 + 0.1
        });
    }

    function render() {
        if (!isModalOpen) {
            ctx.clearRect(0,0,width,height);
            
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                
                // Loop vertical
                if(p.y < -10) p.y = height + 10;
                if(p.x < -10) p.x = width + 10;
                if(p.x > width + 10) p.x = -10;
                
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); 
                ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
                ctx.fill();
            });
        }
        requestAnimationFrame(render);
    }
    render();
}

// === 4. CALENDAR LOGIC & 3D LOCKS ===

function renderScene(idx, direction = 'none') {
    if(idx < 0 || idx >= calendarData.length) return;
    
    // Safety against rapid clicking overlaps
    if (currentAnimTimeout) clearTimeout(currentAnimTimeout);
    if (currentRenderTimeout) clearTimeout(currentRenderTimeout);
    
    const monthObj = calendarData[idx];
    document.getElementById('current-month-display').innerText = monthObj.month;
    document.documentElement.style.setProperty('--month-glow', monthObj.color);
    
    const cardEl = document.getElementById('month-card');
    
    if(direction !== 'none') {
        isAnimating = true;
        const outClass = direction === 'next' ? 'is-flipping-out-left' : 'is-flipping-out-right';
        const inClass = direction === 'next' ? 'is-flipping-in-right' : 'is-flipping-in-left';
        
        cardEl.className = `month-scene ${outClass}`;
        
        currentAnimTimeout = setTimeout(() => {
            injectFloatingNodes(monthObj);
            cardEl.className = `month-scene ${inClass}`;
            
            currentRenderTimeout = setTimeout(() => {
                cardEl.className = 'month-scene'; // Cleanup classes after transition
                isAnimating = false;
            }, 600); // Wait for IN animation
        }, 600); // Wait for OUT animation
    } else {
        injectFloatingNodes(monthObj);
    }
}

function injectFloatingNodes(monthObj) {
    const cardEl = document.getElementById('month-card');
    cardEl.innerHTML = '';
    
    // Abstract spatial positioning using percentage coordinates
    monthObj.events.forEach((evt, i) => {
        // Escape quotes
        const safeDesc = evt.desc.replace(/'/g, "\\'");
        const safeBg = evt.bg.replace(/'/g, "\\'");
        
        // Conditional styles
        const widthStyle = evt.width ? `width: ${evt.width};` : '';
        const innerTransform = evt.scale ? `transform: scale(${evt.scale});` : '';
        const delay = i * 150; // stagger effect
        
        cardEl.innerHTML += `
            <div class="event-pos ${evt.type}" 
                 style="top: ${evt.top}; left: ${evt.left}; transform: translate(-50%, -50%); ${widthStyle} animation-delay: ${delay}ms;">
                <div class="event-node" style="${innerTransform}" onclick="openModal('${evt.fullDate}', '${evt.title}', '${safeDesc}', '${safeBg}')">
                    <div class="event-date">${evt.dateStr}</div>
                    <div class="event-title">${evt.title}</div>
                </div>
            </div>
        `;
    });
}

function handleNext() {
    if(isAnimating || currentIndex >= calendarData.length - 1) return;
    currentIndex++;
    renderScene(currentIndex, 'next');
}

function handlePrev() {
    if(isAnimating || currentIndex <= 0) return;
    currentIndex--;
    renderScene(currentIndex, 'prev');
}

// === 5. MODAL LOGIC ===
function openModal(date, title, desc, bg) {
    isModalOpen = true;
    document.querySelector('.scene-3d').classList.add('dimmed');
    
    document.getElementById('modal-date').innerText = date;
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = desc;
    document.getElementById('modal-image').style.backgroundImage = `url('${bg}')`;
    
    document.getElementById('event-modal').classList.add('active');
    
    // Parallax mouse follow for modal
    document.addEventListener('mousemove', modalParallax);
}

function closeModal() {
    isModalOpen = false;
    document.querySelector('.scene-3d').classList.remove('dimmed');
    document.getElementById('event-modal').classList.remove('active');
    document.removeEventListener('mousemove', modalParallax);
}

function modalParallax(e) {
    // Subtle shift based on mouse move
    const x = (e.clientX / window.innerWidth - 0.5) * 10; // limits movement
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    document.getElementById('modal-image').style.transform = `scale(1.05) translate(${-x}px, ${-y}px)`;
}

// Navigation Builders
function buildMonthSelector() {
    const grid = document.getElementById('months-grid');
    grid.innerHTML = '';
    calendarData.forEach((obj, idx) => {
        grid.innerHTML += `
            <div class="month-chip" onclick="jumpToMonth(${idx})">
                ${obj.month}
            </div>
        `;
    });
}

function jumpToMonth(idx) {
    if(idx === currentIndex || isAnimating) {
        document.getElementById('month-selector-sheet').classList.remove('active');
        return;
    }
    const dir = idx > currentIndex ? 'next' : 'prev';
    currentIndex = idx;
    renderScene(currentIndex, dir);
    document.getElementById('month-selector-sheet').classList.remove('active');
}

// === 6. INIT & EVENT BINDING ===
document.addEventListener("DOMContentLoaded", () => {
    initCanvas();
    renderScene(currentIndex, 'none');
    buildMonthSelector();
    
    // Hero to Calendar Transition binds
    window.addEventListener('wheel', (e) => {
        if(currentState === 'hero' && e.deltaY > 0) {
            enterCalendar();
        }
    });

    let enterTouchStart = 0;
    document.getElementById('hero').addEventListener('touchstart', e => enterTouchStart = e.touches[0].clientY, {passive:true});
    document.getElementById('hero').addEventListener('touchend', e => {
        if(currentState === 'hero' && enterTouchStart - e.changedTouches[0].clientY > 50) {
            enterCalendar();
        }
    });

    document.getElementById('back-to-hero').addEventListener('click', () => {
        document.getElementById('calendar').classList.remove('active-state');
        document.getElementById('calendar').classList.add('hidden-state');
        document.getElementById('hero').classList.remove('hidden-state');
        document.getElementById('hero').classList.add('active-state');
        currentState = 'hero';
    });

    // Bind Controls
    document.getElementById('next-month').addEventListener('click', handleNext);
    document.getElementById('prev-month').addEventListener('click', handlePrev);
    
    document.getElementById('close-modal').addEventListener('click', closeModal);
    
    document.getElementById('open-month-selector').addEventListener('click', () => {
        document.getElementById('month-selector-sheet').classList.add('active');
    });
    
    // Handle Mobile Swipe for Context
    let touchStartX = 0;
    const scene = document.querySelector('.scene-3d');
    scene.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX, {passive: true});
    scene.addEventListener('touchend', e => {
        if(isAnimating || isModalOpen || currentState === 'hero') return;
        let touchEndX = e.changedTouches[0].clientX;
        if(touchStartX - touchEndX > 50) handleNext(); // swipe left
        if(touchEndX - touchStartX > 50) handlePrev(); // swipe right
    });
});

function enterCalendar() {
    if(currentState === 'calendar') return;
    currentState = 'calendar';
    
    document.getElementById('hero').classList.remove('active-state');
    document.getElementById('hero').classList.add('hidden-state');
    
    document.getElementById('calendar').classList.remove('hidden-state');
    document.getElementById('calendar').classList.add('active-state');
    
    // Force re-render to trigger 3D animations nicely
    renderScene(currentIndex, 'none');
}
