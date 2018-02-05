$(document).ready(function() {
    $("#search").click(function() {
      let searchInput = $("#searchInput").val();
      let url =
        "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
        searchInput +
        "&format=json&callback=?";
  
      $.getJSON(url, function(wikiData) {
        let returnHTML = "";
        for (let i = 0; i < wikiData[1].length; i++) {
          returnHTML += '<a href="';
          returnHTML += wikiData[3][i];
          returnHTML += '" target="blank">';
          returnHTML += "<li>";
          returnHTML += "<span><h1>" + wikiData[1][i] + "</h1></span>";
          returnHTML += "<br>";
          returnHTML += wikiData[2][i];
          returnHTML += "<br>";
          returnHTML += "<span><h2>" + wikiData[3][i] + "</h2></span>";
          returnHTML += "</li></a>";
        } // end of FOR statement
        document.getElementById("output").innerHTML = returnHTML;
      }); //end of JSON call
    }); // end of search click
  }); // end of ready