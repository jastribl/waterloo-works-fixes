$(document).on('click', '.btn.btn-mini.btn-primary.dropdown-toggle', function () {
    $($(this).next()).hide();
    $($(this).next()).find('a:last')[0].click();
});

var appStatues = $(".table.table-striped.table-bordered.table-hover.gridTable td:nth-child(2)");

appStatues.filter(function() {
    return $(this).text().includes("Selected for Interview");
}).closest("tr").css("background-color", "rgba(0, 255, 0, 0.4)");

appStatues.filter(function() {
    return $(this).text().includes("Not Selected");
}).closest("tr").css("background-color", "rgba(255, 0, 0, 0.4)");
