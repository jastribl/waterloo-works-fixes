$(document).on('click', '.btn.btn-mini.btn-primary.dropdown-toggle', function () {
    $($(this).next()).hide();
    $($(this).next()).find('a:last')[0].click();
});

var appStatues = $("#postingsTableDiv td:nth-child(2)");

appStatues.filter(function() {
    return $(this).text().includes("Selected for Interview");
}).parent().find("td").css("background-color", "rgba(0, 255, 0, 0.4)");

appStatues.filter(function() {
    return $(this).text().includes("Not Selected") || ($(this).text().includes("Applied") && $(this).parent().find("td:nth-child(8)").text().includes("Interview Selections Complete"));
}).parent().find("td").css("background-color", "rgba(255, 0, 0, 0.4)");
