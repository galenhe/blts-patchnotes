// ── Patch notes data ─────────────────────────────────────────────────────────
// Add a new entry to the TOP of this array for each update, then commit/redeploy.
// tag options (control the colored chip): "New", "Improved", "Fixed", "Balance".
//
// {
//   version: "0.7.0",
//   date: "2026-07-01",        // YYYY-MM-DD
//   title: "Short headline",
//   notes: [
//     { tag: "New", text: "What changed, player-facing." },
//   ],
//   images: [                               // optional before/after screenshots (in this folder)
//     { src: "feature_before.png", caption: "Before" },
//     { src: "feature_after.png",  caption: "After"  },
//   ],
// }

window.PATCH_NOTES = [
  {
    version: "0.9.24",
    date: "2026-08-06",
    title: "Learn the Ropes",
    notes: [
      { tag: "New", text: "Stages now end with a stand at the GATEKEEPERS: the first time an army pours from a finish gate, Squawks calls you to hold the line -- clear every last one to open the gate. The charge holds until you're ready." },
      { tag: "Balance", text: "Your screen-clearing SPECIAL now unlocks on stage 2, so your very first stage is all about learning to steer and shoot. Its charge meter and its tutorial arrive together, right when the ability does." },
      { tag: "Improved", text: "Every tip now dims the screen behind it, so when the action pauses to teach you something it reads clearly as a moment to stop and listen." },
    ],
  },
  {
    version: "0.9.23",
    date: "2026-08-04",
    title: "Brace for the Horde",
    notes: [
      { tag: "New", text: "A HORDE now storms you early in every run — a wall of enemies bearing down across the deck. Weave through the gaps, blast a path, and survive the swarm." },
      { tag: "New", text: "Learn your SPECIAL on your very first run: when that first horde looms, your screen-clearing blast is charged and ready — tap to wipe the deck clean. From then on you charge it yourself by chaining kills." },
      { tag: "New", text: "New Armory upgrade — MOVE SPEED: run forward faster to blitz through levels and reach the bosses sooner (up to +50%)." },
      { tag: "Improved", text: "The action has more punch: enemies burst when they pop, coins sparkle as you grab them, and the special blast lands with a screen flash and a satisfying camera kick." },
      { tag: "Balance", text: "The opening stages hit harder and faster for a stronger first impression, and the hordes grow deeper the further you sail." },
      { tag: "Balance", text: "Early levels are much shorter now, so you clear stages, reach the first bosses, and start upgrading far faster — straight into the action." },
      { tag: "Improved", text: "No more one-shots! You now start each run with 3 HEARTS (shown up top) and flash briefly invincible after a hit, so a single bump won't end your run — a horde costs a heart, not the whole game." },
      { tag: "Fixed", text: "Steering feels tight again — no more accidental jumps or slides while you drag. Jump and slide now take a deliberate quick up/down swipe." },
      { tag: "New", text: "Meet SQUAWKS, your parrot first mate! He now guides you through the ropes -- the intro, the tips, and the home-port tour are all in his (very squawky) voice." },
      { tag: "New", text: "New captains get a proper welcome: a short intro sets your goal on your first voyage, the first enemy HORDE gives you a heads-up to weave or blast through it, and the screen-clearing SPECIAL is taught on the next wall. After you clear stage 1 a quick home-port tour shows you the ropes." },
      { tag: "New", text: "Stages end with a real climax now: the hordes thin out and you reach a big imposing GATE. Everything holds for a beat as a whole army spills out of it — the camera drops low for the moment — then they CHARGE. Hold the line, clear them all, and sprint through the gate to win." },
      { tag: "New", text: "First launch drops you straight into the action — new captains sail immediately after the splash; every launch after that opens on your home port." },
      { tag: "Improved", text: "The Armory reads at a glance: every weapon upgrade and powerup now has its own icon (triple-cannons, sword, arrows, shield, magnet and more)." },
      { tag: "Improved", text: "Cleaner splash screen — the loading bar fills smoothly from the left, and TAP TO START lost its boxy background panel." },
      { tag: "Improved", text: "Quests are clearer: each tab shows a badge with how many rewards are ready to claim, and CLAIM ALL is always there (greyed until there's something to grab)." },
      { tag: "Improved", text: "The results screen counts up with a satisfying tick as your score, coins, and kills tally in." },
      { tag: "Fixed", text: "Music now plays properly in the released game — the real soundtrack plays on the home screen, during runs, and in boss fights (it was falling back to placeholder tones)." },
      { tag: "Fixed", text: "The captain can no longer clip or fall through the deck at speed — the ground is now solid underfoot on every run." },
      { tag: "Improved", text: "The view now frames the same on every phone: the play area stays a consistent width across tall, short, and notched screens, and the on-screen meters line up correctly." },
    ],
  },
  {
    version: "0.9.22",
    date: "2026-08-03",
    title: "Now in Internal Testing!",
    notes: [
      { tag: "New", text: "Pirate Blitz: Broadside is officially on Google Play internal testing! Here's the full tour of what the crew has built so far." },
      { tag: "New", text: "One-thumb gameplay — your captain runs and fires automatically; you just HOLD & DRAG to steer across the deck, weaving through enemies and aiming your cannon where you go." },
      { tag: "New", text: "Kill-charged SPECIAL — chain kills to fill your meter, then tap to unleash a screen-clearing blast." },
      { tag: "New", text: "The Armory — buy permanent weapon upgrades (Cannons for extra lines of fire, Damage, Fire Rate, Projectile Speed), sell them back for full refunds, and reset your whole build to experiment." },
      { tag: "New", text: "Powerups — Shield, Magnet, Weapon Boost and Special Blast, unlocked as you progress and equipped two at a time." },
      { tag: "New", text: "100 levels across 10 evolving worlds — from the Pier and Bridge out through Ocean, Storm, Reef, Volcanic, Frozen and Sky, all the way to the Grand Line — each faster, denser and longer than the last." },
      { tag: "New", text: "Boss battles every 10 levels — rotating pirate bosses in themed arenas, each with an intro and its own health bar." },
      { tag: "New", text: "A crew to choose from — earn new captains by beating bosses (Skeleton, Captain Barbossa, Sharky), plus a premium Shark, and name your own captain." },
      { tag: "New", text: "Progress that sticks — bank coins, earn up to 3 stars per level, unlock stages, beat high scores, and level up your Captain rank. Lives regenerate over time." },
      { tag: "New", text: "Daily, Weekly and Lifetime missions that pay out coins to keep your upgrades in step with the difficulty." },
      { tag: "New", text: "Full audio — home, gameplay and boss music with Music & Sound volume sliders — and a polished Royal Navy look with a pirate-harbour home screen and guided onboarding for new captains." },
      { tag: "New", text: "Play anywhere — single-player, offline, no sign-in. Your save lives on your device and backs up to your own Google Drive so you never lose it." },
    ],
  },
  {
    version: "0.9.22",
    date: "2026-08-02",
    title: "Sound the Cannons",
    notes: [
      { tag: "New", text: "The game has music! A theme on the home screen, a driving track for your runs, and a separate boss theme that kicks in the moment a boss fight starts." },
      { tag: "New", text: "Volume sliders for Music and Sound in Settings (and the pause menu) — set them how you like; the game remembers." },
      { tag: "New", text: "New weapon upgrades in the Armory: CANNONS add extra parallel lines of fire (up to 5), and PROJECTILE SPEED makes your shots travel faster. Your firepower is now bought in the store rather than built up each run." },
      { tag: "Improved", text: "Every weapon upgrade can be bought AND sold back for a full refund with + / − buttons, plus a RESET ALL button — experiment freely with your build." },
      { tag: "Improved", text: "Gold feels weightier: coins are worth more when you grab them, with upgrade costs and rewards scaled to match." },
      { tag: "Improved", text: "Powerups are now unlocked as you progress and equipped two at a time. Missions got a new LIFETIME tab of milestone goals that pay out as you go, and weekly goals are easier to clear." },
    ],
  },
  {
    version: "0.9.21",
    date: "2026-08-02",
    title: "Meet Your Crew",
    notes: [
      { tag: "New", text: "New captains to play as — and you earn them by beating bosses! Clear the level-10 boss to unlock the Skeleton, the level-20 boss for Captain Barbossa, and the level-40 boss for Sharky. Beat 'em, then play as 'em." },
      { tag: "New", text: "A premium captain joins the roster: the Shark — a swimming terror that glides straight through the horde." },
      { tag: "New", text: "Name your captain! Choose a name when you first set sail, and change it anytime from your profile — tap your portrait, then EDIT." },
      { tag: "Improved", text: "The Skins screen now shows a real portrait of every character, with locked crew appearing as shadowy silhouettes until you earn them." },
      { tag: "Improved", text: "Cleaned up the home screen — switching characters now lives on the Skins screen, and the header proudly shows your chosen captain name." },
    ],
  },
  {
    version: "0.9.20",
    date: "2026-08-02",
    title: "Home Port Facelift",
    notes: [
      { tag: "Improved", text: "The home screen is now a proper pirate harbour. Your captain stands flanked by a pair of cannons, with palms, a flag and a pirate ship anchored in the background." },
      { tag: "Improved", text: "The captain portrait sits a touch lower so you can see head and shoulders, not just the face." },
      { tag: "Improved", text: "Tidied the bottom navigation: the SKINS and LEVELS tabs swapped places, and the gold tab highlight now lines up cleanly inside its trim." },
    ],
    images: [
      { src: "homescreen6.PNG", caption: "The new home harbour" },
    ],
  },
  {
    version: "0.9.19",
    date: "2026-07-28",
    title: "A Fresh Coat of Paint",
    notes: [
      { tag: "Improved", text: "New loading screen! A golden-hour beach scene — your captains sprinting up the sand while krakens, a pirate captain and skeleton crew loom behind, framed by palm trees and cannons." },
      { tag: "Improved", text: "The home screen and splash now wear the new PIRATE BLITZ / BROADSIDE wordmark, and the start screen got a proper tap-to-start button." },
    ],
    images: [
      { src: "loadingscreenupdated1.jpg", caption: "The new painted loading screen" },
    ],
  },
  {
    version: "0.9.18",
    date: "2026-07-28",
    title: "Say Hello to Pirate Blitz: Broadside",
    notes: [
      { tag: "New", text: "The game has a name! What you've been playing is now PIRATE BLITZ: BROADSIDE. A 'broadside' is a full volley from every cannon at once — which is exactly how your ship fights. Same game you know, a sharper identity. Brought to you by BLTS Studios." },
    ],
  },
  {
    version: "0.9.17",
    date: "2026-07-28",
    title: "Bigger, Meaner Bosses",
    notes: [
      { tag: "New", text: "Bosses introduce themselves now. Reach the arena and the screen darkens for a face-off — the boss's portrait and a taunt fill the view before the fight. Each of the five foes has their own words as you meet them." },
      { tag: "New", text: "The back half of the voyage gets ELITE bosses. Levels 60-100 pit you against ascended versions — Ancient Kraken, Dread Captain, Blood Mako, Megalodon and Soul Reaper — that hunt you with homing attacks and fly into a frenzy as their health drops." },
      { tag: "Improved", text: "Bosses are bigger and more imposing, and they loom in place while you close in — no more jogging on the spot before the fight." },
    ],
  },
  {
    version: "0.9.16",
    date: "2026-07-28",
    title: "Boss Intros & Dodge Coaching",
    notes: [
      { tag: "New", text: "Bosses get a proper entrance now. Reach the arena and a story moment plays out — the boss steps up and speaks, and you tap through it before the fight kicks off. Each boss has its own lines, so the pirate story grows as you climb toward the Grand Line." },
      { tag: "New", text: "The first boss you ever face walks you through it: a quick prompt to STRAFE side to side and slip past its attacks, so you're ready before the barrage starts. It only shows the once." },
    ],
  },
  {
    version: "0.9.15",
    date: "2026-07-28",
    title: "Boss Fights With Teeth",
    notes: [
      { tag: "Improved", text: "Bosses actually fight back now. Instead of standing there taking hits, they unleash bursts of telegraphed lane attacks — a quick flurry you have to weave through, then a breather, then another. Watch the warning strips and strafe clear." },
      { tag: "Improved", text: "The duel is tighter. The boss's attacks and your dodging both stay in a focused lane down the middle of the arena, so it's a real face-off instead of a sprawl across the whole floor." },
      { tag: "New", text: "Reaching a boss now kicks off a reveal — the camera pulls back to frame the arena and a PLAY button lets you start the fight when you're ready. Bosses swing their weapon as they attack, too." },
      { tag: "New", text: "Clear a stage and your captain plants their feet and waves to the camera as it circles round for the hero shot." },
    ],
  },
  {
    version: "0.9.14",
    date: "2026-07-28",
    title: "Boss Battles",
    notes: [
      { tag: "New", text: "Boss stages are real fights now. You run up through the usual crew, then arrive at the boss's arena — an open ground themed to match the biome — where the map stops and you square off. Strafe left and right to dodge the boss's telegraphed lane attacks while you wear it down; kill it to clear the stage." },
      { tag: "New", text: "Bosses now have a proper health bar across the top of the screen — their name and remaining health — so you can watch the fight turn." },
      { tag: "Balance", text: "Bosses are far tougher. No more melting them in two seconds, and their health now climbs smoothly from the first boss to the last, so every one is a real check." },
      { tag: "Improved", text: "Clearing a stage gets a victory moment — the camera swings around your captain for a hero shot before the results roll in." },
    ],
  },
  {
    version: "0.9.13",
    date: "2026-07-26",
    title: "Coin Runs & a Clearer Start",
    notes: [
      { tag: "New", text: "Gold now drops in trails — a run of coins down a single lane, with clear stretches of empty track between them. Chasing a trail means committing to its lane while the enemies pour down the others, so every run of gold is a little gamble." },
      { tag: "Improved", text: "The 'drag to move' tip now shows a finger sliding left and right between two arrows, so it's obvious you can steer either way." },
      { tag: "Improved", text: "Retrying a stage no longer replays its tutorial tip — you'll only see it again if you head back out and pick an early level on purpose." },
    ],
  },
  {
    version: "0.9.12",
    date: "2026-07-26",
    title: "Learning the Ropes",
    notes: [
      { tag: "New", text: "New captains get a proper welcome. The first few stages pause to teach one thing at a time — how to move, that your cannon fires on its own, your screen-clearing special, and where the gold is — and un-pause the moment you try it. Replay an early stage and it teaches you again." },
      { tag: "New", text: "Your special now charges as you fight. A ring meter on the left fills with every kill and lights up when it's ready to unleash — no more staring at a cooldown timer." },
      { tag: "Balance", text: "The opening stages are shorter so you can find your feet, easing back to full length by stage 10. And gold starts dropping from stage 5, so you reach the first boss with coins to spend." },
    ],
    images: [
      { src: "tutorialcontrols1.PNG", caption: "Tips pause the game — un-pause by doing them" },
      { src: "powerup1.PNG", caption: "The special charges as you kill" },
    ],
  },
  {
    version: "0.9.11",
    date: "2026-07-24",
    title: "Five Bosses, One Honest Loadout",
    notes: [
      { tag: "New", text: "Bosses are no longer all the same tentacle. Five different foes — Kraken, Captain, Mako, Sharky and Reaper — now rotate across the boss stages, and each one comes back tougher the next time you meet it." },
      { tag: "Fixed", text: "Your weapon and powerup upgrades weren't applying on the very first run after opening the game — you had to back out to the menu and play again for them to kick in. They now take effect on the first play, every time." },
      { tag: "Fixed", text: "Pressing PLAY straight from the Armory (or any other tab) no longer leaves that panel and its back button floating over the running game." },
      { tag: "Improved", text: "The Weapons tab in the Armory now unlocks once you reach Stage 4, so brand-new captains aren't drowning in upgrade options before they've earned the coins to use them." },
      { tag: "Fixed", text: "The divider under the top bar no longer draws across the PLAY button and your profile icon." },
    ],
  },
  {
    version: "0.9.10",
    date: "2026-07-23",
    title: "Stage Clear, Properly",
    notes: [
      { tag: "Fixed", text: "Clearing a stage sometimes failed to record anything at all — your stars, high score and the next stage unlock could all be quietly lost, and the results screen always claimed you had defeated 0 enemies. Runs are now saved reliably." },
      { tag: "New", text: "The clear screen tells you which stage you just beat, and now counts up the coins you earned in the run alongside enemies, distance and score." },
      { tag: "Improved", text: "Your stars now drop in from above and land in their slots one by one, and the empty slots are finally visible — so a one-star finish reads as one of three, not one star on its own." },
      { tag: "Fixed", text: "Reviving no longer drops you back in with enemies still standing on top of you." },
    ],
    images: [
      { src: "stageclear1.PNG", caption: "Before" },
      { src: "stageclear2.PNG", caption: "After" },
    ],
  },
  {
    version: "0.9.9",
    date: "2026-07-23",
    title: "Screens With Some Shine",
    notes: [
      { tag: "Improved", text: "The stage-clear screen is a celebration now: it pops in, your stars light up one at a time with a chime, and your run totals — enemies defeated, distance, score — tick up in front of you." },
      { tag: "Improved", text: "The Armory got a proper makeover. Every weapon and powerup is a card with an icon, a segmented level bar so you can see your progress at a glance, and a clean buy button. Cards slide in when you open a tab, and the one you upgrade gives a satisfying pop." },
    ],
  },
  {
    version: "0.9.8",
    date: "2026-07-22",
    title: "The Early Levels Bite Back",
    notes: [
      { tag: "Balance", text: "The opening stages were a walkover — no longer. Enemies now come more often and in bigger groups from the very first level, so the early game actually warms you up instead of putting you to sleep." },
      { tag: "Improved", text: "Wider battlefield: the track now has more lanes to steer between, and hordes spread across them — more to dodge, more to mow down." },
    ],
    images: [
      { src: "gameplay1.PNG", caption: "Denser early hordes across more lanes" },
    ],
  },
  {
    version: "0.9.7",
    date: "2026-07-21",
    title: "A New Home Screen",
    notes: [
      { tag: "New", text: "The home screen has been rebuilt around you. Your character's portrait sits top-left beside your name and a new Captain Level with its own XP bar, which fills as you collect stars, clear stages and defeat enemies." },
      { tag: "New", text: "PLAY is now a raised gold button in the centre of the bottom bar, so it travels with you across Levels, Skins and Armory instead of only living on the home page." },
      { tag: "New", text: "Your character now stands at ease on the home screen, breaking into the occasional wave, cheer or jab — picked at random, so it never falls into a pattern." },
      { tag: "Improved", text: "Lives are a single clear chip showing how many you have and the countdown to your next one, replacing the loose hearts and separate timer. Coins and lives both carry a + for topping up." },
      { tag: "Improved", text: "Quests and the watch-ad reward now sit together in one column on the right, leaving the left of the screen clear for your character." },
      { tag: "Fixed", text: "Your character stayed frozen during a run instead of animating. They now run, jump, slide and react properly." },
      { tag: "Fixed", text: "Progress is now written in a single block, so a crash or a force-close can no longer leave you charged for an upgrade you did not receive — or holding one you never paid for." },
      { tag: "Improved", text: "Smoother gameplay: the on-screen counters no longer redraw every single frame, easing memory pressure on phones during long runs." },
    ],
    images: [
      { src: "homescreen4.1.PNG", caption: "Before" },
      { src: "homescreen5.PNG", caption: "After" },
    ],
  },
  {
    version: "0.9.6",
    date: "2026-07-20",
    title: "Quests & a New Level Select",
    notes: [
      { tag: "New", text: "Quests are here! Daily and weekly tasks — defeat enemies, clear stages, earn stars, beat bosses and collect coins — each paying out coins to keep your upgrades coming. Tap the QUESTS icon on the home screen; a badge shows how many are ready to claim." },
      { tag: "New", text: "An Awards tab tracks your lifetime milestones: total enemies defeated, bosses beaten, stages cleared, stars collected and coins earned." },
      { tag: "New", text: "Claim All — when more than one quest on a tab is ready, collect them in a single tap." },
      { tag: "Improved", text: "Level select redesigned: far bigger cards showing five stages at a time, large gold stars, and a clear CLEARED / PLAY / LOCKED label. The list now reads downward from the newest stage and opens centred on the one you're up to." },
      { tag: "Improved", text: "Clearing a stage now unlocks the next one and automatically moves the PLAY button on to it." },
    ],
    images: [
      { src: "levelselect1.PNG", caption: "Before" },
      { src: "levelselect2.PNG", caption: "After" },
    ],
  },
  {
    version: "0.9.5",
    date: "2026-07-19",
    title: "Menu, Polished",
    notes: [
      { tag: "Improved", text: "The bottom menu bar now runs full-width across every menu screen — Home, Levels, Skins and Armory — and highlights the screen you're currently on, instead of only appearing on the home page." },
      { tag: "Improved", text: "The launch screen now frames the whole crew together — both heroes and both bosses — facing forward in a clean group shot." },
      { tag: "Fixed", text: "The home screen no longer has an off-colored band splitting it across the middle." },
      { tag: "Fixed", text: "Returning to the menu after finishing a level no longer detours through the loading screen." },
    ],
    images: [
      { src: "loadingscreen2.PNG", caption: "Launch screen: heroes and bosses together" },
      { src: "homescreen4.PNG",    caption: "Full-width bottom nav across all menus" },
    ],
  },
  {
    version: "0.9.4",
    date: "2026-07-19",
    title: "A Grand Entrance",
    notes: [
      { tag: "New", text: "The game now opens with a proper launch screen — your crew lined up under the BLTS banner with a loading bar, then tap to set sail." },
      { tag: "Improved", text: "A top-to-bottom menu makeover: one unified 'Royal Navy' look — deep navy panels, brass-gold titles, and bright-blue buttons — applied consistently across the home screen, level select, skins, and the armory." },
      { tag: "New", text: "The whole UI is now theme-driven, so seasonal and event skins can restyle every menu at once down the line." },
    ],
    images: [
      { src: "loadingscreen1.PNG", caption: "New launch screen" },
      { src: "homescreen3.PNG",    caption: "Refreshed home menu" },
    ],
  },
  {
    version: "0.9.3",
    date: "2026-07-14",
    title: "Cleaner Character Select",
    notes: [
      { tag: "Improved", text: "The home-screen character picker now shows only the real heroes — the old placeholder character has been removed, so you start on an actual character." },
    ],
  },
  {
    version: "0.9.2",
    date: "2026-07-14",
    title: "Progress at a Glance",
    notes: [
      { tag: "New", text: "A progress bar now runs up the side of the screen, filling as you advance so you always know how close you are to the finish gate." },
    ],
  },
  {
    version: "0.9.1",
    date: "2026-07-14",
    title: "Cross the Finish",
    notes: [
      { tag: "New", text: "Every level now ends at a finish gate — a glowing banner up ahead marks your goal, so you can see exactly how far you've got left to run." },
    ],
  },
  {
    version: "0.9.0",
    date: "2026-07-14",
    title: "Powerup Loadouts",
    notes: [
      { tag: "New", text: "The Armory has a new Powerups tab: level up Shield, Magnet, Weapon Boost, and Special Blast with coins to make each one stronger." },
      { tag: "New", text: "Build your loadout — pick the 2 powerups you want to find mid-run, and only those will drop, so you get the effects you're after." },
      { tag: "Improved", text: "Upgraded powerups last longer, and a maxed-out Special Blast clears even more of the screen." },
    ],
  },
  {
    version: "0.8.1",
    date: "2026-06-28",
    title: "Sharper Shooting",
    notes: [
      { tag: "Improved", text: "Your shots now fire from wherever you are, not fixed lanes — lines up perfectly with the new drag-to-steer aiming." },
      { tag: "Balance", text: "A slightly gentler pace so you've got more time to aim and clear enemies before they reach you." },
    ],
  },
  {
    version: "0.8.0",
    date: "2026-06-28",
    title: "Powerups & New Controls",
    notes: [
      { tag: "New", text: "Power-ups now drop mid-run: Shield (shrug off a hit), Magnet (pull in nearby coins), Weapon Boost (rapid max-power fire), and an instant Special blast." },
      { tag: "New", text: "Smoother drag-to-steer movement — hold and drag to weave between the lanes instead of swiping." },
      { tag: "New", text: "Captain Barbarossa joins the crew as a tough tank enemy, and a Tentacle now lurks as a boss." },
      { tag: "Fixed", text: "Enemies that had stopped animating are back in motion." },
      { tag: "Balance", text: "Denser skeleton hordes, and the tank is bigger and easier to hit." },
    ],
  },
  {
    version: "0.7.0",
    date: "2026-06-26",
    title: "Home Screen Glow-Up",
    notes: [
      { tag: "New", text: "A brand-new home screen: a glossy gold PLAY button, a glowing title with a tagline, and a warm spotlight on your character." },
      { tag: "New", text: "Cleaner top bar with coin and lives chips, a settings gear, and an icon-based bottom menu." },
      { tag: "Improved", text: "The background reflects your current world, and small touches — a gentle button pulse, a bobbing title — make it feel alive." },
    ],
    images: [
      { src: "homescreen.PNG", caption: "Before" },
      { src: "homescreen2.jpg", caption: "After" },
    ],
  },
  {
    version: "0.6.0",
    date: "2026-06-25",
    title: "Sound On",
    notes: [
      { tag: "New", text: "Music now plays on the home screen and during runs." },
      { tag: "New", text: "Sound effects for coins, jumps, slides, the special ability, enemy kills, and level complete." },
      { tag: "New", text: "Music and SFX can be toggled from the home-screen settings." },
    ],
  },
  {
    version: "0.5.0",
    date: "2026-06-24",
    title: "New Home Screen",
    notes: [
      { tag: "New", text: "Redesigned home screen: your character front and center, swap between characters with arrows." },
      { tag: "New", text: "The background now shows your current world — the home base changes as you progress." },
      { tag: "New", text: "Bottom nav bar for Levels, Skins, Armory and Shop, plus a settings menu." },
      { tag: "New", text: "Seasonal theme support — holiday looks (like a Christmas skin) can drop in automatically." },
    ],
  },
  {
    version: "0.4.0",
    date: "2026-06-22",
    title: "A Bigger Journey",
    notes: [
      { tag: "New", text: "Expanded to 100 levels with a difficulty curve that ramps the whole way." },
      { tag: "New", text: "10 themed worlds, one every 10 levels: Pier, Bridge, Sandbar, Open Ocean, Storm Seas, Coral Reef, Volcanic Isles, Frozen Sea, Sky Islands, and the Grand Line finale." },
      { tag: "Fixed", text: "Level scenery now renders correctly on the very first run, not only after a restart." },
    ],
  },
  {
    version: "0.3.0",
    date: "2026-06-20",
    title: "Loot & Treasure",
    notes: [
      { tag: "New", text: "Data-driven loot — gold coins and gold bags drop as you run, with room for power-ups to come." },
      { tag: "Improved", text: "Pickups now spin and can use real 3D models." },
    ],
  },
];
