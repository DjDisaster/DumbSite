alpha = 0.5
way = true
const body = document.body;
setInterval(function() {
    if (way) {
        alpha += 0.01;
    } else {
        alpha -= 0.01;
    }

    if (alpha <= 0.5) {
        way = true;
    } else if (alpha >= 1) {
        way = false;
    }

    body.style.backgroundImage = 'linear-gradient(rgba(255,255,255,0), rgba(0,0,255,' + alpha + '))';
}, 50)




data = [
    ["Cat Ownership", [["Cats per Person", 1.2]]],
    ["Coffee Drinking", [["Cups per Day", 3.8], ["Spills per Week", 1.5], ["Coffee Strength", 8.2]]],
    ["Bathroom Breaks", [["Average Breaks per Day", 4.3]]],
    ["Socks Lost", [["Pairs Lost per Year", 4.6], ["Left Socks Lost", 3.1]]],
    ["Pizza Consumption", [["Slices per Month", 12.5]]],
    ["Bubble Wrap Popping", [["Pops per Session", 33]]],
    ["Chewing Gum", [["Bubbles Blown per Pack", 7.3], ["Chewing Time per Piece (Minutes)", 6.2]]],
    ["Procrastination", [["Hours Spent per Day", 2.4]]],
    ["Email Inbox", [["Unread Emails", 247], ["Spam Emails per Week", 52]]],
    ["Chairs Sat On", [["Average Chairs per Day", 5.2]]],
    ["Ice Cream Consumption", [["Scoops per Week", 9.1]]],
    ["Dogs Barking", [["Barks per Day", 23]]],
    ["Phone Dropping", [["Drops per Month", 3.6]]],
    ["Plants Watered", [["Average Watering Sessions per Week", 4.1]]],
    ["Pencil Sharpening", [["Times Sharpened per Day", 1.2]]],
    ["Car Honking", [["Honks Heard per Week", 12]]],
    ["Lawn Mowing", [["Lawns Mowed per Month", 1.7]]],
    ["TV Binge-Watching", [["Episodes Watched per Session", 6.3]]],
    ["Alarm Snoozing", [["Snoozes per Morning", 2.8]]],
    ["Losing Remote", [["Times per Week", 2.5]]],
    ["Water Bottle Refills", [["Refills per Day", 4.6]]],
    ["Shoelaces Untied", [["Times Untied per Day", 1.3]]],
    ["Trips to the Fridge", [["Visits per Day", 7.2]]],
    ["Forgotten Birthdays", [["Times Forgotten per Year", 1.1]]],
    ["Social Media Scrolling", [["Minutes per Day", 98]]],
    ["Handwriting", [["Times Writing per Day", 3.9]]],
    ["Misspelled Words", [["Words Misspelled per Week", 2.7]]],
    ["To-Do List", [["Tasks Completed per Day", 4.8]]],
    ["Sneezing", [["Sneezes per Day", 1.9]]],
    ["Snacks Eaten", [["Snacks per Day", 2.3]]],
    ["Photos Taken", [["Photos Taken per Day", 8.6]]],
    ["Haircuts", [["Haircuts per Year", 7.2]]],
    ["Yawning", [["Yawns per Day", 6.5]]],
    ["Pens Clicked", [["Clicks per Day", 12]]],
    ["Doodles Drawn", [["Doodles per Week", 3.4]]],
    ["Nail Biting", [["Nails Bitten per Day", 1.8]]],
    ["Bubblegum Pops", [["Pops per Piece", 5.3]]],
    ["Internet Tabs Open", [["Tabs Open at Once", 9.4]]],
    ["Keys Misplaced", [["Times per Month", 2.7]]],
    ["Elevator Rides", [["Rides per Week", 4.1]]],
    ["Laundry Loads", [["Loads per Week", 2.3]]],
    ["Dishes Washed", [["Dishes Washed per Week", 24.6]]],
    ["Microwave Usage", [["Times Used per Day", 3.1]]],
    ["Refrigerator Door Openings", [["Openings per Day", 7.7]]],
    ["Ice Cubes Dropped", [["Cubes Dropped per Month", 5.9]]],
    ["Favorite Mug Usage", [["Times Used per Day", 2.8]]],
    ["Recycling", [["Items Recycled per Week", 19.5]]],
    ["Umbrella Usage", [["Times Used per Year", 2.4]]],
    ["Shoes Bought", [["Pairs per Year", 4.3]]],
    ["Blankets Used", [["Blankets Used per Night", 1.8]]],
    ["Books Started", [["Books per Year", 12.7]]],
    ["Books Finished", [["Books Finished per Year", 7.1]]],
    ["Naps Taken", [["Naps per Week", 3.9]]]
    ["Pillows Used", [["Pillows per Night", 2.4]]],
    ["Handshakes", [["Handshakes per Week", 4.6]]],
    ["Shoelaces Tied", [["Ties per Day", 1.7]]],
    ["Headphones Lost", [["Headphones Lost per Year", 1.3]]],
    ["Coffee Reheating", [["Reheats per Cup", 2.1]]],
    ["Socks Mismatched", [["Times per Month", 3.2]]],
    ["Emails Ignored", [["Emails Ignored per Day", 5.4]]],
    ["Selfies Taken", [["Selfies per Day", 2.6]]],
    ["Microwave Time Left", [["Average Seconds Left on Timer", 7.8]]],
    ["Watermelon Seeds Spat", [["Seeds Spat per Summer", 35]]],
    ["Wrong Number Calls", [["Wrong Calls per Month", 1.9]]],
    ["Lights Left On", [["Times per Week", 3.3]]],
    ["Dog Walks", [["Walks per Week", 6.4]]],
    ["Post-Its Used", [["Post-Its Used per Month", 24.5]]],
    ["Pasta Bowls Eaten", [["Bowls per Month", 9.1]]],
    ["Lies About 'Being Fine'", [["Times per Month", 7.2]]],
    ["Keys Locked Inside Car", [["Times per Year", 0.8]]],
    ["Fingers Burned on Hot Coffee", [["Burns per Month", 1.3]]],
    ["Times Forgot Phone", [["Times per Month", 1.1]]],
    ["Spaghetti Strands Dropped", [["Strands per Meal", 2.8]]],
    ["Kettle Boil-Overs", [["Boil-Overs per Month", 0.5]]],
    ["Daydreaming", [["Minutes per Day", 21.6]]],
    ["People Waved At Mistakenly", [["Waves per Year", 3.9]]],
    ["Times Pressed Elevator Button Multiple Times", [["Times per Week", 4.2]]],
    ["Unnecessary Apologies", [["Apologies per Day", 3.1]]],
    ["Water Bottles Dropped", [["Drops per Month", 2.7]]],
    ["Socks Worn Inside Out", [["Times per Month", 1.2]]],
    ["Fridge Checked for Food", [["Times per Day", 5.4]]],
    ["Ties Worn", [["Times Worn per Year", 2.6]]],
    ["Unfinished Emails", [["Unfinished Emails per Week", 1.8]]],
    ["Toilet Paper Rolls Finished", [["Rolls per Week", 2.4]]],
    ["Sneakers Worn", [["Sneakers Worn per Month", 15.3]]],
    ["Times Tried to Unlock Wrong Car", [["Times per Year", 0.9]]],
    ["Alarm Clock Checked", [["Times per Night", 2.1]]],
    ["Social Media Notifications Ignored", [["Ignored per Week", 9.7]]],
    ["Steps to Get Comfortable", [["Shuffles per Night", 4.6]]],
    ["Time Spent Staring Into Space", [["Minutes per Day", 14.3]]],
    ["TV Channels Flipped", [["Channels per Hour", 5.2]]],
    ["Car Horns Heard", [["Horns per Day", 3.8]]],
    ["Sandwiches Dropped", [["Sandwiches per Year", 1.7]]],
    ["Jars Opened", [["Jars per Month", 3.2]]],
    ["Butter Knife Used on Peanut Butter Jar", [["Times per Month", 5.5]]],
    ["Tea Bags Left Too Long", [["Times per Month", 3.4]]],
    ["Shoes Untied While Walking", [["Unties per Month", 0.8]]],
    ["Pillows Punched to Get Comfy", [["Punches per Night", 2.9]]],
    ["Spoons Used Instead of Fork", [["Times per Week", 2.6]]],
    ["Fingers Used as Bookmark", [["Times per Month", 6.1]]],
    ["Days Worn Same T-shirt", [["Days per Month", 4.2]]],
    ["Attempts to Open Stuck Zipper", [["Attempts per Incident", 3.9]]],
    ["Unintentional Rhyming", [["Times per Week", 1.2]]],
    ["Pens Borrowed and Never Returned", [["Pens per Year", 4.4]]],
    ["Pens Found Under Couch", [["Pens per Month", 2.1]]],
    ["Videos Watched at 2x Speed", [["Videos per Week", 4.9]]],
    ["Times Phone Battery Hit 1%", [["Times per Month", 3.7]]],
    ["Ceiling Fan Glares", [["Times per Day", 2.3]]]
]

var currentElement = 0;
var delayPerChar = 35;
var delayPerLine = 500;

function next() {
    current = data[currentElement];

    if (currentElement == data.length) {
        currentElement = -1;
    }

    next = data[currentElement + 1];
    transition(current, next)

    currentElement++;
}

function transition(current, next) {

    currentTitle = current[0];
    newTitle = next[0];


    currentTimeout = 0;
    for (let n = 1; n <= currentTitle.length; n++) {
        currentTimeout += delayPerChar;
        
        setTimeout(function() {
            var newText = currentTitle.substring(0,currentTitle.length - n);
            if (n % 2 == 0) {
                newText += "_"
            }
            document.getElementById("title").innerText = newText;
        }, currentTimeout);
    }

    for (let n = 1; n <= newTitle.length; n++) {
        currentTimeout += delayPerChar;
        
        setTimeout(function() {
            var newText = newTitle.substring(0,n);
            if (n % 2 == 0 && n != newText.length) {
                newText += "_"
            }
            document.getElementById("title").innerText = newText;
        }, currentTimeout);
    }

    document.getElementById("data").innerText = "";
    var currentText = "";
    var currentTimeout = 200;
    for (let n = 0; n < next[1].length; n++) {
        currentTimeout += delayPerLine;
        setTimeout(function() {
            var element = next[1][n];
            currentText += element[0] + ": " + element[1];
            currentText += "\n"
            document.getElementById("data").innerText = currentText;
        }, currentTimeout)
    }



}



setInterval(next, 5000);
next()