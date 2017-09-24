$(document).on('click', '.btn.btn-mini.btn-primary.dropdown-toggle', function () {
    $($(this).next()).hide();
    $($(this).next()).find('a:last')[0].click();
});

