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
