//Program to display two picture boxes with one being legends and one being weapons.
//The program will display a random legend and weapon from the list of legends and weapons.
//The program will also display a button to randomize the images and one to reset the images.

//Array of legends
const legendsSelection = [
    "Ash",
    "Bangalore",
    "Bloodhound",
    "Caustic",
    "Crypto",
    "Gibraltar",
    "Lifeline",
    "Loba",
    "Mirage",
    "Newcastle",
    "Octane",
    "Pathfinder",
    "Rampart",
    "Revenant",
    "Wattson",
    "Wraith",
    "Horizon",
    "Fuse",
    "Valkyrie",
    "Vantage",
    "Seer",
    "Mad_Maggie"
];
    
//Array of weapons
const weaponsSelection = [
    "30-30_Repeater",
    "Alternator_SMG",
    "Bocek_Compound_Bow",
    "C.A.R._SMG",
    "Charge_Rifle",
    "Devotion_LMG",
    "EVA-8_Auto",
    "G7_Scout",
    "HAVOC_Rifle",
    "Hemlok_Burst_AR",
    "Kraber_.50-Cal_Sniper",
    "L-STAR_EMG",
    "Longbow_DMR",
    "M600_Spitfire",
    "Mastiff_Shotgun",
    "Mozambique_Shotgun",
    "P2020",
    "Peacekeeper",
    "Prowler_Burst_PDW",
    "R-301_Carbine",
    "R-99_SMG",
    "Rampage_LMG",
    "RE-45_Auto",
    "Sentinel",
    "Triple_Take",
    "VK-47_Flatline",
    "Volt_SMG",
    "Wingman"
];

//Function to display a random legend and weapon
//Pictures found in the picture directory
function display() {
    //Get the current legend and weapon image elements
    const legend = document.getElementById("legendPic");
    const weapon = document.getElementById("weaponPic");

    //Get the text elements for legend and weapon
    const legendText = document.getElementById("legendText");
    const weaponText = document.getElementById("weaponText");

    //Get a random legend and weapon
    const randomLegend = legendsSelection[Math.floor(Math.random() * legendsSelection.length)];
    const randomWeapon = weaponsSelection[Math.floor(Math.random() * weaponsSelection.length)];

    //Console Log
    console.log("Legend: " + randomLegend);
    console.log("Weapon: " + randomWeapon);

    //Set the image by id to the random legend and weapon pictures from the pictures directory
    legend.src = `./pictures/legends/${randomLegend}_Icon.png`;
    weapon.src = `./pictures/weapons/${randomWeapon}_Icon.png`;

    //Set the text to the random legend and weapon
    legendText.innerHTML = randomLegend;
    weaponText.innerHTML = randomWeapon;
}

//Function to reset the legend and weapon images
function reset() {
    //Get the legend and weapon image elements
    const legend = document.getElementById("legendPic");
    const weapon = document.getElementById("weaponPic");
    //Get the text to the legend and weapon
    const legendText = document.getElementById("legendText");
    const weaponText = document.getElementById("weaponText");
    //Set the image source to the default image
    legend.src = `./pictures/legends/Kills_Icon.png`;
    weapon.src = `./pictures/weapons/Damage.png`;
    //Set the text to the default text
    legendText.innerHTML = "Legend";
    weaponText.innerHTML = "Weapon";
}

//Language: javascript
//Path: app.js
