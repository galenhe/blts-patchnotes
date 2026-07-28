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
