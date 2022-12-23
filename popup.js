getdata();

async function getdata() {
  await chrome.storage.local.get(
    ["storedvideotitle", "storedvideoid", "storeduuid", "storedthumbnail"],
    async function (result) {
      document.getElementById("videoname").innerHTML = result.storedvideotitle;
      var thumb = document.getElementById("thumbnail");
      thumb.src = result.storedthumbnail;
      //Sets the thumbnail and video name

      (async () => {
        fetch("https://YouRaterServerGo.ethancl.repl.co/countget", {
          method: "POST",
          body: new URLSearchParams({
            videoid: result.storedvideoid,
          }),
        })
          .then((res) => res.text())
          .then((res) => {
            if (res === "0") {
              document.getElementById("ratingcount").innerHTML =
                "No ratings yet";
            } else {
              document.getElementById("ratingcount").innerHTML = res;
            }
          });
      })();

      //Gets the rating count

      (async () => {
        fetch("https://YouRaterServerGo.ethancl.repl.co/avgget", {
          //works
          method: "POST",
          body: new URLSearchParams({
            videoid: result.storedvideoid,
          }),
        })
          .then((res) => res.text())
          .then((res) => {
            if (res === "0.0") {
              document.getElementById("averagerating").innerHTML =
                "No ratings yet";
            } else {
              document.getElementById("averagerating").innerHTML = res;
            }
          });
      })();
      //Gets the average rating

      (async () => {
        fetch("https://YouRaterServerGo.ethancl.repl.co/yourget", {
          method: "POST",
          body: new URLSearchParams({
            videoid: result.storedvideoid,
            userid: result.storeduuid,
          }),
        })
          .then((res) => res.text())
          .then((res) => {
            if (res === "") {
              document.getElementById("yourrating").innerHTML =
                "No ratings yet";
            } else {
              document.getElementById("yourrating").innerHTML = res;
            }
          });
      })();
      //Gets the users rating
    }
  );
}

// Pure JS:
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("star1").addEventListener("click", b1pressed);
  document.getElementById("star2").addEventListener("click", b2pressed);
  document.getElementById("star3").addEventListener("click", b3pressed);
  document.getElementById("star4").addEventListener("click", b4pressed);
  document.getElementById("star5").addEventListener("click", b5pressed);
});

function pressed(stars) {
  chrome.storage.local.get(["storedvideoid", "storeduuid"], function (result) {
    fetch("https://YouRaterServerGo.ethancl.repl.co/valget", {
      method: "POST",
      body: new URLSearchParams({
        value: stars,
        videoid: result.storedvideoid,
        userid: result.storeduuid,
      }),
    });
    setTimeout(function () {
      window.location.reload();
    }, 200);
  });
}

function b1pressed() {
  pressed(1);
}
//Sets the rating for the video to 1

function b2pressed() {
  pressed(2);
}
//Sets the rating for the video to 2

function b3pressed() {
  pressed(3);
}
//Sets the rating for the video to 3

function b4pressed() {
  pressed(4);
}
//Sets the rating for the video to 4

function b5pressed() {
  pressed(5);
}
//Sets the rating for the video to 5
