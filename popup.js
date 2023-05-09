
function logTestMessage() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let tab = tabs[0];
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: () => {
                console.log(document.designMode = "on");
            }
        });
    });
}


function showInVsCode() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let tab = tabs[0];
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: () => {
                window.location.href = window.location.href.replace("github", "vscode.dev/github");
                
            }
        });
    });
}

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let tab = tabs[0];
    document.getElementById("log-button").addEventListener("click", logTestMessage);
    document.getElementById("github-button").addEventListener("click", showInVsCode);
});

