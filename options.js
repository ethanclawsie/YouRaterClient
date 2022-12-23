document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("deletebuttonid")
    .addEventListener("click", deletepressed);
});

function deletepressed() {
  chrome.storage.local.get(["storeduuid"], function (result) {
    fetch("http://localhost:8080/deletedata", {
      method: "POST",
      body: new URLSearchParams({
        value: 1,
        userid: result.storeduuid,
      }),
    });
  });
  alert("Deleted your data");
}
//Deletes user data
