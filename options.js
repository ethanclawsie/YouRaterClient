document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("deletebuttonid")
    .addEventListener("click", deletepressed);
});

function deletepressed() {
  chrome.storage.local.get(["storeduuid"], function (result) {
    fetch("http://147.182.241.206:4040/deletedata", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        value: 1,
        uuid: result.storeduuid,
      }),
    });
  });
  alert("Deleted your data");
}
//Deletes user data
