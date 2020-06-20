
function fetch_data() {
    let data = fetch('https://spreadsheets.google.com/feeds/cells/' + GoogleSheetID + '/1/public/full?alt=json')
        .then(response => response.json())
        .then(data => {

            var marquee_string = "";

            for (i of data.feed.entry) {

                if (i.title.$t.includes("A")) {
                    marquee_string += i.gs$cell.inputValue + " ";
                }
            }

            document.getElementById("marquee").innerHTML = marquee_string;

        })
        .catch(error => {
            document.getElementById("marquee").innerHTML = PlaceholderText;
            console.error(error)
        }
        )

}

document.getElementById("marquee").innerHTML = PlaceholderText;
fetch_data();

window.setInterval(fetch_data, 1000);