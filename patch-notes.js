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
