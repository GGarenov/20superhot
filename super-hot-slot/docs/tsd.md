1️⃣ Architecture diagram — to visualize components and game flow.
2️⃣ React + PixiJS starter code skeleton — so you can run it and see a basic game board.
3️⃣ Lines design & code definition — 20 paylines JSON array.
4️⃣ Sample placeholder images (so you can replace with final assets).
5️⃣ Example logic for payouts & balance updates.

✅ Architecture Diagram: "20 Super Hot" simplified slot game

[ User Browser (Frontend Only) ]
│
├── 🎮 Game Engine Layer (PixiJS)
│ ├── Reel Manager
│ │ ├── Spins reels (animations)
│ │ ├── Stops reels and arranges symbols
│ │ └── Handles turbo / quick spin modes
│ │
│ ├── Symbol Renderer
│ │ ├── Draws individual fruit symbols
│ │ ├── Handles glow, win effects
│ │ └── Uses sprite assets
│ │
│ ├── Payline Manager
│ │ ├── Defines 20 lines
│ │ └── Highlights winning lines
│ │
│ └── Sound Manager
│ ├── Play spin sounds
│ └── Play win sounds
│
├── 💰 Game Logic Layer (React state / hooks)
│ ├── RNG logic (spin outcome generation)
│ ├── Payout evaluator
│ │ ├── Check paylines
│ │ ├── Check scatter wins
│ │ └── Calculate winnings
│ │
│ ├── Balance & bet management
│ │ ├── Update balance
│ │ ├── Bet change logic
│ │ └── Jackpot logic
│ │
│ └── Autoplay controller
│ ├── Repeated spins
│ └── Stop on win or balance conditions
│
├── 🖱️ UI Layer (React components)
│ ├── Balance display
│ ├── Win display
│ ├── Spin button
│ ├── Turbo button
│ ├── Bet selector buttons
│ ├── Autoplay toggle
│ ├── Paytable screen/modal
│ └── Settings / sound control
│
├── 🎴 Asset Layer (Sprites, Sounds)
│ ├── PNGs for symbols
│ ├── Backgrounds
│ ├── UI icons/buttons
│ ├── Sound effects
│ └── Fonts
│
└── 🌐 Deployment (Static Hosting)
└── Vercel / Netlify (serves the static build)

🟢 ✅ Summary of flow
1️⃣ User clicks spin →
2️⃣ Game Logic triggers RNG →
3️⃣ Reel Manager animates reels →
4️⃣ When reels stop, Payline Manager checks lines →
5️⃣ Payout evaluator updates balance and win display →
6️⃣ Sound and win effects play →
7️⃣ UI layer updates automatically.

💡 Why this design?
Frontend only: simpler, no backend needed since no accounts or money transactions.

PixiJS: optimized for WebGL, high FPS animations, great for reels.

React state: easy to manage balance, bets, and game status.

Easy to scale: can add backend in future if you want leaderboards or real money.

🎰 Technical Specification — 20 Super Hot (with Bootstrap)
✅ Overview
Browser-based slot game. No login, no deposit. Just enter the website and play.

🗂️ Tech Stack
Frontend
React — for UI logic.

PixiJS (pixi.js, @pixi/react) — for fast slot reel rendering.

Bootstrap — for layout and styling.

Shadcn/ui (optional — if you want extra modern-looking UI buttons or modals).

Framer Motion (optional — smooth transitions/animations).

TypeScript (recommended, but optional).

⚙️ Initial Setup
1️⃣ Install Node.js
bash

node -v
npm -v
2️⃣ Create React project
bash

npx create-react-app super-hot-slot
cd super-hot-slot
Or with TypeScript:

bash

npx create-react-app super-hot-slot --template typescript
3️⃣ Install packages
bash

npm install pixi.js @pixi/react bootstrap react-bootstrap shadcn-ui framer-motion
4️⃣ Setup Bootstrap
In src/index.js (or src/index.tsx):

js

import 'bootstrap/dist/css/bootstrap.min.css';
5️⃣ Setup folders
bash

/src
/assets ← Symbol images (fruits, 7, star)
/components ← React UI components (bet buttons, paytable modal)
/game ← Core game logic and paylines
App.jsx
index.js
🎨 Assets
Images needed:

Cherry, Lemon, Orange, Plum, Watermelon, Grapes

"7" symbol (wild)

Star symbol (scatter)

⚙️ Game Logic
Core Features
✅ 5 reels, 3 visible rows
✅ 20 fixed paylines
✅ Wild symbol ("7") replaces all except scatter
✅ Scatter symbol (Star) pays anywhere
✅ Jackpot (5x 7 on max bet)
✅ Balance, bet selector, win display
✅ Autoplay & turbo spin support

💰 Paytable
Symbol x5 x4 x3
7 $150 $60 $6
Star $1500 $60 $15
Grapes $60 $12 $3
Watermelon $30 $6 $3
Plum $30 $6 $3
Orange $15 $3 $1.5
Lemon $15 $3 $1.5
Cherry $15 $3 $1.5

🟢 Development Phases
Phase 1: Basic setup
Add Bootstrap layout (container, rows, buttons).

Implement balance, bet amount, and spin button.

Phase 2: Reels & grid
Use PixiJS to render 5x3 symbol grid.

Implement random symbol generation on spin.

Phase 3: Betting logic
Deduct bet from balance each spin.

Temporarily calculate random win.

Phase 4: Payline evaluation
Define 20 paylines as array coordinate mappings.

Check matching lines after spin.

Add scatter payout logic.

Phase 5: Animations
Add reel spinning animation (Pixi container movement).

Add glow/shine on winning lines.

Add turbo spin toggle.

Phase 6: Jackpot logic
Detect 5x "7" on a line with max bet and award jackpot.

Animate jackpot win.

Phase 7: Polish
Add Bootstrap modals (paytable).

Add win sounds, big win effects.

Mobile responsiveness.
