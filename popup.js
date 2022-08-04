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
        var countresponse = await fetch(
          "http://147.182.241.206:4040/countget",
          {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({
              videoid: result.storedvideoid,
              uuid: result.storeduuid,
            }),
          }
        );
        var count = await countresponse.text();
        document.getElementById("ratingcount").innerHTML = count;
      })();
      //Gets the rating count

      (async () => {
        var avgresponse = await fetch("http://147.182.241.206:4040/avgget", {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify({
            videoid: result.storedvideoid,
            uuid: result.storeduuid,
          }),
        });
        var avg = await avgresponse.text();
        document.getElementById("averagerating").innerHTML = avg;
      })();
      //Gets the average rating count

      var yourresponse = await fetch("http://147.182.241.206:4040/yourget", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          videoid: result.storedvideoid,
          uuid: result.storeduuid,
        }),
      });
      var your = await yourresponse.text();
      document.getElementById("yourrating").innerHTML = your;
    }
    //Gets the users rating
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

function b1pressed() {
  chrome.storage.local.get(["storedvideoid", "storeduuid"], function (result) {
    fetch("http://147.182.241.206:4040/valget", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        value: 1,
        videoid: result.storedvideoid,
        uuid: result.storeduuid,
      }),
    });
    setTimeout(function () {
      window.location.reload();
    }, 200);
  });
}
//Sets the rating for the video to 1

function b2pressed() {
  chrome.storage.local.get(["storedvideoid", "storeduuid"], function (result) {
    fetch("http://147.182.241.206:4040/valget", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        value: 2,
        videoid: result.storedvideoid,
        uuid: result.storeduuid,
      }),
    });
    setTimeout(function () {
      window.location.reload();
    }, 200);
  });
}
//Sets the rating for the video to 2

function b3pressed() {
  chrome.storage.local.get(["storedvideoid", "storeduuid"], function (result) {
    fetch("http://147.182.241.206:4040/valget", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        value: 3,
        videoid: result.storedvideoid,
        uuid: result.storeduuid,
      }),
    });
    setTimeout(function () {
      window.location.reload();
    }, 200);
  });
}
//Sets the rating for the video to 3

function b4pressed() {
  chrome.storage.local.get(["storedvideoid", "storeduuid"], function (result) {
    fetch("http://147.182.241.206:4040/valget", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        value: 4,
        videoid: result.storedvideoid,
        uuid: result.storeduuid,
      }),
    });
    setTimeout(function () {
      window.location.reload();
    }, 200);
  });
}
//Sets the rating for the video to 4

function b5pressed() {
  chrome.storage.local.get(["storedvideoid", "storeduuid"], function (result) {
    fetch("http://147.182.241.206:4040/valget", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        value: 5,
        videoid: result.storedvideoid,
        uuid: result.storeduuid,
      }),
    });
    setTimeout(function () {
      window.location.reload();
    }, 200);
  });
}
//Sets the rating for the video to 5
