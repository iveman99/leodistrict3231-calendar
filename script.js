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
        color: "#00C6FF",
        events: [
            { type: 'primary', top: '45%', left: '52%', dateStr: "7", title: "PSTVP & GAT Schooling", fullDate: "7th June 2026", desc: "A leadership learning experience to prepare clubs for the year ahead.", bg: bgImages.leadership },
            { type: 'secondary', top: '25%', left: '30%', dateStr: "15", title: "Presidents' Meet", fullDate: "15th June 2026", desc: "A gathering for club presidents.", bg: bgImages.meeting },
            { type: 'secondary', top: '30%', left: '70%', dateStr: "28", title: "Preliminary Council Meet", fullDate: "28th June 2026", desc: "A strategic planning meet to align vision and execution.", bg: bgImages.meeting }
        ]
    },
    {
        month: "July 2026",
        color: "#7B2FF7",
        events: []
    },
    {
        month: "August 2026",
        color: "#FF4D8D",
        events: [
            { type: 'primary', top: '50%', left: '50%', dateStr: "16", title: "District Installation", fullDate: "16th August 2026", desc: "The official installation ceremony of the district.", bg: bgImages.celebration }
        ]
    },
    {
        month: "September 2026",
        color: "#00C6FF",
        events: [
            { type: 'primary', top: '50%', left: '50%', dateStr: "25", title: "First Council Meet", fullDate: "25th September 2026", desc: "Review, alignment, and strategic direction setting.", bg: bgImages.meeting }
        ]
    },
    {
        month: "October 2026",
        color: "#FF4D8D",
        events: [
            { type: 'primary', top: '55%', left: '40%', dateStr: "4", title: "UMANG", fullDate: "4th October 2026", desc: "A celebration of energy, culture, and unity.", bg: bgImages.celebration },
            { type: 'secondary', top: '70%', left: '60%', dateStr: "10", title: "Service Finale", fullDate: "10th October 2026", desc: "Closing the service week with impact and recognition.", bg: bgImages.leadership }
        ]
    },
    {
        month: "November 2026",
        color: "#7B2FF7",
        events: [
            { type: 'primary', top: '50%', left: '50%', dateStr: "1", title: "Fellowship", fullDate: "1st November 2026", desc: "Strengthening bonds through connection and fun.", bg: bgImages.fellowship }
        ]
    },
    {
        month: "December 2026",
        color: "#00C6FF",
        events: [
            { type: 'primary', top: '45%', left: '40%', dateStr: "6", title: "Multiple Marathon", fullDate: "6th December 2026", desc: "Running together for a cause.", bg: bgImages.celebration },
            { type: 'primary', top: '55%', left: '60%', dateStr: "20", title: "Image & Intl Day", fullDate: "20th December 2026", desc: "Image Building & International Day.", bg: bgImages.leadership }
        ]
    },
    {
        month: "January 2027",
        color: "#FF4D8D",
        events: [
            { type: 'primary', top: '35%', left: '30%', dateStr: "9-10", title: "LLI", fullDate: "9–10 January 2027", desc: "Leadership Learning Institute for future-ready leaders.", bg: bgImages.leadership },
            { type: 'secondary', top: '50%', left: '50%', dateStr: "26", title: "Second Council Meet", fullDate: "26th January 2027", desc: "Mid-year evaluation and strategic refinement.", bg: bgImages.meeting },
            { type: 'secondary', top: '25%', left: '70%', dateStr: "31", title: "Fellowship 2", fullDate: "31st January 2027", desc: "Another opportunity to connect and celebrate together.", bg: bgImages.fellowship }
        ]
    },
    {
        month: "February 2027",
        color: "#7B2FF7",
        events: []
    },
    {
        month: "March 2027",
        color: "#00C6FF",
        events: []
    },
    {
        month: "April 2027",
        color: "#7B2FF7",
        events: [
            { type: 'primary', top: '50%', left: '50%', scale: 1.2, dateStr: "4", title: "10th ADC", fullDate: "4th April 2027", desc: "10th Annual District Conference — the biggest platform of the year.", bg: bgImages.celebration }
        ]
    },
    {
        month: "May 2027",
        color: "#FF4D8D",
        events: [
            { type: 'primary', top: '35%', left: '40%', scale: 1.15, dateStr: "9", title: "District Awards", fullDate: "9th May 2027", desc: "Celebrating excellence and achievements across the district.", bg: bgImages.celebration }
        ]
    },
    {
        month: "Annual Highlights",
        type: "highlights",
        color: "#FFD700",
        events: [
            { range: "15th June - 15th Aug 2026", title: "Club Installations", desc: "Marking the beginning of leadership across the district.", bg: bgImages.celebration },
            { range: "1st July - 15th Aug 2026", title: "ZC & Sec Visits", desc: "Zone Chairpersons & Secretary visits across the district.", bg: bgImages.fellowship },
            { range: "2nd Oct - 9th Oct 2026", title: "October Service Week", desc: "A week dedicated to impactful service initiatives.", bg: bgImages.leadership },
            { range: "22nd Jan - 24th Jan 2027", title: "ISAAME Forum (Goa)", desc: "Representing the district at the ISAAME Forum.", bg: bgImages.celebration },
            { range: "15th Feb - 31st Mar 2027", title: "District Presidents' Visits", desc: "Direct engagement with clubs to guide and support growth.", bg: bgImages.leadership },
            { range: "28th - 30th May 2027", title: "Multiple Convention", desc: "Annual Multiple Convention participation.", bg: bgImages.meeting }
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
            renderMonthContent(monthObj); // Use new refactored function
            cardEl.className = `month-scene ${inClass}`;
            
            currentRenderTimeout = setTimeout(() => {
                cardEl.className = 'month-scene';
                isAnimating = false;
            }, 600);
        }, 600);
    } else {
        renderMonthContent(monthObj);
    }
}

function formatDateStr(dateStr) {
    if (!dateStr) return '';
    if (/^\d+$/.test(dateStr)) {
        return dateStr + '<sup>' + getOrdinal(parseInt(dateStr)) + '</sup>';
    }
    if (dateStr.includes('-')) {
        return dateStr.split('-').map(p => {
            const num = parseInt(p.trim());
            return !isNaN(num) ? num + '<sup>' + getOrdinal(num) + '</sup>' : p;
        }).join('-');
    }
    if (dateStr.includes('/')) {
        return dateStr.split('/').map(p => {
            const num = parseInt(p.trim());
            return !isNaN(num) ? num + '<sup>' + getOrdinal(num) + '</sup>' : p;
        }).join('/');
    }
    return dateStr;
}

function getOrdinal(n) {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
}

function renderMonthContent(monthObj) {
    const cardEl = document.getElementById('month-card');
    cardEl.innerHTML = '';
    
    if (monthObj.type === 'highlights') {
        renderHighlights(monthObj, cardEl);
    } else {
        renderMonthlyGrid(monthObj, cardEl);
    }
}

function renderMonthlyGrid(monthObj, container) {
    const daysInMonth = getDaysInMonth(monthObj.month);
    const startDay = getFirstWeekday(monthObj.month); // 0 = Sun
    
    // Create Grid Wrapper
    const gridWrapper = document.createElement('div');
    gridWrapper.className = 'calendar-grid';
    
    // Weekday Headers
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    days.forEach(d => {
        const h = document.createElement('div');
        h.className = 'grid-header';
        h.innerText = d;
        gridWrapper.appendChild(h);
    });
    
    // Empty Padding Days
    for(let i=0; i<startDay; i++) {
        const empty = document.createElement('div');
        empty.className = 'grid-day empty';
        gridWrapper.appendChild(empty);
    }
    
    // Day Cells
    for(let d=1; d<=daysInMonth; d++) {
        const dayEl = document.createElement('div');
        dayEl.className = 'grid-day';
        
        // Check for events on this day
        const dayEvents = monthObj.events.filter(evt => {
            // Handle range strings like "9-10" or single "7"
            if (evt.dateStr.includes('-')) {
                const [start, end] = evt.dateStr.split('-').map(Number);
                return d >= start && d <= end;
            }
            return parseInt(evt.dateStr) === d;
        });

        const hasEvent = dayEvents.length > 0;
        if (hasEvent) {
            dayEl.classList.add('has-event');
            const evt = dayEvents[0]; // Take first for display
            
            const safeDesc = evt.desc.replace(/'/g, "\\'");
            const safeBg = evt.bg.replace(/'/g, "\\'");
            
            dayEl.onclick = () => openModal(evt.fullDate, evt.title, safeDesc, safeBg);
            
            dayEl.innerHTML = `
                <div class="day-number">${d}</div>
                <div class="day-event-title">${evt.title}</div>
                <div class="event-glow"></div>
            `;
        } else {
            dayEl.innerHTML = `<div class="day-number">${d}</div>`;
        }
        
        gridWrapper.appendChild(dayEl);
    }
    
    container.appendChild(gridWrapper);
}

function renderHighlights(monthObj, container) {
    const highlightsWrapper = document.createElement('div');
    highlightsWrapper.className = 'highlights-container';
    
    monthObj.events.forEach((evt, i) => {
        const delay = i * 100;
        const card = document.createElement('div');
        card.className = 'highlight-card';
        card.style.animationDelay = `${delay}ms`;
        
        const safeDesc = evt.desc.replace(/'/g, "\\'");
        const safeBg = evt.bg.replace(/'/g, "\\'");
        
        card.onclick = () => openModal(evt.range, evt.title, safeDesc, safeBg);
        
        card.innerHTML = `
            <div class="highlight-range">${evt.range}</div>
            <div class="highlight-title">${evt.title}</div>
            <div class="highlight-arrow">VIEW DETAILS &rarr;</div>
        `;
        highlightsWrapper.appendChild(card);
    });
    
    container.appendChild(highlightsWrapper);
}

function getDaysInMonth(monthName) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [name, year] = monthName.split(' ');
    const monthIndex = months.indexOf(name);
    return new Date(year, monthIndex + 1, 0).getDate();
}

function getFirstWeekday(monthName) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [name, year] = monthName.split(' ');
    const monthIndex = months.indexOf(name);
    return new Date(year, monthIndex, 1).getDay();
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
        } else if(currentState === 'calendar' && e.deltaY < 0 && !isModalOpen && !document.getElementById('month-selector-sheet').classList.contains('active')) {
            goToHero();
        }
    });

    let enterTouchStart = 0;
    document.getElementById('hero').addEventListener('touchstart', e => enterTouchStart = e.touches[0].clientY, {passive:true});
    document.getElementById('hero').addEventListener('touchend', e => {
        if(currentState === 'hero' && enterTouchStart - e.changedTouches[0].clientY > 50) {
            enterCalendar();
        }
    });

    let calendarTouchStartY = 0;
    document.getElementById('calendar').addEventListener('touchstart', e => calendarTouchStartY = e.touches[0].clientY, {passive:true});
    document.getElementById('calendar').addEventListener('touchend', e => {
        if(isModalOpen || document.getElementById('month-selector-sheet').classList.contains('active') || currentState === 'hero') return;
        if(e.changedTouches[0].clientY - calendarTouchStartY > 50) {
            goToHero();
        }
    });

    function goToHero() {
        if(currentState === 'hero') return;
        currentState = 'hero';
        document.getElementById('calendar').classList.remove('active-state');
        document.getElementById('calendar').classList.add('hidden-state');
        document.getElementById('hero').classList.remove('hidden-state');
        document.getElementById('hero').classList.add('active-state');
    }

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
    renderMonthContent(calendarData[currentIndex]);
}
