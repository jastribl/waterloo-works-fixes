$(document).on('click', '.btn.btn-mini.btn-primary.dropdown-toggle', function () {
    $($(this).next()).hide();
    $($(this).next()).find('a:last')[0].click();
});

var highlightTimeout = null;

var highlightJobStatus = function () {
    const RED_CSS = "rgba(255, 0, 0, 0.4)";
    const GREEN_CSS = "rgba(0, 255, 0, 0.4)";
    var appStatues = $("#postingsTableDiv td:nth-child(2)");

    appStatues.filter(function() {
        return $(this).text().includes("Selected for Interview");
    }).parent().find("td").css("background-color", GREEN_CSS);

    appStatues.filter(function() {
        const internalStatus = $(this).parent().find("td:nth-child(8)").text();
        const interviewsDone = internalStatus.includes("Interview Selections Complete") || internalStatus.includes("Interview Complete");
        const cancelledJob = internalStatus.includes("Cancel");
        return cancelledJob || $(this).text().includes("Not Selected") || ($(this).text().includes("Applied") && interviewsDone);
    }).parent().find("td").css("background-color", RED_CSS);
};

$(document).on('click', 'a', function() {
    if (highlightTimeout) {
        clearTimeout(highlightTimeout);
    }
    highlightTimeout = setTimeout(highlightJobStatus, 1000);
});

highlightJobStatus();
